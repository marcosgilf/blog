# AGENTS

Standard project notes for contributors and automated agents. 

## Project Overview
- Astro-based personal blog with content collections.
- Blog content lives in `src/content/blog/` and is validated by `src/content/config.ts`.
- Static build output goes to `dist/`.

## Key Paths
- `src/content/` content collections and schema
- `src/pages/` route files
- `src/layouts/` page layouts
- `src/components/` UI components
- `src/utils/` shared utilities
- `public/` static assets

## Frontmatter Schema (Blog Posts)
```yaml
title: string       # Required
description: string # Required
pubDate: date       # Required (coerced to Date)
updatedDate: date   # Optional
heroImage: string   # Optional (path in /public)
```

## Workflows (npm scripts)
- `npm run dev`: Astro dev server (http://localhost:4321)
- `npm run build`: Production build to `dist/`
- `npm run preview`: Preview production build locally
- `npm run test`: Run tests once (Vitest)
- `npm run test:watch`: Tests in watch mode
- `npm run test:coverage`: Tests with coverage
- `npm run lint`: Biome lint
- `npm run format`: Biome format (write)
- `npm run check`: Biome check (no write)
- `npm run check:fix`: Biome check with auto-fix
- `npm run dependencies:check`: Check dependency updates (npm-check-updates)
- `npm run dependencies:update`: Update dependencies and install

## Tooling
- Lint/format uses Biome (`biome.json`).
- Tests run with Vitest.

## Deployment (GitHub Actions -> Netlify)
- CI workflow: `.github/workflows/ci.yml` runs lint/tests, builds, uploads `dist`, and invokes the preview deploy.
- Preview workflow: `.github/workflows/deploy-preview.yml` is a reusable workflow invoked by CI for PRs to `main`, deploying `dist`.
- Prod deploy: `.github/workflows/deploy.yml` runs on `main` pushes and builds/deploys independently of CI.
- Build output: `dist/`.
- Required secrets: `NETLIFY_AUTH_TOKEN` and `NETLIFY_SITE_ID`.
