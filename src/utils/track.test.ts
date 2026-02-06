import { describe, expect, it } from 'vitest';
import { escapeTagValue, getCountryFromHeaders, normalizeReferrer, parseUserAgent } from './track';

describe('track utils', () => {
  it('escapes tag values for Influx line protocol', () => {
    expect(escapeTagValue('a,b=c d')).toBe('a\\,b\\=c\\ d');
  });

  it('normalizes referrer by removing query and hash', () => {
    expect(normalizeReferrer('https://example.com/path?q=1#hash')).toBe('https://example.com/path');
  });

  it('returns raw referrer for non-URL values', () => {
    expect(normalizeReferrer('invalid://url')).toBe('invalid://url');
  });

  it('reads country from headers with precedence', () => {
    const headers = new Headers([
      ['x-geo-country', 'DE'],
      ['x-vercel-ip-country', 'US'],
    ]);

    expect(getCountryFromHeaders(headers)).toBe('US');
  });

  it('parses user agent for device/browser/os', () => {
    const parsed = parseUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    );

    expect(parsed).toEqual({
      device: 'desktop',
      browser: 'chrome',
      os: 'windows',
    });
  });
});
