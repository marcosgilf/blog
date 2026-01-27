import { describe, expect, it } from 'vitest';
import { sortPosts } from './sort';

describe('sortPosts', () => {
  it('sorts posts by pubDate descending', () => {
    const posts = [
      { data: { pubDate: new Date('2020-01-01') } },
      { data: { pubDate: new Date('2021-01-01') } },
      { data: { pubDate: new Date('2019-01-01') } },
    ];
    const sorted = sortPosts(posts);
    expect(sorted[0].data.pubDate.getFullYear()).toBe(2021);
    expect(sorted[1].data.pubDate.getFullYear()).toBe(2020);
    expect(sorted[2].data.pubDate.getFullYear()).toBe(2019);
  });
});
