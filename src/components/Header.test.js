import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from 'vitest';
import Header from './Header.astro';

describe('Header', () => {
  it('renders as a header element with nav', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Header);

    expect(result).toContain('<header');
    expect(result).toContain('<nav');
  });

  it('includes site title as heading', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Header);

    expect(result).toContain('<h2');
    expect(result).toContain('Marcos Gil');
  });

  it('has link to home page from site title', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Header);

    expect(result).toContain('href="/"');
  });

  it('includes navigation links to main sections', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Header);

    expect(result).toContain('href="/"');
    expect(result).toContain('Home');
    expect(result).toContain('href="/blog"');
    expect(result).toContain('Blog');
    expect(result).toContain('href="/about"');
    expect(result).toContain('About');
  });

  it('includes accessible theme toggle button', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Header);

    // ThemeToggle should be present with accessibility attributes
    expect(result).toContain('id="theme-toggle"');
    expect(result).toContain('aria-label=');
    expect(result).toContain('aria-pressed=');
  });
});
