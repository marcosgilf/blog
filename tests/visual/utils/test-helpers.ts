import type { Page } from '@playwright/test';

/**
 * Common test utilities for visual testing
 */

/**
 * Wait for page to be fully loaded including fonts and images
 */
export async function waitForPageLoad(page: Page) {
  await page.waitForLoadState('networkidle');
  await page.waitForFunction(() => document.fonts.ready);
}

/**
 * Common viewport sizes for testing
 */
export const VIEWPORTS = {
  MOBILE: { width: 375, height: 667 },
  TABLET: { width: 768, height: 1024 },
  DESKTOP: { width: 1366, height: 768 },
  LARGE_DESKTOP: { width: 1920, height: 1080 }
} as const;

/**
 * Set viewport and wait for layout stabilization
 */
export async function setViewportAndWait(page: Page, viewport: { width: number; height: number }) {
  await page.setViewportSize(viewport);
  await page.waitForTimeout(100); // Allow layout to stabilize
  await waitForPageLoad(page);
}

/**
 * Hide dynamic content that might cause test flakiness
 */
export async function hideDynamicContent(page: Page) {
  // Hide elements that might have dynamic content
  await page.addStyleTag({
    content: `
      .dynamic-content,
      [data-testid="current-time"],
      .loading-indicator {
        visibility: hidden !important;
      }
    `
  });
}

/**
 * Common test data
 */
export const TEST_ROUTES = {
  HOME: '/',
  BLOG: '/blog',
  ABOUT: '/about'
} as const;
