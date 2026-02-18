# Astro Blog – Replication Spec

Generic specification to replicate this project setup from scratch using an AI agent.
All personal content, copy, images and domain-specific values are intentionally omitted.

---

## 1. Technology Stack

| Layer | Tool | Version hint |
|---|---|---|
| Framework | Astro | 5.x |
| Language | TypeScript (ESM, `"type": "module"`) | — |
| Content | MDX + Astro Content Collections | — |
| Adapter | `@astrojs/netlify` (SSR `output: 'server'`) | — |
| Integrations | `@astrojs/mdx`, `@astrojs/sitemap`, `@astrojs/rss` | — |
| Linter / Formatter | Biome | 2.x |
| Testing | Vitest + `@vitest/coverage-v8` | — |
| Git hooks | Husky + lint-staged + commitlint | — |
| Dep checker | npm-check-updates (`ncu`) | — |
| IaC | Terraform (Netlify provider, Grafana provider) | ≥ 1.6 |
| CI/CD | GitHub Actions → Netlify | — |
| Node | LTS (see `.nvmrc`, currently `v22`) | — |
| Package manager | npm | — |

---

## 2. Directory Structure

```
.
├── .github/workflows/       # CI, deploy, deploy-preview, dns-drift-check
├── .husky/pre-commit         # Git hook
├── .lintstagedrc.cjs          # lint-staged config
├── .nvmrc                     # Node version
├── .env.example               # Env vars template (committed)
├── .env.development           # Dev env defaults (committed)
├── .env                       # Local overrides (gitignored)
├── .env.production            # Production secrets (gitignored)
├── AGENTS.md                  # Agent/contributor notes
├── astro.config.mjs           # Astro config
├── biome.json                 # Biome linter/formatter config
├── commitlint.config.js       # Conventional commits config
├── vitest.config.js           # Vitest config (uses Astro's getViteConfig)
├── tsconfig.json              # TypeScript config (extends astro/tsconfigs/base)
├── package.json
├── infra/
│   ├── netlify/               # Terraform: DNS zone + env vars
│   └── grafana/               # Terraform: Grafana dashboards
├── public/                    # Static assets (fonts, images, favicon)
│   └── fonts/
├── specs/                     # Specification documents
├── src/
│   ├── consts.ts              # SITE_TITLE, SITE_DESCRIPTION exports
│   ├── env.d.ts               # Astro env type reference
│   ├── components/            # Astro components (+ co-located .test.js files)
│   ├── content/
│   │   ├── config.ts          # Content collection schema (Zod)
│   │   └── blog/              # Markdown/MDX blog posts
│   ├── layouts/               # Page layout templates
│   ├── pages/
│   │   ├── index.astro        # Home
│   │   ├── about.astro        # About
│   │   ├── rss.xml.js         # RSS feed
│   │   ├── blog/
│   │   │   ├── index.astro    # Blog listing
│   │   │   └── [...slug].astro # Dynamic blog post route
│   │   └── api/
│   │       └── track.ts       # Server-side analytics endpoint (prerender: false)
│   ├── styles/
│   │   └── global.css
│   └── utils/                 # Utility functions (+ co-located .test.js/.test.ts files)
└── dist/                      # Build output (gitignored)
```

---

## 3. Configuration Files

### 3.1 `astro.config.mjs`

```js
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const { SITE_URL } = loadEnv(process.env.NODE_ENV ?? '', process.cwd(), '');

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  site: SITE_URL,
  integrations: [mdx(), sitemap()],
});
```

### 3.2 `tsconfig.json`

```jsonc
{
  "extends": "astro/tsconfigs/base",
  "compilerOptions": {
    "module": "esnext",
    "strictNullChecks": true,
    "target": "es6"
  }
}
```

### 3.3 `biome.json`

```jsonc
{
  "$schema": "https://biomejs.dev/schemas/2.x/schema.json",
  "vcs": { "enabled": true, "clientKind": "git", "useIgnoreFile": true },
  "files": {
    "ignoreUnknown": true,
    "includes": ["**", "!**/node_modules", "!**/coverage", "!**/dist", "!**/.history"]
  },
  "formatter": {
    "enabled": true,
    "lineWidth": 100,
    "indentStyle": "space",
    "indentWidth": 2
  },
  "assist": { "actions": { "source": { "organizeImports": "on" } } },
  "linter": { "enabled": true, "rules": { "recommended": true } },
  "javascript": {
    "formatter": {
      "quoteStyle": "single",
      "arrowParentheses": "asNeeded",
      "trailingCommas": "all",
      "semicolons": "always"
    }
  },
  "json": { "formatter": { "trailingCommas": "none" } },
  "overrides": [
    {
      "includes": ["**/*.astro"],
      "linter": { "rules": { "correctness": { "noUnusedVariables": "off", "noUnusedImports": "off" } } }
    },
    {
      "includes": ["**/*.css"],
      "linter": { "rules": { "complexity": { "noImportantStyles": "off" } } }
    }
  ]
}
```

### 3.4 `vitest.config.js`

```js
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {},
});
```

### 3.5 `commitlint.config.js`

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```

### 3.6 `.lintstagedrc.cjs`

```js
module.exports = {
  '*.{js,ts,json,md,mdx,astro,css}': ['biome check --write --no-errors-on-unmatched'],
};
```

### 3.7 `.husky/pre-commit`

```sh
npx lint-staged
npm run dependencies:check || (echo "❌ To upgrade package.json easier 🆙 npm run dependencies:update"; false)
```

### 3.8 `.nvmrc`

```
v22
```

### 3.9 `.gitignore`

```gitignore
dist/
coverage/
.astro/
node_modules/
npm-debug.log*
.env
.env.local
.env.production
.env.*.local
# .env.development and .env.example are committed (safe defaults / docs)
.DS_Store
.terraform/
*.tfstate
*.tfstate.backup
*.tfvars
!*.tfvars.example
.netlify
```

### 3.10 `.env.example`

Template with all environment variables and placeholder values. Committed to the repo.

```env
# ── Site ──────────────────────────────────────────
SITE_URL=https://YOUR_DOMAIN
SITE_TITLE=Your Site Title
SITE_DESCRIPTION=Your site description

# ── Analytics (InfluxDB) ─────────────────────────
INFLUX_URL=https://your-influxdb-instance
INFLUX_TOKEN=your-influx-token
INFLUX_ORG=your-org
INFLUX_BUCKET=your-bucket
```

### 3.11 `.env.development`

Development defaults. Committed (no secrets).

```env
SITE_URL=http://localhost:4321
SITE_TITLE=Your Title (dev)
SITE_DESCRIPTION=Your description – development
INFLUX_URL=
INFLUX_TOKEN=
INFLUX_ORG=
INFLUX_BUCKET=
```

---

## 4. Dependencies

### Production

| Package | Purpose |
|---|---|
| `astro` | Core framework |
| `@astrojs/mdx` | MDX integration |
| `@astrojs/netlify` | Netlify SSR adapter |
| `@astrojs/rss` | RSS feed generation |
| `@astrojs/sitemap` | Sitemap generation |

### Dev

| Package | Purpose |
|---|---|
| `@biomejs/biome` | Linter + formatter |
| `@commitlint/cli` | Commit linting |
| `@commitlint/config-conventional` | Conventional commits preset |
| `@vitest/coverage-v8` | Coverage reporting |
| `husky` | Git hooks |
| `lint-staged` | Run linters on staged files |
| `npm-check-updates` | Dependency update checker |
| `vitest` | Unit test runner |

---

## 5. npm Scripts

```jsonc
{
  "dev": "astro dev",
  "build": "astro build",
  "preview": "astro preview",
  "start": "astro dev",
  "lint": "biome lint .",
  "format": "biome format --write .",
  "check": "biome check .",
  "check:fix": "biome check --write .",
  "test": "vitest run",
  "test:watch": "vitest",
  "test:coverage": "npm run test -- --coverage",
  "dependencies:check": "ncu -e 2",
  "dependencies:update": "ncu -u && npm i",
  "prepare": "husky"
}
```

---

## 6. Content Collections

### Schema (`src/content/config.ts`)

```ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog };
```

Blog posts go in `src/content/blog/` as `.md` or `.mdx` files with matching frontmatter.

---

## 7. Pages & Routing

| Route | File | Rendering |
|---|---|---|
| `/` | `src/pages/index.astro` | Static |
| `/about` | `src/pages/about.astro` | Static |
| `/blog` | `src/pages/blog/index.astro` | Static |
| `/blog/[slug]` | `src/pages/blog/[...slug].astro` | Static |
| `/rss.xml` | `src/pages/rss.xml.js` | Static |
| `/api/track` | `src/pages/api/track.ts` | SSR (`prerender: false`) |

The analytics endpoint (`/api/track`) receives POST requests and writes data to InfluxDB via the line protocol. It reads env vars: `INFLUX_URL`, `INFLUX_TOKEN`, `INFLUX_ORG`, `INFLUX_BUCKET`, `CONTEXT`, `NODE_ENV`.

---

## 8. Components & Utilities

### Components (`src/components/`)

Each component has a co-located `*.test.js` file:
- `BaseHead.astro` – HTML head, meta/SEO tags
- `Header.astro` – Site nav header
- `Footer.astro` – Site footer
- `FormattedDate.astro` – Date display
- `HeaderLink.astro` – Nav link
- `SocialIcons.astro` – Social media icons
- `ThemeToggle.astro` – Dark/light theme toggle

### Layouts (`src/layouts/`)
- `BlogPost.astro` – Blog post page wrapper

### Utilities (`src/utils/`)
- `sort.ts` – Sort posts by `pubDate` descending
- `title.ts` – Generate page titles (`SITE_TITLE - segment1 - segment2`)
- `track.ts` – Helpers for analytics: `escapeTagValue`, `normalizeReferrer`, `getCountryFromHeaders`, `parseUserAgent`

### Constants (`src/consts.ts`)
- `SITE_TITLE` and `SITE_DESCRIPTION` exported for use across pages/components.
- Values are read from `import.meta.env` with hardcoded fallbacks:

```ts
export const SITE_TITLE = import.meta.env.SITE_TITLE || 'Marcos Gil';
export const SITE_DESCRIPTION =
  import.meta.env.SITE_DESCRIPTION || 'Personal website of Marcos Gil';
```

---

## 9. Environment Variables

Configuration is driven by `.env` files loaded automatically by Astro/Vite.

| Variable | Used in | Purpose |
|---|---|---|
| `SITE_URL` | `astro.config.mjs` | Canonical site URL (e.g. `https://example.com`) |
| `SITE_TITLE` | `src/consts.ts` | Site name shown in header, meta, RSS |
| `SITE_DESCRIPTION` | `src/consts.ts` | Default meta description |
| `INFLUX_URL` | `src/pages/api/track.ts` | InfluxDB write endpoint |
| `INFLUX_TOKEN` | `src/pages/api/track.ts` | InfluxDB auth token |
| `INFLUX_ORG` | `src/pages/api/track.ts` | InfluxDB organisation |
| `INFLUX_BUCKET` | `src/pages/api/track.ts` | InfluxDB bucket |
| `CONTEXT` | `src/pages/api/track.ts` | Netlify deploy context (`production`, `deploy-preview`, …) |

**File loading order** (Astro/Vite):
- `astro dev` → `.env.development` > `.env`
- `astro build` → `.env.production` > `.env`
- `.env.development` is committed with safe dev defaults.
- `.env` and `.env.production` are gitignored (contain secrets).

**How values reach the code**:
- `astro.config.mjs` uses Vite's `loadEnv()` to read `SITE_URL` (config runs before Vite).
- `src/consts.ts` reads `SITE_TITLE` / `SITE_DESCRIPTION` from `import.meta.env` with hardcoded fallbacks.
- `src/pages/api/track.ts` reads InfluxDB vars from `process.env` at request time (SSR).

---

## 10. Testing

- **Runner**: Vitest with `getViteConfig` from Astro for Astro-aware transforms.
- **Coverage**: `@vitest/coverage-v8`.
- **Pattern**: Co-located test files (`*.test.js` / `*.test.ts`) next to source.
- **Run**: `npm test` (single run), `npm run test:watch`, `npm run test:coverage`.

---

## 11. Linter & Formatter

- **Tool**: Biome (single tool for lint + format).
- **Config**: `biome.json` (see §3.3).
- Overrides disable `noUnusedVariables`/`noUnusedImports` for `.astro` files and `noImportantStyles` for `.css` files.
- `lint-staged` runs `biome check --write` on staged files via Husky pre-commit hook.

---

## 12. Git Hooks & Commit Standards

- **Husky** initialised via `"prepare": "husky"` script.
- **Pre-commit** (`.husky/pre-commit`):
  1. `npx lint-staged` – run Biome check on staged files.
  2. `npm run dependencies:check` – warn if outdated deps exist.
- **Commit messages**: Enforced by `commitlint` with `@commitlint/config-conventional`.

---

## 13. GitHub Actions

### 13.1 CI (`.github/workflows/ci.yml`)

Triggers on PRs to `main` and pushes to `main`.

**Job: `lint-and-test`**
1. Checkout → Setup Node (from `.nvmrc`, npm cache) → `npm ci`
2. `npm run lint`
3. `npm test`

**Job: `build`** (needs `lint-and-test`)
1. Checkout → Setup Node → `npm ci`
2. `npm run build`
3. Upload `dist` artifact
4. Upload `.netlify` artifact

**Job: `deploy-preview`** (needs `build`, PRs only)
- Calls reusable workflow `deploy-preview.yml`
- Requires repo var `NETLIFY_SITE_ID` and secret `NETLIFY_AUTH_TOKEN`

### 13.2 Deploy Preview (`.github/workflows/deploy-preview.yml`)

Reusable workflow (`workflow_call`).
1. Downloads `dist` and `.netlify` artifacts.
2. Deploys to Netlify (non-prod) via `netlify-cli deploy --dir=dist --no-build`.
3. Posts/updates a PR comment with the preview URL using `actions/github-script`.
- Permissions: `contents: read`, `pull-requests: write`, `issues: write`, `deployments: write`, `statuses: write`.

### 13.3 Production Deploy (`.github/workflows/deploy.yml`)

Triggers on push to `main`.
1. Checkout → Setup Node → `npm ci` → `npm run build`
2. `netlify-cli deploy --dir=dist --no-build --prod`
- Requires secret `NETLIFY_AUTH_TOKEN` and var `NETLIFY_SITE_ID`.

### 13.4 DNS Drift Check (`.github/workflows/dns-drift-check.yml`)

Triggers on `workflow_dispatch` and daily cron (`0 0 * * *`).
1. Installs `dnsutils` + `curl`.
2. Verifies authoritative nameservers match expected DNS provider.
3. Verifies A records for apex and www do not resolve to a previous hosting provider.
4. Runs HTTPS sanity check ensuring no stale `Server` header.

> **Generic note**: Adapt the expected nameservers, IPs, and domains to your own setup.

---

## 14. Infrastructure (Terraform)

### 14.1 Netlify (`infra/netlify/`)

| File | Purpose |
|---|---|
| `versions.tf` | Terraform ≥ 1.6, `netlify/netlify` provider `~> 0.4` |
| `providers.tf` | Provider config (auth via `NETLIFY_TOKEN` env var) |
| `variables.tf` | `team_slug`, `team_id`, `domain`, `site_id`, InfluxDB vars, tracking vars |
| `main.tf` | `netlify_dns_zone` resource for root domain |
| `env.tf` | `netlify_environment_variable` resources for InfluxDB and tracking config (production context) |
| `outputs.tf` | Outputs `zone_id` and `nameservers` |
| `terraform.tfvars.example` | Example variable values |

**State**: Local backend (`terraform.tfstate`, gitignored).

### 14.2 Grafana (`infra/grafana/`)

| File | Purpose |
|---|---|
| `versions.tf` | Terraform ≥ 1.5, `grafana/grafana` provider `~> 3.12`, local backend |
| `main.tf` | Provider config, `grafana_folder` + dynamic `grafana_dashboard` from JSON files |
| `variables.tf` | `grafana_url`, `grafana_api_token` (sensitive), `grafana_org_id`, `dashboard_folder`, `dashboards_path` |
| `dashboards/` | Exported Grafana dashboard JSON files |
| `terraform.tfvars.example` | Example variable values |

**State**: Local backend.

---

## 15. Replication Checklist

1. **Scaffold**: `npm create astro@latest` → choose blog template / empty.
2. **Install deps**: Add all production and dev dependencies from §4.
3. **Config files**: Create all files from §3 (astro, tsconfig, biome, vitest, commitlint, lint-staged, husky, nvmrc, gitignore, `.env.example`, `.env.development`).
4. **Project structure**: Create folder tree from §2.
5. **Content schema**: Add `src/content/config.ts` from §6.
6. **Pages**: Create routes listed in §7.
7. **Components**: Create components and layouts from §8 with co-located tests.
8. **Utilities**: Create utils from §8 with co-located tests.
9. **Constants**: Create `src/consts.ts` with env-driven site title/description exports.
10. **Environment**: Copy `.env.example` to `.env` and fill in real values (see §9).
11. **npm scripts**: Add all scripts from §5 to `package.json`.
12. **Husky setup**: Run `npx husky init`, create `.husky/pre-commit` from §3.7.
13. **GitHub Actions**: Create all workflow files from §13.
14. **Infra**: Create Terraform modules from §14 (adapt vars to your providers/accounts).
15. **Verify**: `npm run lint`, `npm test`, `npm run build` should all pass.
