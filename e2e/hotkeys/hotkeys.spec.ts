import { expect, test } from '@playwright/test';

test.describe('test hotkeys', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('using hotkey "Alt+T" switches theme', async ({ page }) => {
    const htmlElement = page.locator('html');
    await expect(htmlElement).toHaveClass('light');
    await page.keyboard.press('Alt+T');
    await expect(htmlElement).toHaveClass('dark');
  });

  test('using hotkey "Alt+S" opens sidebar', async ({ page }) => {
    await page.keyboard.press('Alt+S');
    await expect(page.getByLabel('Navigation menu')).toBeVisible();
  });

  test('using hotkey "Alt+K" opens hotkeys dialog', async ({ page }) => {
    await page.keyboard.press('Alt+K');
    await expect(page.getByLabel('Hotkeys menu')).toBeVisible();
  });
});
