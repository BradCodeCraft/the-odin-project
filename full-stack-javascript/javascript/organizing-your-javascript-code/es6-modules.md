# ES6 Modules

## Introduction

## Before ES6 modules: The global scope problem

Even if we use multiple JS files, they will still end up sharing the same
global scope. Our top-level variables are not safe!

Before ESM, we could wrap some things in an IIFE, which would cause it to run
just the same, but now any variables inside them are scoped to that function
and not globally.

## ES6 modules

With ESM, we have a little more control over things. Each file has its own
private scope, by default, and not only can we choose what things we export
from that file, we can also choose what things we import into other files. So,
just because we export something, it doesn't mean it's automatically available
elsewhere; it will only be available in another file if we explicitly import it
there.

## Import and export

In true JS fashion, we have two types of importing and exporting: `default` and
`named`, and they essentially do the same kind of thing but very slightly
differently. They can even be mixed and matched in the same file.

### Named exports

To export something as a **named export**, we can either stick the `export`
keyword in front of its declaration, or add an `export {...}` somewhere in the
file, where the curly braces contain a list of the names of the things to
export. Either method is fine to use, and we can export as many things as we
liked as named exports.

To do named imports, we must specify the namese of the things we want to import
inside `{ }` and provide the path to the file we're importing from.

> **Named imports/exports aren't the same as object literals!**

### Default exports

In constrast to named export, a file can only default export a single thing.
Something exported this way does not have a name attached to it, so when you
import it somewhere, you can decide what name to give it.

To export something from a file as a default export, we can also do it inline
by prepending `export default` to the appropriate declaration, or we can export
it at the end of the file, this time *without* any curly braces. Not that if
you want to inline default export a variable, the `default` keyword *replaces*
the variable declaration so you export the expression directly.

You can use both default and named exports in the same file. Confusingly
enough, there isn't really a universally agreed-upon rule for when to use
either, outside of the fact that a file can have multiple named exports but
only one default export. When it comes to only needing to export a single thing
from a module, some people prefer using a default export whereas some prefer
using a single named export.

## Entry points

When we use ESM, instead of adding every JS file to our HTML in order, we only
need to link a single file - the **entry point**.

We also did not need to add the `defer` attribute, as `type="module"` will
automatically defer script execution for us.

## CommonJS

CommonJS (CJS) uses syntax like `require` and `module.export`. This is a module
system that was designed for use with Node.js that works a little differently
than ESM, and is not something that browsers wil lbe able to understand.

## Assignment

### [export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

In order to use the `export` declaration in a source file, the file must be
interpreted by runtime as a *module*.

#### Description

##### Re-exporting / Aggregating

A module can also "relay" values exported from other modules without the hassle
of writing two separate import/export statements. This is often useful when
creating a single module concentrating various exports from various modules
(a.k.a "barrel module").

### [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

#### Description

##### Forms of import declarations

There are four forms of `import` declarations: named, default, namespace, and
side effect.

##### Hoisting

Import declarations are **hoisted**. This means that the identifiers the
imports introduce are available in the entire module scope, and their side
effects are produced before the rest of teh module's code runs.

##### Module specifier resolution

There are three types of specifiers widely recognized:

- *Relative specifiers* that start with `/`, `./`, or `../`, which are resolved
  relative to the current module URL.
- *Absolute specifiers* that are parsable URLs, which are resolved as-is.
- *Bare specifiers*
