# Revisiting Webpack

## Introduction

## npm scripts

Scripts can be written in the form `"name": "command"`, and are executed by
running `npm run <name>` in the terminal.

```json
{
  "scripts": {
    "build": "webpack",
    "dev": "webpack serve",
    "deploy": "git subtree push --prefix dist origin gh-pages"
  }
}
```

Note that we drop the `npx` from the start of the `webpack` and `webpack serve`
commands when setting them as scripts, as we only needed `npx` to run them
directly in the terminal without npm scripts.

## Webpack modes

To save you from having to manually edit your configuration file every time you
wish to switch modes, such as before bundling into `dist` or before going back
to use your dev server, you can have two different configuration files, and
then have your build and dev npm scripts specify which configuration files to
use (omitting the `--config` option makes Webpack search for
`webpack.config.js`) by default:

```json
"build": "webpack --config webpack.prod.js",
"serve": "webpack serve --config webpack.dev.js"
```

A tool called `webpack-merge` that can make using multiple Webpack
configuration files easier to deal with and with minimal duplication.

## Template repositories

Whenever you create a new repository on Github, there is an option near the top
for a `Repository template`.

## Assignment

### [Introduction to Package JSON Scripts in Node.js: A Guide for Optimizing Your Development Workflow](https://www.upgrad.com/blog/introduction-to-package-json-scripts-in-node-js/)

#### What Are Package JSON Scripts in Node.js?

These scripts automate terminal commands, making it easier to perform
repetitive or complex tasks with simple keywords.

##### What Can You Automate with npm Scripts?

Some common tasks:

- Running a linter
- Starting a development server
- Minifying JS or CSS
- Running tests
- Building a project
- Cleaning up builds

##### How to Define and Run npm Scripts

To define a script, add it under the "scripts" section in your package.json
file

##### Running npm Scripts

`npm run <name>`

#### Essential Package JSON Scripts for Node.js Projects

##### Common Scripts

- start
- test
- build
- dev
- lint

##### Additional Scripts

- clean
- deploy

Example:

```json
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "jest",
    "build": "webpack --mode production",
    "lint": "eslint .",
    "clean": "rm -rf dist/",
    "deploy": "scp -r dist/ user@server:/var/www/project"
  }
}
```

##### Exploring Pre and Post Scripts in Node.js

Pre and post scripts allow you to define tasks that run automatically before or
after a specific npm script.

###### How Pre and Post Scripts Work

Example:

```json
{
  "scripts": {
    "start": "node app.js",
    "prestart": "npm run lint",
    "posttest": "rm -rf logs/"
  }
}
```

##### Understanding Life Cycle Scripts in Node.js

Life cycle scripts are triggered udcring key stages of the application workflow.

###### Benefits of Life Cycle Scripts

- Automates repetitive tasks
- Ensures smooth workflows by sequencing actions during application execution

```json
{
  "scripts": {
    "prestart": "npm run build",
    "start": "node app.js",
    "poststart": "echo 'Server started successfully!'",
    "pretest": "npm run clean",
    "test": "jest",
    "posttest": "npm run lint"
  }
}
```

#### Step-by-Step Guide to Creating Custom Package JSON Scripts

##### Passing Arguments to Scripts

Arguments are passed after `--` in the command

```json
{
  "scripts": {
    "greet": "node greet.js"
  }
}
```

```bash
npm run greet --hello
```

##### Running Multiple Scripts in Parallel

To execute multiple scripts simultaneously, use tools like npm-run-all or
custom solutions with &.

#### Working with User and Environment Variables in Scripts

##### User: Running Scripts with Root Privileges

Best Practices for Running Scripts as Root:

- Avoid running scripts as root unless absolutely necessary to prevent security
  risks.
- Use tools like sudo or run scripts with appropriate user permissions.

##### Environment: Accessing Enviroment Variables and System Info

Environment variables allow you to pass dynamic data to scripts, making them
adaptable across different systems or configurations.

##### Cross-Platform Variables

Use `cross-env` for compatibility across systems.

##### Exit Codes: Understanding Script Exit Codes

Exit codes indicate whether a script ran successfully or encountered an error.

##### How Exit Codes Work

- **Exit code** 0: Success
- **Non-zero codes**: Error or failure

#### How to Enhance NPM Script Options for Maximum Efficiency?

Enhancing npm scripts with flags and arguments makes them more versatile and
powerful. These features allow scripts to handle dynamic input, control
execution, and customize behaviours based on your needs.

##### Passing Arguments to Scripts

##### How to Pass Arguments

- Add `--` after the script name in the terminal, follow by the arguments or
  flags
- Access those arguments using `process.argv` in your Node.js scripts.

##### Benefits of Enhancing Script Options

- **Dynamic Execution**: customize behavior without editing the script
- **Increased Productivity**: save time with reusable and adaptable commands
- **Improved debugging**: output results to files or logs for analysis

#### How to Effectively Manage Your Node.js package.json File?

##### Steps to Manage package.json Efficiently

1. Initialize package.json using npm

   - Use `npm init` to create a structured and well-documented package.json
     file.

1. Manage Dependencies Properly

   - Use npm commands to add, update, or remove dependencies

1. Synchronize package.json and node_modules

   - Ensure consistency between the package.json file and the installed
     packages in node_modules/.

1. Use npm CLI for Safe Management

   - Use npm CLI commands for better control and reliability:
     `npm update/audit/prune`

##### Tips for Managing package.json

- Regularly audit dependencies for vulnerabilities
- Use semantic versioning for precise dependency management
- Group related npm scripts and document their purposes for easier maintenance
- Keep the file clean by removing unused dependencies with npm prune.

#### Best Practices for Writing Package JSON Scripts

1. Simplicity

   - Break down complex tasks into smaller, focused scripts that are easier to
     manage and debug

1. Descriptive Names:

   - Use clear and meaningful names for your scripts to make them
     self-explanatory

1. Avoid Hardcoding

   - Use environment variables for configurable paths and values instead of
     hardcoding them

1. Modularization

   - Keep scripts modular by combining smaller scripts into larger workflows
     using tools like `npm-run-all`

1. Error Handling

   - Ensure scripts handle errors gracefully and exit with appropriate exit
     codes. This helps in debuggin and maintaining workflows.

1. Testing and Documentation

   - Test your scripts thoroughly in different scenarios and document their
     purpose for team members.

#### Benefits of Using Package JSON Scripts in NodeJS

- Consistency
  - Ensures that tasks run the same way across different environments and team
    members, avoiding discrepancies due to system differences.
- Sharability
  - Simplifies onboarding for new developers by providing a clear set of
    pre-configured commands. This promotes collaboration by reducing setup
    complexity.
- Automation
  - Automates repetitive tasks, minimizing human errors and saving time.
    Scripts can handle everyting from testing to deployment with a single
    command.
- Flexibility
  - Allows you to adapt scripts to changing project requirements.

#### Enhance Your Node.js Development Workflow with Advanced Script Usage

1. Automate Build and Deployment Pipelines

   - Integrate npm scripts with CI/CD tools to automate builds, tests, and deployments

1. Version Control Integration

   - Integrate nppm scripts with Git hooks to enfore coding standards and run
     checks automatically during the Git workflow.

1. Collaborative Wrokflow

   - Create standardized package JSON scripts in Node.js projects to maintain
     consistency across the team and improve collaboration.

### [Webpack's Production](https://webpack.js.org/guides/production/)

#### Setup

In *development*, we want strong source mapping and a localhost server with
live reloading or hot module replacement. In *production*, our goals shift to a
focus on minified bundles, lighter weight source maps, and optimized assets to
improve load time. With this logical separation at hand, we typically recommend
writing **separate webpack configurations** for each environment.

With the "common" configuration in place, we won't have to duplicate code
within the environment-specific configurations.

#### NPM Scripts

```json
{
  "scripts": {
    "start": "webpack serve --open --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js"
  }
}
```

#### Minification

#### Source Mapping

We encourage you to have source maps enabled in production, as they are useful
for debugging as well as running benchmark tests. You should choose one with a
fairly quick build speed that's recommended for production use.

#### Minimize CSS

#### CLI Alternatives
