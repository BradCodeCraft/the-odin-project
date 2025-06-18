# Webpack

## Introduction

Bundlers still provide us with a lot of power to process and optimize our code
in various ways.

## Bundling

With bundling, we provide the bundler with an entry point. It then builds a
dependency graph from that file, combines all relevant files together, and then
outputs a single file with all the encessary code included.

While it does this, we could also get it to do a whole bunch of other things,
such as **minifying our code**, image optimizations, or even
**"tree shaking"**.

## Webpack

We'll first need to make a new directory for our practice app, then create a
`package.json` file in it for npm to record information about packages we use.

```bash
mkdir webpack-practice && cd webpack-practice && npm init -y
```

If you see `"type": "commonjs"` or `"type": "module"` inside, **remove it**,
otherwise Webpack will start throwing errors at us due to clashing module
issues.

Once we've made sure `package.json` does not contain a `"type"` property, we
can go ahead and install Webpack, which involves two packages.

```bash
npm i --save-dev webpack webpack-cli
```

> **src** and **dist**
> `src` is where we keep all of our website's source code, essentially where
> all of our work will be done (with an exception being altering any
> configuration files in the root of the project). When we run webpack to
> bundle our code, it will output the bundled files into the `dist` directory.
> The idea is that if someone were to fork or clone the project, they would not
> need the `dist` directory, as they'd just be able to run Webpack to build
> form `src` into their own `dist`. Similarly, to deploy our website, we would
> only need the `dist` code and nothing else. **Work inside `src`, build into
> `dist`, then deploy from there**!

## Bundling JS

> **Import file extensions**
> With Webpack and many other bundlers, some file extensions like `.js` are
> optional, as Webpack will automatically check extensionless file paths for
> `.js` files by default.
>
> This is a feature of Webpack, not ESM.

To bundle JS files, we'll also want a Webpack configuration file, which will
contain all the details we need for bundling.

This file uses CJS because it runs in NodeJS and not the browser. By default,
NodeJS uses CJS syntax, and the configuration file also contains some
CJS-specific things.

Few key sections:

- `mode`

- `entry`: a file path from the config file to whichever file is our entry
  point

- `output`: an object containing information about the output bundle

  - `filename`: the name of the output bundle
  - `path`: the path to the output directory, in this case, `dist`. If doesn't
    exist, it will automatically create it for us as well.
  - `clean`: if we include this option and set it to `true`, then each time we
    run Webpack to bundle, it will empty the output directory first before
    bundling the files into it. This helps us keep `dist` clean, so it only
    contains the files produces by the most recent bundling.

## Handling HTML

`HTMLWebpackPlugin` required

## Loading CSS

`style-loader` and `css-loader`

`css-loader` will read any CSS files we import in a JS file and then store
the result in a string. `style-loader` then takes that string and actually adds
the JS code that will apply those styles to the page. Therefore, we need both.

> **Loader order matters for CSS!**
> Notice how we put `css-loader` **at the end** of the array. We **must** set
> this order and not the reverse.
>
> Webpack will run the loaders **starting at the end**, so we want it to read the
> CSS file into a string with `css-loader` first, then use `style-loader` to
> inject the JS that applies the CSS in that string to the page.

### What about link tags?

It becomes easier to work with multiple smaller CSS filesw that you import in
the modules they're needed. There are even ways those files can be scoped only
to those modules and not globally!

## Loading images

There are three different ways you could be dealing with local image files:

1. **Image files used in our CSS inside `url()`**

   - `css-loader` already handles this for us.

1. **Image files we reference in our HTML template**

   - We need to install and tell Webpack to use something called
     `html-loader`, which will detect image file paths in our HTML template and
     load the right image files for us.

1. **Image we use in our JS, where we will need to import the files**

   - If we need to use a local image file in our JS, we need to import the
     images into our JS module. Since images aren't JS, we need to tell
     Webpack that these files will be assets by adding an `asset/resource`
     rule.
   - You can always edit the regex in the `test` property to remove any file
     extensions you don't need or add any extensions you do need.
   - Then, in whatever JS module we want to use that image in, we just have to
     default import it

> **You only need to configure what you need**

## Webpack dev server

`webpack-dev-server` works by bundling your code behind the scenes (as if we
ran `npx webpack`, but without saving the files to `dist`), and it does this
every time you save a file that's used in the bundle. We can also use something
called a **source map** so that any error messages reference files and lines
from our development code and not the jumbled mess inside our single bundled
`.js` file.

## Rounding up

## Assignment

### [Concepts](https://webpack.js.org/concepts/)

At its core, **webpack** is a *static module bundler* for modern JS
applications.

#### Entry

An **entry point** indicates which module webpack should use to begin building
out its internal *dependency graph*. Webpack will figure out which other
modules and libraries that entry point depends on.

```javascript
module.exports = {
  entry: "./path/to/my/entry/file.js",
}
```

#### Output

The **output** property tells webpack where to emit the *bundles* it creates
and how to name these files.

```javascript
const path = require("path");
module.exports = {
  entry: "./path/to/my/entry/file.js",
  output: {
      path: path.resolve(__dirname, "dist"),
      filename: "my-first-webpack.bundle.js"
    }
}
```

#### Loaders

**Loaders** allow webpack to process other types of files and convert them into
valid *modules* that can be consumed by your application and added to the
dependency graph

At a high level, **loaders** have two properties in your webpack configuration:

1. The `test` property identifies which file or files should be transformed.
1. The `use` property indicates which loader should be used to do the
   transforming

```javascript
const path = require("path");
module.exports = {
  entry: "./path/to/my/entry/file.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js"
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader'}]
  }
}
```

> It is important to remember that when defining rules in your webpack config,
> you are defining them under `module.rules` and not `rules.`
> When using regex to match files, you may not quote it.

#### Plugins

Plugins can be leveraged to perform a wider range of tasks like bundle
optimization, asset management, and injection of environment variables.

In order to use a plugin, you need to `require()` it and add it to the
`plugins` array. Most plugins are customizable through options. Since you can
use a plugin multiple times in a configuration for different purposes, you need
to create an instance of it by calling it with the `new` operator.

#### Mode

By setting the `mode` parameter to either `development`, `production`, or
`none`, you can enable webpack's built-in optimizations that correspond to each
environment.

### [Asset Management](https://webpack.js.org/guides/asset-management/)

#### Setup

#### Loading CSS

#### Loading Images

#### Loading Fonts

```javascript
{
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: "asset/resource",
}
```

#### Loading Data

Required plugins: `csv-loader` and `xml-loader`.

```javascript
{
  test: /\.(csv|tsv)$/i,
  use: ["csv-loader"],
},
{
  test: /\.xml$/i,
  use: ["xml-loader"],
}
```

#### Customize parser of JSON modules

Install `toml`, `yamljs`, and `json5` packages.

```javascript
{
  test: /\.toml$/i,
  type: 'json',
  parser: {
    parse: toml.parse,
  },
},
{
  test: /\.yaml$/i,
  type: 'json',
  parser: {
    parse: yaml.parse,
  },
},
{
  test: /\.json5$/i,
  type: 'json',
  parser: {
    parse: json5.parse,
  },
}
```

#### Global Assets

Instead of relying on a global `/assets` directory that contains everything,
you can group assets with the code that uses them.

#### Wrapping up
