import { test, expect } from '@playwright/test';
import { waitForPageLoad, setViewportAndWait, VIEWPORTS, TEST_ROUTES } from '../utils/test-helpers';

test.describe('Social Icons Component Visual Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(TEST_ROUTES.HOME);
    await waitForPageLoad(page);
  });

  test('social icons - default state', async ({ page }) => {
    await setViewportAndWait(page, VIEWPORTS.DESKTOP);
    const socialIcons = page.locator('[data-testid="social-icons"], .social-icons, [class*="social"]').first();
    if (await socialIcons.count() > 0) {
      await expect(socialIcons).toHaveScreenshot('social-icons-default.png');
    } else {
      test.skip(true, 'No social icons component found');
    }
  });

  test('social icons - hover state', async ({ page }) => {
    await setViewportAndWait(page, VIEWPORTS.DESKTOP);
    const socialIcon = page.locator('[data-testid="social-icons"] a, .social-icons a, [class*="social"] a').first();
    if (await socialIcon.count() > 0) {
      await socialIcon.hover();
      const socialIcons = page.locator('[data-testid="social-icons"], .social-icons, [class*="social"]').first();
      await expect(socialIcons).toHaveScreenshot('social-icons-hover.png');
    } else {
      test.skip(true, 'No social icons found to test hover state');
    }
  });
});
