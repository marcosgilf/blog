import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { POST } from './track';

describe('POST /api/track', () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('returns 400 for invalid JSON', async () => {
    const request = new Request('https://example.com/api/track', {
      method: 'POST',
      body: '{not-json}',
    });

    const response = await POST({ request } as never);

    expect(response.status).toBe(400);
  });

  it('returns 400 when path is missing', async () => {
    const request = new Request('https://example.com/api/track', {
      method: 'POST',
      body: JSON.stringify({ siteId: 'site-1' }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST({ request } as never);

    expect(response.status).toBe(400);
  });

  it('short-circuits when not in production', async () => {
    process.env.NODE_ENV = 'development';
    process.env.INFLUX_URL = 'https://influx.example.com';
    process.env.INFLUX_TOKEN = 'token';
    process.env.INFLUX_ORG = 'org';
    process.env.INFLUX_BUCKET = 'bucket';

    const fetchSpy = vi.fn();
    vi.stubGlobal('fetch', fetchSpy);

    const request = new Request('https://example.com/api/track', {
      method: 'POST',
      body: JSON.stringify({ path: '/home' }),
      headers: { 'content-type': 'application/json' },
    });

    const response = await POST({ request } as never);

    expect(response.status).toBe(204);
    expect(fetchSpy).not.toHaveBeenCalled();
  });

  it('writes tags for country, device, browser, os, and referrer', async () => {
    process.env.NODE_ENV = 'production';
    process.env.CONTEXT = 'production';
    process.env.INFLUX_URL = 'https://influx.example.com';
    process.env.INFLUX_TOKEN = 'token';
    process.env.INFLUX_ORG = 'org';
    process.env.INFLUX_BUCKET = 'bucket';

    const fetchSpy = vi.fn(async () => new Response(null, { status: 204 }));
    vi.stubGlobal('fetch', fetchSpy);

    const request = new Request('https://example.com/api/track', {
      method: 'POST',
      body: JSON.stringify({ path: '/blog', siteId: 'site-1' }),
      headers: {
        'content-type': 'application/json',
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        referer: 'https://news.ycombinator.com/item?id=1#hash',
        'x-vercel-ip-country': 'US',
      },
    });

    const response = await POST({ request } as never);

    expect(response.status).toBe(204);
    expect(fetchSpy).toHaveBeenCalledTimes(1);

    const [, init] = fetchSpy.mock.calls[0];
    const body = String(init?.body ?? '');

    expect(body).toContain('path=/blog');
    expect(body).toContain('site=site-1');
    expect(body).toContain('country=US');
    expect(body).toContain('device=desktop');
    expect(body).toContain('browser=chrome');
    expect(body).toContain('os=windows');
    expect(body).toContain('referrer=https://news.ycombinator.com/item');
    expect(body).toMatch(/count=1 \d+$/);
  });
});
