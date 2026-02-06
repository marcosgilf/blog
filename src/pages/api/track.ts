import type { APIRoute } from 'astro';
import {
  escapeTagValue,
  getCountryFromHeaders,
  normalizeReferrer,
  parseUserAgent,
} from '../../utils/track';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  let payload: { path?: unknown; siteId?: unknown };

  try {
    payload = await request.json();
  } catch {
    return new Response('Invalid JSON payload.', { status: 400 });
  }

  const path = typeof payload.path === 'string' ? payload.path.trim() : '';
  const siteId = typeof payload.siteId === 'string' ? payload.siteId.trim() : '';

  if (!path) {
    return new Response('Missing "path".', { status: 400 });
  }

  const influxUrl = process.env.INFLUX_URL;
  const influxToken = process.env.INFLUX_TOKEN;
  const influxOrg = process.env.INFLUX_ORG;
  const influxBucket = process.env.INFLUX_BUCKET;
  const netlifyContext = process.env.CONTEXT;
  const nodeEnv = process.env.NODE_ENV;

  if (netlifyContext && netlifyContext !== 'production') {
    return new Response(null, { status: 204 });
  }

  if (nodeEnv && nodeEnv !== 'production') {
    return new Response(null, { status: 204 });
  }

  if (!influxUrl || !influxToken || !influxOrg || !influxBucket) {
    return new Response(null, { status: 204 });
  }

  const timestamp = Date.now();
  const tags = [`path=${escapeTagValue(path)}`];
  if (siteId) {
    tags.push(`site=${escapeTagValue(siteId)}`);
  }

  const country = getCountryFromHeaders(request.headers);
  if (country) {
    tags.push(`country=${escapeTagValue(country)}`);
  }

  const userAgent = request.headers.get('user-agent') ?? '';
  const parsedUa = parseUserAgent(userAgent);
  if (parsedUa) {
    tags.push(`device=${escapeTagValue(parsedUa.device)}`);
    tags.push(`browser=${escapeTagValue(parsedUa.browser)}`);
    tags.push(`os=${escapeTagValue(parsedUa.os)}`);
  }

  const referrerHeader = request.headers.get('referer') ?? request.headers.get('referrer') ?? '';
  const referrer = normalizeReferrer(referrerHeader);
  if (referrer) {
    tags.push(`referrer=${escapeTagValue(referrer)}`);
  }

  const lineProtocol = `page_view,${tags.join(',')} count=1 ${timestamp}`;

  const writeUrl = new URL('/api/v2/write', influxUrl);
  writeUrl.searchParams.set('org', influxOrg);
  writeUrl.searchParams.set('bucket', influxBucket);
  writeUrl.searchParams.set('precision', 'ms');

  const response = await fetch(writeUrl, {
    method: 'POST',
    headers: {
      Authorization: `Token ${influxToken}`,
      'Content-Type': 'text/plain; charset=utf-8',
    },
    body: lineProtocol,
  });

  if (!response.ok) {
    return new Response('Failed to write metrics.', { status: 502 });
  }

  return new Response(null, { status: 204 });
};
