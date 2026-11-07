import { chromium } from 'playwright';

const BASE_URL = 'http://localhost:5174';
const ROUTES = ['/', '/about', '/business/dairy', '/business/fruits', '/business/vegetables', '/business/protein', '/business/meal-box', '/business/pooja-items', '/contact'];

async function test320() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 320, height: 568 },
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148'
  });
  const page = await context.newPage();

  console.log('Testing 320x568 across all routes...');
  let hasErrors = false;

  for (const path of ROUTES) {
    await page.goto(`${BASE_URL}${path}`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(200);

    const overflow = await page.evaluate(() => {
      const docEl = document.documentElement;
      const body = document.body;
      const scrollWidth = Math.max(docEl.scrollWidth, body.scrollWidth);
      const clientWidth = docEl.clientWidth;
      const isOverflowing = scrollWidth > clientWidth + 1;
      let rightmost = [];
      if (isOverflowing) {
        document.querySelectorAll('*').forEach(el => {
          const r = el.getBoundingClientRect();
          if (r.right > clientWidth + 2) {
            rightmost.push({ tag: el.tagName, cls: (el.className || '').toString().slice(0, 50), right: r.right });
          }
        });
      }
      return { isOverflowing, scrollWidth, clientWidth, rightmost: rightmost.slice(0, 3) };
    });

    if (overflow.isOverflowing) {
      console.log(`❌ ${path}: OVERFLOW scrollWidth=${overflow.scrollWidth} vs clientWidth=${overflow.clientWidth}`);
      console.log(overflow.rightmost);
      hasErrors = true;
    } else {
      console.log(`✅ ${path}: PASS (scrollWidth: ${overflow.scrollWidth}, clientWidth: ${overflow.clientWidth})`);
    }
  }

  await browser.close();
  if (hasErrors) {
    process.exit(1);
  } else {
    console.log('🎉 ALL 320x568 ROUTES PASSED PERFECTLY!');
  }
}

test320().catch(err => {
  console.error(err);
  process.exit(1);
});

