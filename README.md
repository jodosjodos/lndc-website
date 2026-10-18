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

The site is served by Mailcow's nginx on the mail VPS. Config files are in `deploy/`.

```bash
npm run build
rsync -avz --delete dist/ root@161.97.105.231:/srv/lndc-website/
```

No restart is needed after an rsync: nginx serves the new files immediately.
