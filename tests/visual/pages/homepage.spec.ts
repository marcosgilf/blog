import { test, expect } from '@playwright/test';
import { waitForPageLoad, setViewportAndWait, VIEWPORTS, TEST_ROUTES } from '../utils/test-helpers';

test.describe('Homepage Visual Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(TEST_ROUTES.HOME);
    await waitForPageLoad(page);
  });

  test('homepage layout - desktop', async ({ page }) => {
    await setViewportAndWait(page, VIEWPORTS.DESKTOP);
    await expect(page).toHaveScreenshot('homepage-desktop.png');
  });

  test('homepage layout - tablet', async ({ page }) => {
    await setViewportAndWait(page, VIEWPORTS.TABLET);
    await expect(page).toHaveScreenshot('homepage-tablet.png');
  });

  test('homepage layout - mobile', async ({ page }) => {
    await setViewportAndWait(page, VIEWPORTS.MOBILE);
    await expect(page).toHaveScreenshot('homepage-mobile.png');
  });

  test('homepage profile section', async ({ page }) => {
    await setViewportAndWait(page, VIEWPORTS.DESKTOP);
    const profileSection = page.locator('main');
    await expect(profileSection).toHaveScreenshot('homepage-profile-section.png');
  });

  test('homepage navigation', async ({ page }) => {
    await setViewportAndWait(page, VIEWPORTS.DESKTOP);
    const navigation = page.locator('nav');
    await expect(navigation).toHaveScreenshot('homepage-navigation.png');
  });
});
