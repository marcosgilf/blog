import { test, expect } from '@playwright/test';
import { waitForPageLoad, setViewportAndWait, VIEWPORTS, TEST_ROUTES } from '../utils/test-helpers';

test.describe('Blog Pages Visual Tests', () => {
  test.describe('Blog Index Page', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(TEST_ROUTES.BLOG);
      await waitForPageLoad(page);
    });

    test('blog index - desktop layout', async ({ page }) => {
      await setViewportAndWait(page, VIEWPORTS.DESKTOP);
      await expect(page).toHaveScreenshot('blog-index-desktop.png');
    });

    test('blog index - mobile layout', async ({ page }) => {
      await setViewportAndWait(page, VIEWPORTS.MOBILE);
      await expect(page).toHaveScreenshot('blog-index-mobile.png');
    });

    test('blog post list', async ({ page }) => {
      await setViewportAndWait(page, VIEWPORTS.DESKTOP);
      const postList = page.locator('main ul').first();
      await expect(postList).toHaveScreenshot('blog-post-list.png');
    });
  });

  test.describe('Individual Blog Post', () => {
    test('blog post layout - desktop', async ({ page }) => {
      // Navigate to the first available blog post
      await page.goto(TEST_ROUTES.BLOG);
      await waitForPageLoad(page);

      const firstPostLink = page.locator('a[href*="/blog/"]').first();
      if (await firstPostLink.count() > 0) {
        await firstPostLink.click();
        await waitForPageLoad(page);
        await setViewportAndWait(page, VIEWPORTS.DESKTOP);
        await expect(page).toHaveScreenshot('blog-post-desktop.png');
      } else {
        test.skip(true, 'No blog posts found to test');
      }
    });

    test('blog post layout - mobile', async ({ page }) => {
      // Navigate to the first available blog post
      await page.goto(TEST_ROUTES.BLOG);
      await waitForPageLoad(page);

      const firstPostLink = page.locator('a[href*="/blog/"]').first();
      if (await firstPostLink.count() > 0) {
        await firstPostLink.click();
        await waitForPageLoad(page);
        await setViewportAndWait(page, VIEWPORTS.MOBILE);
        await expect(page).toHaveScreenshot('blog-post-mobile.png');
      } else {
        test.skip(true, 'No blog posts found to test');
      }
    });
  });
});
