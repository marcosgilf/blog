export function sortPosts<T extends { data: { pubDate: Date } }>(posts: T[]): T[] {
  return [...posts].sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}
