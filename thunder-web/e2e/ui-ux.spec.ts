import { expect, test } from '@playwright/test';

test.describe('UI/UX and Tailwind Verification', () => {
  test('Tailwind CSS engine compiles and applies utility classes to DOM elements', async ({
    page,
  }) => {
    await page.goto('/');

    const appContainer = page.locator('.app-container');
    await expect(appContainer).toBeVisible();

    // Verify Tailwind utility classes (.flex, .flex-col, .min-h-screen) apply actual computed styles
    await expect(appContainer).toHaveCSS('display', 'flex');
    await expect(appContainer).toHaveCSS('flex-direction', 'column');

    const hasMinHeight = await appContainer.evaluate((el) => {
      const computed = window.getComputedStyle(el);
      return computed.minHeight !== '' && computed.minHeight !== '0px';
    });
    expect(hasMinHeight).toBe(true);
  });

  test('All primary pages load with zero fatal console errors', async ({
    page,
  }) => {
    const fatalErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        const text = msg.text();
        if (
          !text.includes('favicon') &&
          !text.includes('ERR_CONNECTION_REFUSED')
        ) {
          fatalErrors.push(text);
        }
      }
    });
    page.on('pageerror', (err) => {
      fatalErrors.push(err.message);
    });

    // 1. Home
    await page.goto('/');
    await expect(page).toHaveTitle(/ThunderFennec/i);
    await expect(page.getByRole('link', { name: /art/i })).toBeVisible();

    // 2. Commissions & ToS Modal
    await page.goto('/commissions');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    const tosButton = page.getByRole('button', { name: /terms of service/i });
    if (await tosButton.isVisible()) {
      await tosButton.click();
      await expect(page.getByText(/terms of service/i).first()).toBeVisible();
      const closeButton = page
        .getByRole('button', { name: /understand|close|accept/i })
        .last();
      if (await closeButton.isVisible()) {
        await closeButton.click();
      }
    }

    // 3. About
    await page.goto('/about');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    expect(fatalErrors).toEqual([]);
  });

  test('Captures full-page screenshots for visual inspection', async ({
    page,
  }) => {
    const scrollAndSettle = async () => {
      await page.evaluate(async () => {
        const distance = 500;
        const delay = 50;
        while (
          document.scrollingElement &&
          document.scrollingElement.scrollTop + window.innerHeight <
            document.scrollingElement.scrollHeight
        ) {
          document.scrollingElement.scrollBy(0, distance);
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      });
      await page.waitForFunction(
        () =>
          !document.scrollingElement ||
          document.scrollingElement.scrollTop + window.innerHeight >=
            document.scrollingElement.scrollHeight - 50
      );
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForFunction(() => window.scrollY === 0);
    };

    // 1. Home Dark
    await page.goto('/');
    const currentTheme = await page.evaluate(() =>
      document.documentElement.getAttribute('data-theme')
    );
    expect(currentTheme).toBe('dark');
    await scrollAndSettle();
    await page.screenshot({
      path: 'test-results/screenshots/home-dark.png',
      fullPage: true,
    });

    // Dark scrolled viewport (verifies sticky header over content)
    await page.evaluate(() => window.scrollTo(0, 600));
    await page.waitForFunction(() => window.scrollY >= 600);
    await page.screenshot({
      path: 'test-results/screenshots/home-scrolled-dark.png',
      fullPage: false,
    });

    // 2. Commissions
    await page.goto('/commissions');
    await scrollAndSettle();
    await page.screenshot({
      path: 'test-results/screenshots/commissions.png',
      fullPage: true,
    });

    // 3. About
    await page.goto('/about');
    await scrollAndSettle();
    await page.screenshot({
      path: 'test-results/screenshots/about.png',
      fullPage: true,
    });
  });

  test('Sticky header remains at top of viewport when scrolling', async ({
    page,
  }) => {
    await page.goto('/');
    const header = page.locator('header');
    await expect(header).toBeVisible();

    const initialBox = await header.boundingBox();
    expect(initialBox).not.toBeNull();
    expect(initialBox?.y).toBe(0);

    // Scroll down 500px
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForFunction(() => window.scrollY >= 500);

    const scrolledBox = await header.boundingBox();
    expect(scrolledBox).not.toBeNull();
    // Sticky header stays at top of viewport (y === 0)
    expect(scrolledBox?.y).toBe(0);
  });

  test('Navbar renders correctly on mobile viewport without overlap', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto('/');

    const brandLink = page.getByRole('link', { name: /thunderfennec/i });
    const artLink = page.getByRole('link', { name: /^art$/i });
    const commissionsLink = page.getByRole('link', { name: /commissions/i });
    const aboutLink = page.getByRole('link', { name: /about/i });

    // Assert all links are visible on mobile
    await expect(brandLink).toBeVisible();
    await expect(artLink).toBeVisible();
    await expect(commissionsLink).toBeVisible();
    await expect(aboutLink).toBeVisible();

    const brandBox = await brandLink.boundingBox();
    const artBox = await artLink.boundingBox();
    const commissionsBox = await commissionsLink.boundingBox();
    const aboutBox = await aboutLink.boundingBox();

    expect(brandBox).not.toBeNull();
    expect(artBox).not.toBeNull();
    expect(commissionsBox).not.toBeNull();
    expect(aboutBox).not.toBeNull();

    // Assert brand logo and navigation options do not overlap horizontally
    expect(brandBox!.x + brandBox!.width).toBeLessThanOrEqual(artBox!.x);
    expect(artBox!.x + artBox!.width).toBeLessThanOrEqual(commissionsBox!.x);
    expect(commissionsBox!.x + commissionsBox!.width).toBeLessThanOrEqual(
      aboutBox!.x
    );

    await page.screenshot({
      path: 'test-results/screenshots/mobile-navbar-320.png',
    });
  });
});
