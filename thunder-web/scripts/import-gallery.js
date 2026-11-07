import puppeteer from 'puppeteer';
import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';
import { fileURLToPath } from 'node:url';

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

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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

const extractPhotographerFromTitle = (title) => {
  if (title.includes(' by ')) {
    return title.split(' by ')[1].split(' - ')[0].trim();
  }
  return '';
};

const scrapePhotographerFromDom = async (page) => {
  return page.evaluate(() => {
    const xpath =
      "//dt[contains(text(), 'Photographer')]/following-sibling::dd";
    const matchingElement = document.evaluate(
      xpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;

    if (matchingElement?.textContent) {
      return matchingElement.textContent.trim();
    }

    const detailElements = Array.from(
      document.querySelectorAll('small, span, div.detail')
    );
    for (const el of detailElements) {
      const text = el.textContent || '';
      if (text.includes('Photographer:')) {
        return text.replace('Photographer:', '').trim();
      }
    }
    return null;
  });
};

const fetchPhotographer = async (page, pageUrl) => {
  try {
    // noinspection SpellCheckingInspection
    // cspell:ignore networkidle2
    await page.goto(pageUrl, { waitUntil: 'networkidle2', timeout: 30000 });

    const title = await page.title();
    const fromTitle = extractPhotographerFromTitle(title);
    if (fromTitle) {
      return fromTitle;
    }

    const fromDom = await scrapePhotographerFromDom(page);
    return fromDom || 'Unknown';
  } catch (error) {
    console.error(`Failed to visit page: ${error.message}`);
    return 'Unknown';
  }
};

const downloadFirstAvailableImage = async (id, filepath) => {
  const patterns = [
    `https://orca2.furtrack.com/cdn/${id}.jpg`,
    `https://orca2.furtrack.com/pubs/${id}.jpg`,
    `https://orca2.furtrack.com/thumb/${id}.jpg`,
  ];

  const tryCandidate = async (index) => {
    if (index >= patterns.length) {
      return false;
    }
    try {
      await downloadImage(patterns[index], filepath);
      return true;
    } catch {
      return tryCandidate(index + 1);
    }
  };

  return tryCandidate(0);
};

const processTarget = async (page, pageUrl, count, total, credits) => {
  const filename = `fTrackImage-${count}.jpg`;
  const filepath = path.join(OUTPUT_DIR, filename);
  const id = pageUrl.split('/').pop();

  console.log(`[${count}/${total}] Processing ${pageUrl}...`);

  const photographer = await fetchPhotographer(page, pageUrl);
  const downloaded = await downloadFirstAvailableImage(id, filepath);

  if (downloaded) {
    console.log(`   Saved ${filename} (Credit: ${photographer})`);
    credits[filename] = {
      credit: photographer,
      url: pageUrl,
    };
  } else {
    console.error(`   Failed to download image for ${id}`);
  }
};

const processAllTargets = async (page, urls, credits) => {
  const processNext = async (index) => {
    if (index >= urls.length) {
      return;
    }
    await processTarget(page, urls[index], index + 1, urls.length, credits);
    await sleep(1000);
    return processNext(index + 1);
  };

  return processNext(0);
};

console.log('Launching browser to scrape metadata and photos...');
const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

try {
  const page = await browser.newPage();
  await page.setUserAgent({
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  });

  const credits = {};

  await processAllTargets(page, TARGET_URLS, credits);

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'metadata.json'),
    JSON.stringify(credits, null, 2)
  );
  console.log('Saved metadata.json');
} finally {
  await browser.close();
  console.log('All done.');
}
