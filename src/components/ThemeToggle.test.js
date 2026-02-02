import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from 'vitest';
import ThemeToggle from './ThemeToggle.astro';

describe('ThemeToggle', () => {
  it('renders as a button element', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(ThemeToggle);

    expect(result).toContain('<button');
    expect(result).toContain('type="button"');
  });

  it('has aria-label for screen readers', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(ThemeToggle);

    expect(result).toContain('aria-label=');
  });

  it('has aria-pressed attribute for toggle state', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(ThemeToggle);

    expect(result).toContain('aria-pressed=');
  });

  it('has accessible icon with aria-hidden', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(ThemeToggle);

    // SVG should be hidden from screen readers since button has aria-label
    expect(result).toContain('aria-hidden="true"');
  });

  it('has unique id for JavaScript interaction', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(ThemeToggle);

    expect(result).toContain('id="theme-toggle"');
  });
});
