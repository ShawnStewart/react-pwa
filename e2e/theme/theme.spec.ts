import { expect, test } from '@playwright/test';

test.describe('test theme', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('default theme is light', async ({ page }) => {
    const htmlElement = page.locator('html');
    await expect(htmlElement).toHaveClass('light');
  });

  test('clicking on the theme toggle changes the theme', async ({ page }) => {
    const htmlElement = page.locator('html');
    await page.getByLabel('Theme toggle').click();
    await expect(htmlElement).toHaveClass('dark');
  });
});
