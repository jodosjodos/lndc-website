// Builds the 1200×630 social sharing image: `node scripts/build-og.mjs`.
import { readFileSync } from 'node:fs';
import sharp from 'sharp';

const W = 1200;
const H = 630;
const logo = readFileSync('src/assets/logo.svg', 'utf8').replaceAll('#0A96EE', '#FFFFFF');

const overlay = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#0a2540" stop-opacity="0.94"/>
      <stop offset="0.55" stop-color="#0a2540" stop-opacity="0.6"/>
      <stop offset="1" stop-color="#0a2540" stop-opacity="0.1"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <text x="80" y="390" font-family="Georgia, 'Times New Roman', serif" font-size="62" fill="#fff">Lycée Notre-Dame</text>
  <text x="80" y="462" font-family="Georgia, 'Times New Roman', serif" font-size="62" fill="#fff">de Cîteaux</text>
  <text x="82" y="530" font-family="Helvetica, Arial, sans-serif" font-size="26" letter-spacing="3" fill="#7cc8f7">GIRLS' SECONDARY SCHOOL · KIGALI · LNDC.RW</text>
</svg>`);

const logoPng = await sharp(Buffer.from(logo), { density: 300 }).resize(190).png().toBuffer();

await sharp('src/assets/photos/cultural-dance.jpg')
  .resize(W, H, { fit: 'cover', position: 'attention' })
  .composite([{ input: overlay }, { input: logoPng, left: 80, top: 90 }])
  .jpeg({ quality: 84, mozjpeg: true })
  .toFile('public/og.jpg');
console.log('public/og.jpg written');
