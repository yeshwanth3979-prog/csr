import { chromium } from 'playwright';
import fs from 'fs';

const BASE_URL = 'http://localhost:5174';

const VIEWPORTS = [
  // Mobile
  { name: 'Mobile 320x568 (iPhone SE 1)', width: 320, height: 568 },
  { name: 'Mobile 360x640 (Android Small)', width: 360, height: 640 },
  { name: 'Mobile 375x667 (iPhone SE 2/8)', width: 375, height: 667 },
  { name: 'Mobile 390x844 (iPhone 13/14)', width: 390, height: 844 },
  { name: 'Mobile 412x915 (Pixel 7/S20)', width: 412, height: 915 },
  { name: 'Mobile 430x932 (iPhone 15 Pro Max)', width: 430, height: 932 },
  // Tablet
  { name: 'Tablet 600x960 (Small Tablet)', width: 600, height: 960 },
  { name: 'Tablet 768x1024 (iPad)', width: 768, height: 1024 },
  { name: 'Tablet 820x1180 (iPad Air)', width: 820, height: 1180 },
  { name: 'Tablet 1024x768 (iPad Landscape)', width: 1024, height: 768 },
  // Laptop
  { name: 'Laptop 1280x720 (HD)', width: 1280, height: 720 },
  { name: 'Laptop 1366x768 (Standard)', width: 1366, height: 768 },
  { name: 'Laptop 1440x900 (MacBook Air)', width: 1440, height: 900 },
  // Desktop
  { name: 'Desktop 1600x900 (HD+)', width: 1600, height: 900 },
  { name: 'Desktop 1920x1080 (FHD)', width: 1920, height: 1080 },
  { name: 'Desktop 2560x1440 (QHD 2K)', width: 2560, height: 1440 },
];

const ROUTES = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Dairy', path: '/business/dairy' },
  { name: 'Fruits', path: '/business/fruits' },
  { name: 'Vegetables', path: '/business/vegetables' },
  { name: 'Protein Box', path: '/business/protein' },
  { name: 'Meal Box', path: '/business/meal-box' },
  { name: 'Pooja Items', path: '/business/pooja-items' },
  { name: 'Contact', path: '/contact' },
];

async function runAudit() {
  console.log('🚀 Starting Comprehensive Responsive Audit across', VIEWPORTS.length, 'devices and', ROUTES.length, 'routes...');
  const browser = await chromium.launch({ headless: true });
  const results = [];
  const errorsFound = [];

  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      userAgent: vp.width < 768 
        ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148' 
        : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36'
    });
    const page = await context.newPage();

    const pageConsoleErrors = [];
    const failedImageUrls = [];
    page.on('console', msg => {
      if (msg.type() === 'error') pageConsoleErrors.push(msg.text());
    });
    page.on('response', res => {
      if (res.status() >= 400 && res.request().resourceType() === 'image') {
        failedImageUrls.push(res.url());
      }
    });

    for (const route of ROUTES) {
      const url = `${BASE_URL}${route.path}`;
      try {
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 7000 });
        await page.waitForTimeout(150);

        // Scroll to trigger lazy images and inspect full layout
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(200);
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(100);

        // Check horizontal overflow
        const overflow = await page.evaluate(() => {
          const docEl = document.documentElement;
          const body = document.body;
          const scrollWidth = Math.max(docEl.scrollWidth, body.scrollWidth);
          const clientWidth = docEl.clientWidth;
          const isOverflowing = scrollWidth > clientWidth + 1; // 1px threshold for fractional pixels
          
          let overflowingElements = [];
          if (isOverflowing) {
            const allElements = document.querySelectorAll('*');
            for (const el of allElements) {
              const rect = el.getBoundingClientRect();
              if (rect.right > clientWidth + 2) {
                overflowingElements.push({
                  tag: el.tagName,
                  id: el.id,
                  className: typeof el.className === 'string' ? el.className.slice(0, 80) : '',
                  right: rect.right,
                  clientWidth
                });
              }
            }
          }
          return { isOverflowing, scrollWidth, clientWidth, overflowingElements: overflowingElements.slice(0, 5) };
        });

        // Check broken images: real failures where image failed to load or has 0 natural width after scroll
        const brokenImages = await page.evaluate(() => {
          const imgs = Array.from(document.querySelectorAll('img'));
          return imgs.filter(img => img.complete && img.naturalWidth === 0).map(img => img.src);
        });

        // Add any network 404/500 image URLs
        const allBrokenImages = Array.from(new Set([...brokenImages, ...failedImageUrls]));

        // Check touch targets on mobile viewports (< 768px)
        let smallTouchTargets = [];
        if (vp.width < 768) {
          smallTouchTargets = await page.evaluate(() => {
            const clickables = Array.from(document.querySelectorAll('button, a, input, select'));
            return clickables.filter(el => {
              const r = el.getBoundingClientRect();
              // Only visible elements
              if (r.width === 0 || r.height === 0 || window.getComputedStyle(el).display === 'none') return false;
              return r.width < 32 || r.height < 32;
            }).map(el => ({
              tag: el.tagName,
              text: (el.textContent || '').trim().slice(0, 30),
              width: Math.round(el.getBoundingClientRect().width),
              height: Math.round(el.getBoundingClientRect().height)
            })).slice(0, 5);
          });
        }

        const pass = !overflow.isOverflowing && allBrokenImages.length === 0 && pageConsoleErrors.length === 0;

        if (!pass) {
          errorsFound.push({
            viewport: vp.name,
            route: route.name,
            overflow: overflow.isOverflowing ? overflow : null,
            brokenImages: allBrokenImages,
            consoleErrors: pageConsoleErrors
          });
        }

        results.push({
          viewport: vp.name,
          route: route.name,
          pass,
          overflow: overflow.isOverflowing,
          brokenImagesCount: allBrokenImages.length,
          smallTouchTargetsCount: smallTouchTargets.length
        });

      } catch (err) {
        errorsFound.push({
          viewport: vp.name,
          route: route.name,
          error: err.message
        });
      }
    }
    await context.close();
    console.log(`✓ Tested ${vp.name} (${ROUTES.length} routes)`);
  }

  await browser.close();

  console.log('\n--- AUDIT SUMMARY ---');
  console.log(`Total tests: ${results.length}`);
  console.log(`Passed: ${results.filter(r => r.pass).length}`);
  console.log(`Issues detected: ${errorsFound.length}`);

  fs.writeFileSync('tests/audit_report.json', JSON.stringify({ results, errorsFound }, null, 2));
  console.log('Saved report to tests/audit_report.json');
}

runAudit().catch(err => {
  console.error('Audit script failed:', err);
  process.exit(1);
});
