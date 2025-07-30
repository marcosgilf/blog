import { test, expect } from '@playwright/test';
import { waitForPageLoad, setViewportAndWait, VIEWPORTS, TEST_ROUTES } from '../utils/test-helpers';

test.describe('About Page Visual Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(TEST_ROUTES.ABOUT);
    await waitForPageLoad(page);
  });

  test('about page - desktop layout', async ({ page }) => {
    await setViewportAndWait(page, VIEWPORTS.DESKTOP);
    await expect(page).toHaveScreenshot('about-page-desktop.png');
  });

  test('about page - mobile layout', async ({ page }) => {
    await setViewportAndWait(page, VIEWPORTS.MOBILE);
    await expect(page).toHaveScreenshot('about-page-mobile.png');
  });

  test('about page content section', async ({ page }) => {
    await setViewportAndWait(page, VIEWPORTS.DESKTOP);
    const mainContent = page.locator('main');
    await expect(mainContent).toHaveScreenshot('about-page-content.png');
  });
});
