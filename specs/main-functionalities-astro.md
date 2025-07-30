# Main Functionalities Specification

## Project Overview

This is a personal blog website built with **Astro** framework, serving as Marcos Gil's personal space on the internet. The site is designed as a modern, static blog with MDX support and optimized for performance.

### Key Information
- **Owner**: Marcos Gil (marcosgilf.com)
- **Repository**: https://github.com/marcosgilf/blog
- **Site URL**: https://www.marcosgilf.com
- **Framework**: Astro v5.x
- **Deployment**: Netlify
- **License**: MIT

## Core Functionalities

### 1. Static Site Generation
- **Technology**: Astro framework with static site generation
- **Build Command**: `npm run build`
- **Output**: Static files in `./dist/` directory
- **Development Server**: `npm run dev` (localhost:4321)

### 2. Blog System
- **Content Management**: File-based content system using Astro Content Collections
- **Content Location**: `src/content/blog/`
- **Supported Formats**: Markdown (.md) and MDX (.mdx)
- **Content Schema**: Validated frontmatter with required fields:
  - `title` (string, required)
  - `description` (string, required)
  - `pubDate` (date, required)
  - `updatedDate` (date, optional)
  - `heroImage` (string, optional)

### 3. Page Structure
- **Home Page** (`/`): Personal introduction with profile image and navigation
- **Blog Index** (`/blog`): Lists all blog posts
- **Individual Blog Posts** (`/blog/[slug]`): Dynamic routing for blog content
- **About Page** (`/about`): Personal information page
- **RSS Feed** (`/rss.xml`): Automated RSS feed generation

### 4. Component Architecture
**Core Components** (located in `src/components/`):
- `BaseHead.astro`: HTML head metadata and SEO
- `Header.astro`: Site navigation header
- `Footer.astro`: Site footer
- `FormattedDate.astro`: Date formatting utility
- `HeaderLink.astro`: Navigation link component
- `SocialIcons.astro`: Social media icons

**Layout Components** (located in `src/layouts/`):
- `BlogPost.astro`: Template for individual blog posts

### 5. SEO and Performance Features
- **Sitemap Generation**: Automatic sitemap.xml creation via @astrojs/sitemap
- **RSS Feed**: Automated RSS feed for blog posts
- **Meta Tags**: Proper HTML meta tags for SEO
- **Static Assets**: Optimized static asset handling in `public/` directory

### 6. Development Features
- **TypeScript Support**: Full TypeScript integration
- **Hot Module Replacement**: Development server with HMR
- **Content Collections**: Type-safe content management
- **Component Testing**: Vitest for unit testing

### 7. Content Collections Schema
```typescript
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
```

### 8. Styling and Assets
- **Global Styles**: `src/styles/global.css`
- **Fonts**: Custom Atkinson font family (bold and regular)
- **Profile Image**: `public/marcos-gil-profile.jpg`
- **Favicon**: `public/favicon.svg`

### 9. Build and Deployment
- **Build Tool**: Astro native build system
- **Static Output**: Generates static HTML, CSS, and JS
- **Deployment Platform**: Netlify
- **Domain**: marcosgilf.com

### 10. Development Tools Integration
- **Code Quality**: ESLint with Prettier formatting
- **Git Hooks**: Husky for pre-commit hooks
- **Commit Standards**: Conventional commits with commitlint
- **Testing**: Vitest for unit testing with coverage reports
- **Dependency Management**: npm with automated dependency checking

## File Structure Overview
```
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable Astro components
│   ├── content/          # Content collections (blog posts)
│   ├── layouts/          # Page layout templates
│   ├── pages/           # File-based routing pages
│   ├── styles/          # Global CSS styles
│   └── utils/           # Utility functions
├── astro.config.mjs     # Astro configuration
├── package.json         # Dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

## Technology Stack
- **Framework**: Astro 5.x
- **Language**: TypeScript
- **Content**: MDX (Markdown + JSX)
- **Styling**: CSS
- **Testing**: Vitest
- **Linting**: ESLint + Prettier
- **Deployment**: Netlify
- **Package Manager**: npm

## Key Constants
- **Site Title**: "Marcos Gil"
- **Site Description**: "Personal website of Marcos Gil"
- **Site URL**: "https://www.marcosgilf.com"

This specification serves as a comprehensive reference for understanding the blog's architecture and functionalities for LLM and coding assistants.
