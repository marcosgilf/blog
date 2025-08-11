import { test, expect } from '@playwright/test';
import { waitForPageLoad, setViewportAndWait, VIEWPORTS, TEST_ROUTES } from '../utils/test-helpers';

test.describe('Header Component Visual Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(TEST_ROUTES.HOME);
    await waitForPageLoad(page);
  });

  test('header component - desktop', async ({ page }) => {
    await setViewportAndWait(page, VIEWPORTS.DESKTOP);
    const header = page.locator('header').first();
    if (await header.count() > 0) {
      await expect(header).toHaveScreenshot('header-desktop.png');
    } else {
      test.skip(true, 'No header component found');
    }
  });

  test('header component - mobile', async ({ page }) => {
    await setViewportAndWait(page, VIEWPORTS.MOBILE);
    const header = page.locator('header').first();
    if (await header.count() > 0) {
      await expect(header).toHaveScreenshot('header-mobile.png');
    } else {
      test.skip(true, 'No header component found');
    }
  });
});

test.describe('Footer Component Visual Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(TEST_ROUTES.HOME);
    await waitForPageLoad(page);
  });

  test('footer component - desktop', async ({ page }) => {
    await setViewportAndWait(page, VIEWPORTS.DESKTOP);
    const footer = page.locator('footer').first();
    if (await footer.count() > 0) {
      await expect(footer).toHaveScreenshot('footer-desktop.png');
    } else {
      test.skip(true, 'No footer component found');
    }
  });

  test('footer component - mobile', async ({ page }) => {
    await setViewportAndWait(page, VIEWPORTS.MOBILE);
    const footer = page.locator('footer').first();
    if (await footer.count() > 0) {
      await expect(footer).toHaveScreenshot('footer-mobile.png');
    } else {
      test.skip(true, 'No footer component found');
    }
  });
});
