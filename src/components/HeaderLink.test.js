import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect } from 'vitest';
import HeaderLink from './HeaderLink.astro';

describe('HeaderLink', () => {
  it('renders correctly with active state', async () => {
    const container = await AstroContainer.create();
    const result = await container.renderToString(HeaderLink, {
      props: {
        href: '/',
        class: 'test-class',
        'Astro.url': { pathname: '/pathname' },
      },
      slots: {
        default: 'Home',
      },
    });
    expect(result).toContain('active');
  });

  it.todo('renders correctly without active state', async () => {
    const { getByText } = await render(HeaderLink, {
      props: {
        href: '/about',
        class: '',
        'Astro.url': { pathname: '/' },
      },
    });
    const linkElement = getByText('About');
    expect(linkElement).not.toHaveClass('active');
  });
});
