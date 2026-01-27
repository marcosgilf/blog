# Copilot Instructions

This is a personal blog built with **Astro** using content collections, MDX, and static site generation. Deployed to Netlify.

## Architecture

- **Content Collections** (`src/content/`) - Blog posts are Markdown/MDX in `src/content/blog/` with Zod-validated frontmatter defined in [src/content/config.ts](../src/content/config.ts)
- **Layouts** - `BlogPost.astro` wraps content; uses `BaseHead`, `Header`, `Footer` components
- **Pages** - File-based routing in `src/pages/`; dynamic blog routes use `[...slug].astro` with `getStaticPaths()`
- **Utilities** - Shared logic in `src/utils/` (e.g., `sortPosts` for date-descending order)
- **Constants** - Site metadata in [src/consts.ts](../src/consts.ts): `SITE_TITLE`, `SITE_DESCRIPTION`

## Blog Post Frontmatter Schema

```yaml
title: string       # Required
description: string # Required
pubDate: date       # Required (coerced to Date)
updatedDate: date   # Optional
heroImage: string   # Optional (path in /public)
```

## Developer Workflows

| Command | Purpose |
|---------|---------|
| `npm run dev` | Dev server at localhost:4321 |
| `npm run build` | Production build to `./dist/` |
| `npm run test` | Run Vitest tests |
| `npm run test:watch` | Tests in watch mode |
| `npm run lint` | Run ESLint + Prettier checks |
| `npm run format` | Auto-fix lint/format issues |

## Testing Conventions

- **Framework**: Vitest with Astro's `getViteConfig()`
- **Test files**: Colocated as `*.test.js` next to source (e.g., `sort.test.js`, `HeaderLink.test.js`)
- **Astro components**: Use `experimental_AstroContainer` for rendering tests:
  ```javascript
  import { experimental_AstroContainer as AstroContainer } from 'astro/container';
  const container = await AstroContainer.create();
  const result = await container.renderToString(Component, { props, slots });
  ```

## Code Style

- **Commits**: Conventional commits enforced via commitlint (`@commitlint/config-conventional`)
- **Pre-commit hooks**: Husky + lint-staged runs linting before commit
- **ESLint**: Minimal config, enforces semicolons
- **Prettier**: Formats `.js`, `.mdx`, `.md` files

## Component Patterns

- **Active link detection**: `HeaderLink.astro` compares `href` with `Astro.url.pathname` for active state styling
- **Props typing**: Use Astro's `HTMLAttributes<'element'>` for component prop types
- **Scoped styles**: Components include `<style>` blocks for encapsulated CSS

## Infrastructure

- **Hosting**: Netlify with DNS config in `infra/netlify-dns/` (Terraform)
- **Site URL**: https://www.marcosgilf.com (configured in `astro.config.mjs`)
- **Integrations**: MDX (`@astrojs/mdx`), Sitemap (`@astrojs/sitemap`), RSS (`@astrojs/rss`)
