import { test, expect } from '@playwright/test';

test.describe('UI/UX and Tailwind Verification', () => {
  test('Tailwind CSS engine compiles and applies utility classes to DOM elements', async ({ page }) => {
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

  test('Theme switcher toggles between dark and light themes without breaking styles', async ({ page }) => {
    await page.goto('/');

    const themeButton = page.getByRole('button', { name: /switch to/i });
    await expect(themeButton).toBeVisible();

    const initialTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    expect(initialTheme).toMatch(/dark|light/);

    // Toggle theme
    await themeButton.click();
    const updatedTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    expect(updatedTheme).not.toBe(initialTheme);

    // Toggle back
    await themeButton.click();
    const revertedTheme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
    expect(revertedTheme).toBe(initialTheme);
  });

  test('All primary pages load with zero fatal console errors', async ({ page }) => {
    const fatalErrors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        const text = msg.text();
        if (!text.includes('favicon') && !text.includes('ERR_CONNECTION_REFUSED')) {
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
    await expect(page.getByRole('link', { name: /work/i })).toBeVisible();

    // 2. Commissions & ToS Modal
    await page.goto('/commissions');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    const tosButton = page.getByRole('button', { name: /terms of service/i });
    if (await tosButton.isVisible()) {
      await tosButton.click();
      await expect(page.getByText(/terms of service/i).first()).toBeVisible();
      const closeButton = page.getByRole('button', { name: /close|accept/i }).first();
      if (await closeButton.isVisible()) {
        await closeButton.click();
      }
    }

    // 3. About
    await page.goto('/about');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    expect(fatalErrors).toEqual([]);
  });

  test('Captures full-page screenshots for visual inspection', async ({ page }) => {
    // 1. Home Dark
    await page.goto('/');
    await page.waitForTimeout(600);
    await page.screenshot({ path: 'test-results/screenshots/home-dark.png', fullPage: true });

    // 2. Home Light
    const themeButton = page.getByRole('button', { name: /switch to/i });
    await themeButton.click();
    await page.waitForTimeout(600);
    await page.screenshot({ path: 'test-results/screenshots/home-light.png', fullPage: true });

    // 3. Commissions
    await page.goto('/commissions');
    await page.waitForTimeout(600);
    await page.screenshot({ path: 'test-results/screenshots/commissions.png', fullPage: true });

    // 4. About
    await page.goto('/about');
    await page.waitForTimeout(600);
    await page.screenshot({ path: 'test-results/screenshots/about.png', fullPage: true });
  });
});
