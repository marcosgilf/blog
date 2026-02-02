import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from 'vitest';
import SocialIcons from './SocialIcons.astro';

describe('SocialIcons', () => {
  it('renders as a nav element with aria-label', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(SocialIcons);

    expect(result).toContain('<nav');
    expect(result).toContain('aria-label="Social media links"');
  });

  it('has screen reader text for each social link', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(SocialIcons);

    // Each link should have sr-only text describing the action
    expect(result).toContain('Follow me on X');
    expect(result).toContain('Go to my GitHub page');
    expect(result).toContain('Go to my LinkedIn page');
  });

  it('hides decorative SVGs from screen readers', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(SocialIcons);

    // All SVG icons should have aria-hidden since there's sr-only text
    const ariaHiddenCount = (result.match(/aria-hidden="true"/g) || []).length;
    expect(ariaHiddenCount).toBeGreaterThanOrEqual(3);
  });

  it('opens links in new tab with security attributes', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(SocialIcons);

    // External links should have target="_blank" and rel="noopener noreferrer"
    expect(result).toContain('target="_blank"');
    expect(result).toContain('rel="noopener noreferrer"');
  });

  it('contains links to all social platforms', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(SocialIcons);

    expect(result).toContain('href="https://x.com/marcosgilf"');
    expect(result).toContain('href="https://github.com/marcosgilf"');
    expect(result).toContain('href="https://www.linkedin.com/in/marcosgilfernandez/?locale=en_US"');
  });
});
