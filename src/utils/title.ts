import { SITE_TITLE } from '../consts';

/**
 * Generates a page title with consistent formatting across the site.
 *
 * @param segments - Optional array of title segments to append after the site title
 * @returns Formatted page title
 *
 * @example
 * getPageTitle() // "Marcos Gil"
 * getPageTitle(['Blog']) // "Marcos Gil - Blog"
 * getPageTitle(['Blog', 'Post Title']) // "Marcos Gil - Blog - Post Title"
 */
export function getPageTitle(segments?: string[]): string {
  if (!segments || segments.length === 0) {
    return SITE_TITLE;
  }
  return [SITE_TITLE, ...segments].join(' - ');
}
