export const escapeTagValue = (value: string) => value.replace(/[\\,= ]/g, '\\$&');

const headerLookupOrder = [
  'x-vercel-ip-country',
  'cf-ipcountry',
  'x-nf-country',
  'x-country',
  'x-geo-country',
  'x-geo-country-code',
];

export const normalizeReferrer = (value: string) => {
  const trimmed = value.trim();
  if (!trimmed) return '';

  try {
    const url = new URL(trimmed);
    if (url.origin === 'null') return trimmed;
    return `${url.origin}${url.pathname}`;
  } catch {
    return trimmed;
  }
};

export const getCountryFromHeaders = (headers: Headers) => {
  for (const header of headerLookupOrder) {
    const value = headers.get(header);
    if (value) {
      const trimmed = value.trim();
      if (!trimmed) continue;
      if (trimmed.toUpperCase() === 'XX') continue;
      return trimmed.length === 2 ? trimmed.toUpperCase() : trimmed;
    }
  }
  return '';
};

export type ParsedUserAgent = {
  device: 'mobile' | 'desktop' | 'tablet';
  browser: 'chrome' | 'safari' | 'firefox' | 'edge' | 'opera' | 'other';
  os: 'windows' | 'macos' | 'ios' | 'android' | 'linux' | 'other';
};

export const parseUserAgent = (userAgent: string): ParsedUserAgent | null => {
  const ua = userAgent.trim();
  if (!ua) return null;

  const lower = ua.toLowerCase();
  const isTablet =
    lower.includes('ipad') ||
    lower.includes('tablet') ||
    (lower.includes('android') && !lower.includes('mobile'));
  const isMobile =
    lower.includes('mobi') ||
    lower.includes('iphone') ||
    lower.includes('ipod') ||
    (lower.includes('android') && lower.includes('mobile'));

  const device = isTablet ? 'tablet' : isMobile ? 'mobile' : 'desktop';

  let browser: ParsedUserAgent['browser'] = 'other';
  if (lower.includes('edg/')) {
    browser = 'edge';
  } else if (lower.includes('opr/') || lower.includes('opera')) {
    browser = 'opera';
  } else if (lower.includes('chrome/')) {
    browser = 'chrome';
  } else if (lower.includes('safari/')) {
    browser = 'safari';
  } else if (lower.includes('firefox/')) {
    browser = 'firefox';
  }

  let os: ParsedUserAgent['os'] = 'other';
  if (lower.includes('windows nt')) {
    os = 'windows';
  } else if (lower.includes('iphone') || lower.includes('ipad') || lower.includes('ipod')) {
    os = 'ios';
  } else if (lower.includes('android')) {
    os = 'android';
  } else if (lower.includes('mac os x')) {
    os = 'macos';
  } else if (lower.includes('linux')) {
    os = 'linux';
  }

  return { device, browser, os };
};
