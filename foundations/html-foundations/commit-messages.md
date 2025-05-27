# Commit Messages

## Are commit messages so important they deserve their own lesson?

## Bad vs Good commits

Effective commits consist of two separate parts: a subject and a body:

### Subject

A brief summary of the change you made to the project.

### Body

A concise yet clear description of what you did.

Separating the subject from the body with a new/blank line is a best practice. It
makes commit messages easier for other developers to read.

## How to commit with a subject and body in the message

`git commit -m <message>`

## When to commit

A good way to view a commit is like a "snapshot" of your code at the moment that
it was made.

When writing code, it's considered best practice to commit every time you have a
meaningful change in the code.

## [How to Write a Git Commit Message](https://cbea.ms/git-commit/)

### Introduction

A well-crafted Git commit message is the best way to communicate **_context_** about
a change to fellow developers (and indeed to their future selves). A diff will tell
you **_what_** changed, but only the commit message can properly tell you **_why_**.

A project's long-term success rests (among other things) on its maintainability,
and a maintainer has few tools more powerful than his project's log.

In order to create a useful revision history, teams should first agree on a commit
message convention that defines at least the following three things:

- **Style**
- **Content**
- **Metadata**

### The seven rules of a great Git commit message

1. Separate subject from body with a blank line
2. Limit the subject line to 50 characters
3. Capitalize the subject line
4. Do not end the subject line with a period
5. Use the imperative mood in the subject line
6. Wrap the body at 72 characters
7. Use the body to explain _what_ and _why_ vs _how_
