import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const { SITE_URL } = loadEnv(process.env.NODE_ENV ?? '', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  site: SITE_URL,
  integrations: [mdx(), sitemap()],
});
