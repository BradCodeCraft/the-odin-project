# Linting

## Introduction

## Style guides

### [Airbnb JS Style Guide](https://github.com/airbnb/javascript)

### [Google JS Style Guide](https://google.github.io/styleguide/tsguide.html)

### [JS Standard Style](https://standardjs.com/rules.html)

## Linting

**Linters** are tools that will scan your code with a set of style rules and  
will report any errors to you that they find. In some cases, they can even
auto-fix the errors! The most common one for JS is **ESLint**.

> **ESLint v9 and flat config support**

## Formatters

Formatters take your JS code and then automatically format it according to a
set of rules. Unlike linters, they do not look for style errors, but
specifically target the layout of your code, making intelligent decisions about
things like spaces, indentation levels, and line-breaks.

**Prettier** is a very popular choice that is highly opinionated.

## IDE extensions for linting and formatting

It is important that you still have the packages installed as dependencies in
your project along any configuration files. The extensions can have fallback
rules set, but if they detect the respective package and configuration file in
your project, they will use those rules and the package version installed. That
way, projects always hold the source of truth for what linting and formatting
rules should be applied, and should you ever work on other projects, you're
less likely to introduce unwanted style changes from your local settings.

## Using ESLint and Prettier together

## Assignment

### [How linting and ESLint improve code quality](https://hackernoon.com/how-linting-and-eslint-improve-code-quality-fa83d2469efe)

#### What is linting?

Generally speaking, linting is a tool for static code analysis, and therefore
part of white-box testing. The main purpose of white-box testing is to analyse
the internal structure of components or a system.

#### Why should you lint your code?

This increases the readability of our code towards the effort of having our
codebase look like it was written by "one person".

Further linting rules help to improve code reviews, as linting already acts as
a pre-code review, checking against all the basic issues such as syntax errors,
incorrect naming, the tab vs spaces debate, etc. It increases the value of
having code reviews, as people are then more willing to check the
implementation rather than complain about syntax errors.

#### ESLint in a nutshell

#### Abstract Syntax Tree

A specifc point of difference with the AST is that each node describes a
specific grammar definition in your code.

#### What kind of information is in the AST?

#### Traversing the AST

#### Plugins

#### Wrap-Up
