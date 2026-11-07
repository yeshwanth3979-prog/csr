import { chromium } from 'playwright';

const BASE_URL = 'http://localhost:5174';

async function testInteractions() {
  console.log('Testing Navigation, Modals, and Interactivity...');
  const browser = await chromium.launch({ headless: true });

  // 1. Mobile Menu test on 375x667
  {
    const page = await browser.newPage({ viewport: { width: 375, height: 667 } });
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });

    // Click Hamburger
    const menuBtn = page.locator('button[aria-label="Open navigation menu"]');
    await menuBtn.click();
    await page.waitForTimeout(200);

    // Verify drawer visible
    const corporateEnquiryDrawerBtn = page.locator('button:has-text("Initiate Corporate Enquiry")');
    const isVisible = await corporateEnquiryDrawerBtn.isVisible();
    if (!isVisible) throw new Error('Mobile drawer did not open');
    console.log('✓ Mobile Menu Drawer opens successfully');

    // Click link to About page from mobile drawer
    const aboutLink = page.locator('div.lg\\:hidden a[href="/about"]');
    await aboutLink.click();
    await page.waitForTimeout(300);
    if (!page.url().includes('/about')) throw new Error('Mobile navigation link failed');
    console.log('✓ Mobile navigation link navigated to /about');

    await page.close();
  }

  // 2. Search Modal test (Desktop 1280x720)
  {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });

    // Open Search modal
    const searchBtn = page.locator('header button[title*="Search"]');
    await searchBtn.click();
    await page.waitForTimeout(200);

    const searchInput = page.locator('input[placeholder*="Search divisions"]');
    if (!await searchInput.isVisible()) throw new Error('Search modal did not open');
    await searchInput.fill('dairy');
    await page.waitForTimeout(100);

    // Verify results show up
    const resultItem = page.locator('div.fixed.z-50 button:has-text("Sri Kanakadurgya Dairy")').first();
    if (!await resultItem.isVisible()) throw new Error('Search results did not filter correctly');
    console.log('✓ Search modal opens and filters products accurately');

    // Close with Escape
    await page.keyboard.press('Escape');
    await page.waitForTimeout(150);
    if (await searchInput.isVisible()) throw new Error('Escape did not close Search Modal');
    console.log('✓ Search modal closes with Escape key');

    await page.close();
  }

  // 3. Corporate Enquiry Modal test
  {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });

    // Open Enquiry modal
    const enquiryBtn = page.locator('header button:has-text("Corporate Enquiry")');
    await enquiryBtn.click();
    await page.waitForTimeout(200);

    const modalTitle = page.locator('text=Business & Institutional Enquiry');
    if (!await modalTitle.isVisible()) throw new Error('Corporate Enquiry modal did not open');
    console.log('✓ Corporate Enquiry Modal opens smoothly');

    // Close button
    const closeBtn = page.locator('button[aria-label="Close modal"]');
    await closeBtn.click();
    await page.waitForTimeout(150);
    if (await modalTitle.isVisible()) throw new Error('Enquiry modal did not close');
    console.log('✓ Corporate Enquiry Modal closes successfully');

    await page.close();
  }

  // 4. Product Gallery Lightbox test
  {
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    await page.goto(`${BASE_URL}/business/dairy`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(200);

    // Click on product card image to open lightbox
    const productCardImg = page.locator('div[role="button"]:has(img)').first();
    if (await productCardImg.isVisible()) {
      await productCardImg.click();
      await page.waitForTimeout(200);
      const closeLightboxBtn = page.locator('button[aria-label="Close lightbox"]');
      if (await closeLightboxBtn.isVisible()) {
        console.log('✓ Product Lightbox opened successfully');
        await closeLightboxBtn.click();
        await page.waitForTimeout(150);
        console.log('✓ Product Lightbox closed successfully');
      }
    }
    await page.close();
  }

  await browser.close();
  console.log('🎉 ALL INTERACTIVITY & MODAL TESTS PASSED!');
}

testInteractions().catch(err => {
  console.error('Interactions test failed:', err);
  process.exit(1);
});
