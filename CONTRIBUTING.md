# Contributing

## Getting Started

> Please note that this project is released with a [Contributor Code of Conduct](./CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

First, create a fork of the [marcosgilf/blog](https://github.com/marcosgilf/blog) repository by hitting the `fork` button on the GitHub page.

Next, clone our repository onto your computer.

```sh
git clone git@github.com:marcosgilf/blog.git
```

Once cloning is complete, change directory to the repository.

```sh
cd blog
```

Now add your fork as a remote (replacing YOUR_USERNAME with your GitHub username).

```sh
git remote add fork git@github.com:<YOUR_USERNAME>/blog.git
```

Create a new local branch.

```sh
git checkout -b my-awesome-fix
```

## Preparing Your Local Environment for Development

Now that you have cloned the repository, ensure you have [Node.js and npm](https://docs.npmjs.com/) installed, then run the following command to set up the development environment.

```sh
npm install
```

This will download and install all packages needed.

## Making Your Changes

Make your changes to the project. Commits are linted using precommit hooks, meaning that any code that raises a linting error cannot be committed. In order to help avoid that, we recommend using an IDE or editor with an ESLint plugin in order to streamline the development process. Plugins are available for all the popular editors. For more information see [ESLint Integrations](https://eslint.org/docs/user-guide/integrations)

### Compiling the TypeScript Code

If you're making cross-package changes, you need to compile the TypeScript code. We recommend executing `tsc:watch` from the root of the package and keeping that running while you make your changes.

### Running Tests

To run the tests of a package, it's recommended to `cd` into the package directory and then using `npm test` to run them. This way you're only running tests of that specific package.

### Integration Testing

To see how your changes integrate with everything together you can use the `test-runner` package. There are different commands in this package which you can execute to trigger different scenarios in the test runner.

## Adding New Packages

For all projects the tsconfig/jsconfig configuration files are auto generated. You need to add an entry to the [./workspace-packages.ts](./workspace-packages.ts) to let it generate a config for you. After adding an entry, run `npx update-package-configs` to generate the files for you.

## Creating a Changeset

If you made changes for which you want to trigger a release, you need to create a changeset.
This documents your intent to release, and allows you to specify a message that will be put into the changelog(s) of the package(s).

[More information on changesets](https://github.com/atlassian/changesets)

Run

```sh
npx changeset
```

And use the menu to select for which packages you need a release, and then select what kind of release. For the release type, we follow [Semantic Versioning](https://semver.org/), so please take a look if you're unfamiliar.

In short:

- A documentation change or similar chore usually does not require a release
- A bugfix requires a patch
- A new feature (feat) requires a minor
- A breaking change requires a major

Exceptions:

- For alpha (<1.0.0), bugfixes and feats are both patches, and breaking changes are allowed as minors.
- For release-candidate and other special cases, other rules may follow.

## Committing Your Changes

Commit messages must follow the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0/)
Modern-web uses package name as scope. So for example if you fix a _terrible bug_ in the package `@web/test-runner`, the commit message should look like this:

```sh
fix(test-runner): fix terrible bug
```

## Create a Pull Request

Now it's time to push your branch that contains your committed changes to your fork.

```sh
git push -u fork my-awesome-fix
```

After a successful push, if you visit your fork on GitHub, you should see a button that will allow you to create a Pull Request from your forked branch, to our main branch.
