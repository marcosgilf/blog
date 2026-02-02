import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from 'vitest';
import Footer from './Footer.astro';

describe('Footer', () => {
  it('renders as a footer element', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Footer);

    expect(result).toContain('<footer');
  });

  it('includes copyright information', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Footer);

    expect(result).toContain('©');
    expect(result).toContain('Marcos Gil');
  });

  it('includes current year in copyright', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Footer);
    const currentYear = new Date().getFullYear().toString();

    expect(result).toContain(currentYear);
  });

  it('includes SocialIcons component with accessible navigation', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(Footer);

    // SocialIcons renders a nav with aria-label
    expect(result).toContain('aria-label="Social media links"');
  });
});
