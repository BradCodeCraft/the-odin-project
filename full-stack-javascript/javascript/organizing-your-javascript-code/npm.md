# npm

## Introduction

## npm

**npm** is a package manager.

## package.json

npm revolves around a file called `package.json`. It's a JSON file containing
information about our project. npm can read this file and do things such as
install all of the listed dependencies with the correct versions, and running
commands that you've set as an npm script.

## Assignment

### [Downloading and installing packages locally](https://docs.npmjs.com/downloading-and-installing-packages-locally)

#### Installing an unsciped package

To install a public package, on the comand line, run

```bash
npm install <package_name>
```

This will create the `node_modules` directory in your current directory and
will download the package to that directory.

#### Installing a scoped public package

```bash
npm i @scope/package-name
```

#### Installing a private package

Private packages can only be downloaded and installed by those who have been
granted read access to the package. Since private packages are always scoped,
you must reference the scope name during installation:

```bash
npm i @scope/private-package-name
```

#### Testing package installation

To confirm that `npm install` worked correctly, in your module directory, check
that a `node_modules` directory exists and that it contains a directory for the
package(s) you installed:

```bash
ls node_modules
```

#### Installed package version

If there is a `package.json` file in the directory in which `npm install` is
run, npm installs the latest version of the package that satisfies the semantic
versioning rule declared in `package.json`.

If there is no `package.json` file, the latest version of the package is
installed.

#### Installing a package with dist-tags

To override default behavior, use `npm install <package_name>@<tag>`.

### [Creating a package.json](https://docs.npmjs.com/creating-a-package-json-file)

A `package.json` file:

- lists the packages your project depends on
- specifies versions of a package that your project can use using semantic
  versioning rules
- makes your build reproducible, and tehrefore easier to share with other
  developers

#### `package.json` fields

##### Required `name` and `version` fields

##### Author field

##### Example

```package.json
{
  "name": "my-awesome-package",
  "version": "1.0.0",
  "author": "Your Name <email@example.com> (https://example.com)"
}
```

#### Creating a new `package.json` file

##### Running a CLI questionnaire

To create a `package.json` file with values that you supply, use the `npm init`
command.

1. On the command line, navigate to the root directory of your package.
1. Run the following command: `npm init`
1. Answer the questions

##### Customizing the `package.json` questionnaire

If you expect to create many `package.json` files, you can customize the
questions asked and fields created during the `init` process so all the
`package.json` files contain a standard set of information.

1. In your home directory, create a file called `.npm-init.js`

1. To add custom questions, using a text editor, add questions with the
   `prompt` function:

   ```javascript
   module.exports = prompt("What's your favorite flavor of ice cream, buddy?",
       "I LIKE THEM ALL");
   ```

1. To add custom fields, add desired fields to the `.npm-init.js` file:

   ```javascript
   module.exports = {
     customField: 'example field',
     otherCustomField: 'more example'
   }
   ```

##### Creating a default `package.json` file

`npm init -y`

##### Example

##### Default values extracted from the current directory

##### Setting config options for the init command

### [Demystifying `devDependencies` and `dependencies`](https://dev.to/mshertzberg/demystifying-devdependencies-and-dependencies-5ege)

In the npm ecosystem packages are installed and consumed by requiring or
importing them in files, or run in the command-line as binaries. When an
applicationis fed into a module bundler, all required dependencies are pulled
together and bundled. You should ensure that these packages are present in
`dependencies`, as they're needed at runtime.

Development dependencies, or `devDependencies` are packages that are consumed
by requiring them in files or run as binaries, during the development phase.
These are packages that are only necessary during development and not
neccessary for the production build. For example, babel plugins and presets,
test runners, and linter packages.

Alternatively, there is a dependency that is necessary in both production and
development. In this case, it can be added to `dependencies`, since
`dependencies` are available in both production and development.

### [Modern JS Explained For Dinosaurs](https://peterxjang.com/blog/modern-javascript-explained-for-dinosaurs.html)

#### Using JS the "old-school" way

#### Using a JS package manager (npm)
