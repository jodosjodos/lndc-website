// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lndc.rw',
  // nginx serves /about from about/index.html, so URLs never need the trailing slash.
  trailingSlash: 'never',
  // Astro's compressor drops the space before inline links that start on a new source line.
  compressHTML: false,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
