import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BUSINESS_DIVISIONS } from '../src/data/businessesData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicImagesDir = path.join(rootDir, 'public', 'images');

// Ensure all directories exist
const divisions = ['dairy', 'fruits', 'vegetables', 'protein', 'meal-box', 'pooja-items', 'hero'];
for (const dir of divisions) {
  const dirPath = path.join(publicImagesDir, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Generate fallback SVG placeholder if download fails
function generateSvgPlaceholder(title, divisionName) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600" fill="none">
    <rect width="800" height="600" fill="#173B20"/>
    <rect x="20" y="20" width="760" height="560" rx="16" stroke="#D5B45E" stroke-width="2" stroke-opacity="0.4"/>
    <circle cx="400" cy="240" r="70" fill="#0C2815" stroke="#D5B45E" stroke-width="2"/>
    <text x="400" y="248" text-anchor="middle" font-family="Georgia, serif" font-size="28" font-weight="bold" fill="#D5B45E">CSR</text>
    <text x="400" y="360" text-anchor="middle" font-family="Georgia, serif" font-size="32" font-weight="bold" fill="#FBFAF4">${title}</text>
    <text x="400" y="400" text-anchor="middle" font-family="sans-serif" font-size="16" font-weight="600" fill="#D5B45E" letter-spacing="2">${divisionName.toUpperCase()}</text>
    <text x="400" y="440" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#E6D9B6">CSR Group of Companies &bull; Placeholder Image</text>
  </svg>`;
}

async function downloadFile(url, destPath, title, divisionName) {
  try {
    console.log(`Downloading: ${title} -> ${path.relative(rootDir, destPath)}`);
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync(destPath, buffer);
    console.log(`✓ Saved: ${path.basename(destPath)} (${Math.round(buffer.length / 1024)} KB)`);
  } catch (err) {
    console.warn(`! Fallback for ${title}: ${err.message}`);
    // If JPG download fails, write SVG placeholder
    const svgPath = destPath.endsWith('.jpg') ? destPath.replace('.jpg', '.svg') : destPath;
    fs.writeFileSync(svgPath, generateSvgPlaceholder(title, divisionName));
  }
}

async function run() {
  console.log('--- Starting CSR Image Placeholders Download ---');

  // Hero default
  await downloadFile(
    'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1600&q=80',
    path.join(publicImagesDir, 'hero', 'banner.jpg'),
    'Corporate Hero Banner',
    'CSR Group of Companies'
  );

  for (const division of BUSINESS_DIVISIONS) {
    console.log(`\nProcessing division: ${division.name}`);

    // Division Hero
    const heroDest = path.join(rootDir, 'public', division.heroImage.replace(/^\//, ''));
    await downloadFile(division.heroFallback, heroDest, `${division.name} Hero`, division.name);

    // Division Card
    const cardDest = path.join(rootDir, 'public', division.cardImage.replace(/^\//, ''));
    await downloadFile(division.cardFallback, cardDest, `${division.name} Card`, division.name);

    // Categories
    for (const cat of division.categories) {
      const catDest = path.join(rootDir, 'public', cat.image.replace(/^\//, ''));
      await downloadFile(cat.fallback, catDest, cat.name, division.name);
    }
  }

  console.log('\n✓ All placeholder images downloaded and stored locally in public/images/!');
}

run();

