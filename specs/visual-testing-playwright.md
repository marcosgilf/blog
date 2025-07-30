# Playwright Visual Testing Specification

## Overview

This specification outlines the implementation of Playwright visual testing functionality for modern web applications. Visual testing ensures that UI components and pages render correctly across different browsers and viewports, detecting visual regressions automatically.

## Goals

- **Visual Regression Detection**: Automatically detect unintended visual changes
- **Cross-Browser Testing**: Ensure consistent appearance across Chromium, Firefox, and Safari
- **Responsive Testing**: Validate layouts across different screen sizes
- **Component Testing**: Test individual components in isolation
- **Page Testing**: Test complete page layouts and interactions
- **CI/CD Integration**: Automated visual testing in deployment pipeline

## Implementation Plan

### 1. Dependencies and Setup

#### Required Dependencies
```json
{
  "devDependencies": {
    "@playwright/test": "^1.40.0",
    "playwright": "^1.40.0"
  }
}
```

#### Package.json Scripts
```json
{
  "scripts": {
    "test:visual": "playwright test",
    "test:visual:ui": "playwright test --ui",
    "test:visual:headed": "playwright test --headed",
    "test:visual:update": "playwright test --update-snapshots",
    "test:visual:report": "playwright show-report",
    "test:visual:debug": "playwright test --debug"
  }
}
```

### 2. Configuration Structure

#### Playwright Configuration (`playwright.config.ts`)
```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/visual',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['html'],
    ['json', { outputFile: 'test-results/results.json' }]
  ],
  use: {
    baseURL: 'http://localhost:3000', // Adjust port based on framework
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] }
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] }
    }
  ],
  webServer: {
    command: 'npm run start', // Framework-agnostic start command
    port: 3000, // Adjust based on framework's default port
    reuseExistingServer: !process.env.CI
  }
});
```

### 3. Test Structure and Organization

#### Directory Structure
```
tests/
├── visual/
│   ├── components/
│   │   ├── header.spec.ts
│   │   ├── footer.spec.ts
│   │   ├── navigation.spec.ts
│   │   └── ui-elements.spec.ts
│   ├── pages/
│   │   ├── homepage.spec.ts
│   │   ├── content-pages.spec.ts
│   │   ├── listing-pages.spec.ts
│   │   └── detail-pages.spec.ts
│   ├── layouts/
│   │   └── page-layouts.spec.ts
│   └── utils/
│       └── test-helpers.ts
└── visual-snapshots/
    ├── chromium/
    ├── firefox/
    ├── webkit/
    └── mobile/
```

### 4. Test Categories

#### 4.1 Page-Level Visual Tests

**Homepage Tests**
- Hero/banner section with key visuals
- Navigation elements
- Content layout and typography
- Responsive behavior across viewports

**Content Listing Tests**
- List/grid layouts
- Item preview cards
- Pagination components
- Filter and search interfaces
- Empty state displays

**Content Detail Tests**
- Content header sections
- Main content rendering
- Media handling (images, videos)
- Interactive elements
- Related content sections

**Static Page Tests**
- About/contact page layouts
- Information display consistency
- Form elements and styling

#### 4.2 Component-Level Visual Tests

**Header/Navigation Component**
- Logo/brand display
- Navigation menu structures
- Mobile responsive menus
- Active/hover states
- Search components

**Footer Component**
- Content organization
- Link groupings
- Social media elements
- Copyright and legal information

**UI Components**
- Button variations and states
- Form input elements
- Cards and containers
- Modal dialogs
- Loading states

**Content Components**
- Text formatting and typography
- Code block styling (if applicable)
- Table formatting
- Media galleries
- Quote/callout boxes

#### 4.3 Layout Visual Tests

**Page Layouts**
- Header, main content, footer arrangement
- Sidebar layouts
- Grid systems
- Content width and spacing
- Responsive breakpoint behavior

### 5. Responsive Testing Strategy

#### Viewport Categories
- **Desktop**: 1920x1080, 1366x768, 1024x768
- **Tablet**: 768x1024, 834x1194
- **Mobile**: 375x667, 414x896, 360x640

#### Responsive Test Coverage
- Navigation collapse/expand behaviors
- Content reflow and stacking
- Image and media scaling
- Typography size adjustments
- Touch target sizing for mobile

### 6. Visual Testing Best Practices

#### Snapshot Management
- **Baseline Creation**: Generate initial snapshots on stable builds
- **Update Strategy**: Systematic approach to updating snapshots
- **Version Control**: Track snapshot changes in git
- **Platform Consistency**: Ensure consistent rendering across environments

#### Test Stability
- **Wait Strategies**: Proper waiting for dynamic content loading
- **Animation Handling**: Disable or wait for animations to complete
- **Font Loading**: Ensure web fonts are loaded before capturing
- **Network Stability**: Handle network-dependent content appropriately

#### Performance Considerations
- **Parallel Execution**: Run tests in parallel for faster feedback
- **Selective Testing**: Test only affected components when possible
- **Caching**: Cache dependencies and build artifacts
- **Resource Management**: Optimize test resource usage

### 7. Integration with Development Workflow

#### Pre-commit Hooks
```javascript
// .husky/pre-commit or similar
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint
npm run test
npm run test:visual
```

#### CI/CD Pipeline Integration
```yaml
# Example GitHub Actions workflow
name: Visual Testing
on: [push, pull_request]

jobs:
  visual-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npm run build
      - run: npm run test:visual
      - uses: actions/upload-artifact@v3
        if: failure()
        with:
          name: playwright-report
          path: playwright-report/
```

### 8. Framework-Specific Configurations

#### Common Development Servers and Ports
- **Next.js**: Port 3000, command: `npm run dev` or `npm run start`
- **React (CRA)**: Port 3000, command: `npm start`
- **Vue.js**: Port 8080, command: `npm run serve`
- **Angular**: Port 4200, command: `npm run start`
- **Svelte**: Port 5000, command: `npm run dev`
- **Astro**: Port 4321, command: `npm run dev` or `npm run preview`
- **Nuxt.js**: Port 3000, command: `npm run dev`
- **Vite**: Port 5173, command: `npm run dev`

#### Build Commands by Framework
- **Next.js**: `npm run build`
- **React**: `npm run build`
- **Vue.js**: `npm run build`
- **Angular**: `npm run build`
- **Svelte**: `npm run build`
- **Astro**: `npm run build`
- **Nuxt.js**: `npm run build`
- **Vite**: `npm run build`

### 9. Test Examples

#### Homepage Visual Test
```typescript
import { test, expect } from '@playwright/test';

test.describe('Homepage Visual Tests', () => {
  test('homepage layout - desktop', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot('homepage-desktop.png');
  });

  test('homepage layout - mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveScreenshot('homepage-mobile.png');
  });
});
```

#### Component Visual Test
```typescript
import { test, expect } from '@playwright/test';

test.describe('Header Component Visual Tests', () => {
  test('header component - default state', async ({ page }) => {
    await page.goto('/');
    const header = page.locator('header');
    await expect(header).toHaveScreenshot('header-default.png');
  });

  test('header component - mobile responsive', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    const header = page.locator('header');
    await expect(header).toHaveScreenshot('header-mobile.png');
  });
});
```

#### Interactive Component Test
```typescript
import { test, expect } from '@playwright/test';

test.describe('Navigation Component Visual Tests', () => {
  test('navigation menu - hover states', async ({ page }) => {
    await page.goto('/');
    const navItem = page.locator('nav a').first();
    await navItem.hover();
    await expect(page.locator('nav')).toHaveScreenshot('nav-hover.png');
  });

  test('mobile menu - expanded state', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.locator('[data-testid="mobile-menu-toggle"]').click();
    await expect(page.locator('nav')).toHaveScreenshot('nav-mobile-expanded.png');
  });
});
```

### 10. Reporting and Monitoring

#### Test Reports
- **HTML Reports**: Interactive reports with before/after comparisons
- **JSON Reports**: Machine-readable data for integrations
- **Screenshot Artifacts**: Failed test screenshots for debugging

#### Monitoring and Alerts
- **CI/CD Notifications**: Slack/email alerts for visual regression failures
- **Dashboard Integration**: Visual testing metrics in project dashboards
- **Trend Analysis**: Track visual stability over time

### 11. Maintenance and Updates

#### Regular Maintenance Tasks
- **Snapshot Updates**: Review and approve legitimate visual changes
- **Test Cleanup**: Remove obsolete tests for deprecated features
- **Performance Optimization**: Monitor and optimize test execution time
- **Dependency Updates**: Keep Playwright and related tools updated

#### Documentation Updates
- **Test Coverage Maps**: Document which pages/components are tested
- **Troubleshooting Guides**: Common issues and solutions
- **Onboarding Materials**: Help new team members understand visual testing

### 12. Framework Migration Considerations

#### When Changing Frameworks
1. **Update Configuration**: Adjust port numbers and build/start commands
2. **Review Test Selectors**: Update component selectors if HTML structure changes
3. **Validate Snapshots**: Re-baseline all visual snapshots
4. **Update Dependencies**: Ensure Playwright compatibility with new framework
5. **Test Coverage**: Verify all critical paths are still covered

#### Portable Test Patterns
- Use semantic HTML and data attributes for reliable selectors
- Focus on user-visible elements rather than implementation details
- Structure tests around user journeys and business functionality
- Maintain consistent naming conventions across frameworks

## Benefits

1. **Early Detection**: Catch visual regressions before they reach production
2. **Cross-Browser Consistency**: Ensure consistent experience across browsers
3. **Responsive Validation**: Verify layouts work across all device sizes
4. **Framework Agnostic**: Can be implemented with any modern web framework
5. **Developer Confidence**: Reduce fear of breaking visual elements
6. **Quality Assurance**: Automated QA for visual elements
7. **Documentation**: Visual tests serve as living documentation

## Success Metrics

- **Coverage**: Percentage of pages/components with visual tests
- **Stability**: Test flakiness rate and consistency
- **Detection Rate**: Number of visual regressions caught
- **Resolution Time**: Time from detection to fix
- **CI Performance**: Test execution time and success rate
- **Framework Portability**: Ease of migration between frameworks

This specification provides a comprehensive, framework-agnostic approach to implementing robust visual testing with Playwright, ensuring consistent and high-quality user experience across all platforms and browsers regardless of the underlying web framework.
