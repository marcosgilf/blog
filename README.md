# Blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/b83a1684-328d-4560-9fa6-bc2470bef0ed/deploy-status)](https://app.netlify.com/sites/marcosgilf/deploys)
[![PR Validation](https://github.com/marcosgilf/blog/actions/workflows/pr-validation.yml/badge.svg)](https://github.com/marcosgilf/blog/actions/workflows/pr-validation.yml)
[![Visual Regression Tests](https://github.com/marcosgilf/blog/actions/workflows/visual-regression.yml/badge.svg)](https://github.com/marcosgilf/blog/actions/workflows/visual-regression.yml)
[![Security & Dependencies](https://github.com/marcosgilf/blog/actions/workflows/security.yml/badge.svg)](https://github.com/marcosgilf/blog/actions/workflows/security.yml)
[![Code Quality](https://github.com/marcosgilf/blog/actions/workflows/code-quality.yml/badge.svg)](https://github.com/marcosgilf/blog/actions/workflows/code-quality.yml)

Welcome to my personal blog! This is where I share my thoughts, experiences, and insights on various topics. Feel free to explore the different articles and engage in discussions.

## 🚀 Project Structure

Inside the project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   └── utils/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🧪 Testing & Quality

| Command                      | Action                                        |
| :--------------------------- | :-------------------------------------------- |
| `npm run test`               | Run unit tests                               |
| `npm run test:coverage`      | Run unit tests with coverage report          |
| `npm run test:watch`         | Run unit tests in watch mode                 |
| `npm run test:visual`        | Run visual regression tests                  |
| `npm run test:visual:ui`     | Run visual tests with interactive UI         |
| `npm run test:visual:update` | Update visual test snapshots                 |
| `npm run lint`               | Run all linters                              |
| `npm run format`             | Format code with prettier and eslint         |
| `npm run dependencies:check` | Check for outdated dependencies              |

## 🔧 CI/CD Pipeline

This project includes comprehensive CI/CD workflows:

- **PR Validation**: Runs linting, dependency checks, unit tests, and build verification
- **Visual Regression Testing**: Automated visual testing across multiple browsers
- **Security Scanning**: Weekly dependency vulnerability scans and security audits
- **Cross-browser Testing**: Ensures compatibility across Chrome, Firefox, and Safari

### Visual Testing

The project uses Playwright for visual regression testing to ensure UI consistency:

- Tests run automatically on pull requests affecting UI code
- Snapshots are captured across different browsers and viewport sizes
- Failed visual tests provide detailed comparison reports
- Manual snapshot updates available through GitHub Actions workflow

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
