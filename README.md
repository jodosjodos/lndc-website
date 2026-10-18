# lndc.rw — Lycée Notre-Dame de Cîteaux website

Static website built with [Astro](https://astro.build), Tailwind CSS, GSAP and Lenis. No database, no admin panel: the build produces plain HTML files in `dist/`.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies (first time only) |
| `npm run dev` | Local preview at http://localhost:4321 while editing |
| `npm run build` | Build the site into `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npx astro check` | Type-check everything |
| `node scripts/build-logo.mjs` | Regenerate the logo SVG and icons |
| `node scripts/build-og.mjs` | Regenerate the social sharing image `public/og.jpg` |

## Where to change things

| To change… | Edit |
| --- | --- |
| Contact details, motto, head teacher, values, A-Level combinations | `src/data/site.ts` |
| Results band and the About timeline | `src/data/achievements.ts` |
| News items and every source link | `src/data/press.ts` |
| Photos, captions and credits | `src/data/photos.ts` (put image files in `src/assets/photos/`) |
| Page text | `src/pages/*.astro` |
| Colours and fonts | `src/styles/global.css` (`@theme` block) |

Every fact on the site is backed by a source in `src/data/press.ts`. Keep it that way: add the source first, then the claim.

### Adding a news item

Add an entry at the top of `sources` in `src/data/press.ts` (`date` can be `YYYY`, `YYYY-MM` or `YYYY-MM-DD`). It appears on the News page automatically, and on the homepage if it is an article.

### Adding a photo

1. Copy the image into `src/assets/photos/`.
2. Import it in `src/data/photos.ts` and add an entry with `alt`, `caption`, `credit` and `album`.
3. It shows up in the Gallery automatically.

## Deploying

Every push to `main` deploys automatically (`.github/workflows/deploy.yml`):

1. GitHub Actions runs `npm ci`, `astro check` and `astro build`. Any error stops here and the live site is untouched.
2. The built `dist/` is uploaded with rsync to `/srv/lndc-website/releases/<commit>/` on the VPS. Only changed files are sent.
3. The `current` symlink is switched to the new release in one step, so visitors never see a half-updated site.
4. The workflow checks that the live site is serving the new commit. The last 5 releases are kept.

Pull requests are built and checked, never deployed. You can redeploy from the Actions tab with "Run workflow".

Mailcow's nginx serves `/srv/lndc-website/current`. Server files live in `deploy/`:

| File | On the VPS |
| --- | --- |
| `deploy/lndc-deploy.sh` | `/usr/local/bin/lndc-deploy`, the only command the deploy key may run |
| `deploy/lndc-website.conf` | `/opt/mailcow-dockerized/data/conf/nginx/lndc-website.conf` |
| `deploy/docker-compose.override.yml` | merged into `/opt/mailcow-dockerized/docker-compose.override.yml` |

GitHub settings the workflow needs: repository variables `DEPLOY_HOST`, `DEPLOY_USER` (and `DEPLOY_PORT` if SSH isn't on 22); `production` environment secrets `DEPLOY_SSH_KEY` and `DEPLOY_KNOWN_HOSTS`. Until `DEPLOY_HOST` exists, the deploy job is skipped.

### Rolling back

```bash
ssh -i ~/.ssh/lndc_deploy deploy@161.97.105.231 rollback
```

`ssh -i ~/.ssh/lndc_deploy deploy@161.97.105.231 status` shows the live release and the ones kept.
