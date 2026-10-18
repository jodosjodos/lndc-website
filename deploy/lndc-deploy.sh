#!/bin/sh
# Installed on the VPS as /usr/local/bin/lndc-deploy and forced on the deploy SSH key,
# so that key can only upload a release, switch to it, or roll back — nothing else.
set -eu

ROOT=${LNDC_ROOT:-/srv/lndc-website}
KEEP=5
cmd=${SSH_ORIGINAL_COMMAND:-}

valid_release() {
  case "$1" in
    '' | *[!0-9a-f]*) echo "invalid release id" >&2; exit 1 ;;
  esac
}

case "$cmd" in
  'rsync --server '*)
    exec /usr/bin/rrsync "$ROOT/releases"
    ;;

  'prepare '*)
    release=${cmd#prepare }
    valid_release "$release"
    rm -rf "$ROOT/releases/$release"
    # Hard-link copy of the live release, so rsync only has to send what changed.
    if [ -d "$ROOT/current/" ]; then
      cp -al "$ROOT/current/." "$ROOT/releases/$release"
    else
      mkdir -p "$ROOT/releases/$release"
    fi
    ;;

  'activate '*)
    release=${cmd#activate }
    valid_release "$release"
    [ -f "$ROOT/releases/$release/index.html" ] || { echo "release $release is incomplete" >&2; exit 1; }
    # Relative target: the same link must resolve inside the nginx container's mount.
    ln -sfn "releases/$release" "$ROOT/current.next"
    mv -Tf "$ROOT/current.next" "$ROOT/current"
    ls -1dt "$ROOT"/releases/*/ | tail -n +$((KEEP + 1)) | xargs -r rm -rf
    echo "live: $release"
    ;;

  'rollback')
    live=$(basename "$(readlink "$ROOT/current")")
    previous=$(ls -1t "$ROOT/releases" | awk -v live="$live" 'found { print; exit } $0 == live { found = 1 }')
    [ -n "$previous" ] || { echo "no earlier release to roll back to" >&2; exit 1; }
    ln -sfn "releases/$previous" "$ROOT/current.next"
    mv -Tf "$ROOT/current.next" "$ROOT/current"
    echo "live: $previous"
    ;;

  'status')
    readlink "$ROOT/current" || echo "nothing deployed yet"
    ls -1t "$ROOT/releases"
    ;;

  *)
    echo "not allowed" >&2
    exit 1
    ;;
esac
