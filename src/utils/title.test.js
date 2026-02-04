import { describe, expect, it } from 'vitest';
import { getPageTitle } from './title';

describe('getPageTitle', () => {
  it('returns "Marcos Gil" for home page (no segments)', () => {
    expect(getPageTitle()).toBe('Marcos Gil');
  });

  it('returns "Marcos Gil" for home page with empty array', () => {
    expect(getPageTitle([])).toBe('Marcos Gil');
  });

  it('returns "Marcos Gil - Blog" for blog index page', () => {
    expect(getPageTitle(['Blog'])).toBe('Marcos Gil - Blog');
  });

  it('returns "Marcos Gil - Blog - Post Title" for blog posts', () => {
    expect(getPageTitle(['Blog', 'My First Post'])).toBe('Marcos Gil - Blog - My First Post');
  });

  it('returns "Marcos Gil - About Me" for about page', () => {
    expect(getPageTitle(['About Me'])).toBe('Marcos Gil - About Me');
  });

  it('handles multiple segments correctly', () => {
    expect(getPageTitle(['Section', 'Subsection', 'Page'])).toBe(
      'Marcos Gil - Section - Subsection - Page',
    );
  });
});
