# Clean Code

## What is clean code?

Single characters can be used as variables names in the context of a loop or
a callback function, but avoid them elsewhere.

### About camelCase

## Naming functions and variables

### A good name is descriptive

### Use consistent vocabulary

If there is no difference then ideally, you'd use the same name. Consistency allows
for predictability.

Variables should preferably begin with a noun or an adjective (that is, a noun phrase),
as they typically represent "things"

## Use searchable and immediately understandable names

Variable is declared with a descriptive name, and you don't need to perform any
calculations when reading this code.

## Indentation and line length

Choose a way to indent and stick to it.

### Line length

About all style guides suggest limiting the length of each line of code.

Generally, your code will be easier to read if you manually break lines that are
longer than about 80 characters.

## Semicolons

Semicolons are _mostly_ optional in JS because the interpreter will automatically
insert them if they are omitted.

## About comment

### Don't comment when you should be using git

### Tell why, not how

Ideally, comments do not provide pseudocode that duplicates your code. Good comments
explain the _reasons_ behind a piece of code.

**This doesn't mean good code should lack comments**.

## In conclusion

## Assignment

### [10 Principles for Keeping Your Programming Code Clean](https://onextrapixel.com/10-principles-for-keeping-your-programming-code-clean/)

#### Revice your logic before coding

Before blindly typing into the debugger of choice, some **flow diagrams or written
pseudocode** might come in handy to previously verify the logic behind those lines
of code.

#### Clearly expose the structure of the page

#### Use the correct indentation

#### Write explanatory comments

#### Avoid abusing comments

What comments are NOT made for:

- Writing explanatoryy notes to self
- Blaming stuff on other people
- Writing vague statements
- Erasing chunks of code

#### Avoid extremely large functions

Break up large functions into smaller ones.

#### Use naming standards for functions and variables

#### Trat changes with caution

Whenever there's a ned for adding, removing, or changing something, there should
also be an awareness of not meddling with previous efforts for maintaining the
code clean and ordered.

This mainly involves:

- Keeping the correct indentations
- Commenting on the modification made or broadening the existing comments
- Respecting standards in use

#### Avoid indiscriminate mixing of coding languages

#### Summarize your imports
