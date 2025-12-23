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

const OUTPUT_DIR = path.join(__dirname, '../public/gallery-ft');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

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
  console.log('Launching browser to scrape metadata and photos...');
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

    let photographer = 'Unknown';

    try {
      await page.goto(pageUrl, { waitUntil: 'networkidle2', timeout: 30000 });

      // Strategy 1: Title parsing
      const title = await page.title();

      if (title.includes(' by ')) {
        photographer = title.split(' by ')[1].split(' - ')[0].trim();
      }

      // Strategy 2: DOM Scraping
      if (photographer === 'Unknown' || photographer === '') {
        const domCredit = await page.evaluate(() => {
          const xpath =
            "//dt[contains(text(), 'Photographer')]/following-sibling::dd";
          const matchingElement = document.evaluate(
            xpath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
          ).singleNodeValue;
          if (matchingElement) return matchingElement.innerText.trim();

          const smalls = Array.from(
            document.querySelectorAll('small, span, div.detail')
          );
          for (const el of smalls) {
            if (el.innerText.includes('Photographer:')) {
              return el.innerText.replace('Photographer:', '').trim();
            }
          }
          return null;
        });
        if (domCredit) photographer = domCredit;
      }
    } catch (e) {
      console.error(`Failed to visit page: ${e.message}`);
    }

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
      console.log(`   Saved ${filename} (Credit: ${photographer})`);
      credits[filename] = {
        credit: photographer,
        url: pageUrl,
      };
    } else {
      console.error(`   Failed to download image for ${id}`);
    }

    await new Promise((r) => setTimeout(r, 1000));
  }

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'metadata.json'),
    JSON.stringify(credits, null, 2)
  );
  console.log('Saved metadata.json');

  await browser.close();
  console.log('All done.');
})();
