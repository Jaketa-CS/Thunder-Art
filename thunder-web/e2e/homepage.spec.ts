import { test, expect } from '@playwright/test';

test.describe('Homepage E2E', () => {
  test('loads homepage with correct title and navigation links', async ({
    page,
  }) => {
    await page.goto('/');

    // Verify title
    await expect(page).toHaveTitle(/ThunderFennec/i);

    // Verify nav links: Work, About, Commissions
    await expect(page.getByRole('link', { name: /work/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /about/i })).toBeVisible();
    await expect(
      page.getByRole('link', { name: /commissions/i })
    ).toBeVisible();
  });

  test('navigates to commissions page when link is clicked', async ({
    page,
  }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /commissions/i }).click();
    await expect(page).toHaveURL(/.*commissions/);
  });
});
