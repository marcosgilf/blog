# Blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/b83a1684-328d-4560-9fa6-bc2470bef0ed/deploy-status)](https://app.netlify.com/sites/marcosgilf/deploys)

Welcome to my personal blog! This is where I share my thoughts, experiences, and insights on various topics. Feel free to explore the different articles and engage in discussions.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v22 or later) and npm installed on your machine.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/marcosgilf/blog.git
   cd blog
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

4. Open your browser and visit [http://localhost:4321](http://localhost:4321) 🎉

## Development

### Running the Dev Server

```sh
npm run dev
```

This starts a local server with hot-reload. Any changes you make to `.astro`, `.md`, or `.mdx` files will instantly reflect in the browser.

### Code Formatting & Linting

We use **ESLint** and **Prettier** to keep the codebase clean and consistent.

```sh
# Check for linting and formatting issues
npm run lint

# Auto-fix all issues
npm run format
```

> **Tip:** Commits are automatically checked by Husky pre-commit hooks. If you see linting errors when committing, run `npm run format` first.

### Running Tests

```sh
# Run tests once
npm run test

# Run tests in watch mode (great for TDD)
npm run test:watch
```

## Building for Production

```sh
npm run build
```

This generates a static site in the `./dist/` folder, ready for deployment.

To preview the production build locally:

```sh
npm run preview
```

## 🚀 Project Structure

```text
├── public/          # Static assets (images, fonts)
├── src/
│   ├── components/  # Reusable Astro components
│   ├── content/     # Blog posts (Markdown/MDX)
│   ├── layouts/     # Page layouts
│   ├── pages/       # File-based routing
│   └── utils/       # Helper functions
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

- **Pages**: `.astro` or `.md` files in `src/pages/` become routes automatically
- **Content**: Blog posts live in `src/content/blog/` with validated frontmatter
- **Static files**: Place images and other assets in `public/`

Learn more about [Astro's Content Collections](https://docs.astro.build/en/guides/content-collections/).

## Contributing

We'd love your help! Please read our [Contributing Guide](./CONTRIBUTING.md) to learn about our development process and how to submit pull requests.

By participating in this project, you agree to abide by our [Code of Conduct](./CODE_OF_CONDUCT.md).


## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
