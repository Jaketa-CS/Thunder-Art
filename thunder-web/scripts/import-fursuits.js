import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Hand-picked list from User
const TARGET_URLS = [
  'https://www.furtrack.com/index/character:thunder_(gryphon)/1590240',
  'https://www.furtrack.com/index/character:thunder_(gryphon)/1561441',
  'https://www.furtrack.com/index/character:thunder_(gryphon)/1561440',
  'https://www.furtrack.com/index/character:thunder_(gryphon)/1582133',
  'https://www.furtrack.com/index/character:thunder_(gryphon)/1353185',
  'https://www.furtrack.com/index/character:thunder_(gryphon)/1353179',
  'https://www.furtrack.com/index/character:thunder_(gryphon)/1352828',
  'https://www.furtrack.com/index/character:thunder_(gryphon)/1274012',
  'https://www.furtrack.com/index/character:thunder_(gryphon)/1257985',
  'https://www.furtrack.com/index/character:thunder_(gryphon)/1257983',
  'https://www.furtrack.com/index/character:thunder_(gryphon)/1259687',
  'https://www.furtrack.com/index/character:thunder_(gryphon)/1257961',
  'https://www.furtrack.com/index/character:thunder_(gryphon)/1250568',
  'https://www.furtrack.com/index/character:thunder_(gryphon)/1257970',
  'https://www.furtrack.com/index/character:thunder_(gryphon)/1274043',
  'https://www.furtrack.com/index/character:thunder_(gryphon)/1250343',
  'https://www.furtrack.com/index/character:thunder_(gryphon)/1570632',
];

const OUTPUT_DIR = path.join(__dirname, '../public/fursuit');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Helper to download
const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res
          .pipe(fs.createWriteStream(filepath))
          .on('error', reject)
          .once('close', () => resolve(filepath));
      } else {
        res.resume();
        reject(new Error(`${res.statusCode}`));
      }
    });
  });
};

(async () => {
  console.log('🦁 Launching browser to scrape metadata and photos...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  );

  const credits = {};
  let count = 0;

  for (const pageUrl of TARGET_URLS) {
    count++;
    const filename = `fTrackImage-${count}.jpg`;
    const filepath = path.join(OUTPUT_DIR, filename);
    const id = pageUrl.split('/').pop();

    console.log(`[${count}/${TARGET_URLS.length}] Processing ${pageUrl}...`);

    // We try to scrape mainly for the CREDITS.
    // If we can also find the High-Res image URL from the page, great.
    // If not, we fallback to our CDN guess pattern.

    let photographer = 'Unknown';
    let highResUrl = null;

    try {
      await page.goto(pageUrl, {
        waitUntil: 'domcontentloaded',
        timeout: 30000,
      });

      // 1. Get Photographer from Title
      // Usually: "Thunder (Gryphon) at [Event] by [Photographer] - FurTrack"
      const title = await page.title();
      console.log(`   📄 Title: ${title}`);

      if (title.includes(' by ')) {
        const parts = title.split(' by ');
        if (parts.length > 1) {
          // "Photographer - FurTrack"
          const suffix = parts[1].split(' - ')[0];
          photographer = suffix.trim();
        }
      }

      // 2. Try to find image on page (might fail like before due to JS render)
      // But we rely on our CDN fallback logic mostly.
    } catch (e) {
      console.error(
        `   ⚠️ Failed to visit page (network/timeout): ${e.message}`
      );
    }

    // Fallback/Verify Image Download
    // Try patterns
    const patterns = [
      `https://orca2.furtrack.com/cdn/${id}.jpg`,
      `https://orca2.furtrack.com/pubs/${id}.jpg`,
      `https://orca2.furtrack.com/thumb/${id}.jpg`,
    ];

    let downloaded = false;
    for (const url of patterns) {
      try {
        await downloadImage(url, filepath);
        downloaded = true;
        break;
      } catch (e) {}
    }

    if (downloaded) {
      console.log(`   ✅ Saved ${filename} (Credit: ${photographer})`);
      credits[filename] = photographer;
    } else {
      console.error(`   ❌ Failed to download image for ${id}`);
    }

    // Polite delay
    await new Promise((r) => setTimeout(r, 500));
  }

  // Save credits manifest
  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'credits.json'),
    JSON.stringify(credits, null, 2)
  );
  console.log('📝 Saved credits.json');

  await browser.close();
  console.log('✨ All done! Photos renamed and credited.');
})();
