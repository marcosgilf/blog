import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from 'vitest';
import HeaderLink from './HeaderLink.astro';

describe('HeaderLink', () => {
  it('renders correctly with active state', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(HeaderLink, {
      props: {
        href: '/',
        class: 'test-class',
        'Astro.url': { pathname: '/' },
      },
      slots: {
        default: 'Home',
      },
    });
    expect(result).toContain('aria-current="page"');
  });

  it('renders correctly without active state', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(HeaderLink, {
      props: {
        href: '/about',
        class: '',
        'Astro.url': { pathname: '/' },
      },
      slots: {
        default: 'About',
      },
    });
    expect(result).not.toContain('aria-current');
  });
});
