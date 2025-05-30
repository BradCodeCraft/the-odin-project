# Variables and Operators

## How to run JavaScript code

The simplest way to get started is to create an HTML file with the JavaScript code
inside of it.

`console.log()` is the command to print something to the developer console in your
browser.

Another way to include JavaScript in a webpage is through an external script.

## Variables

You can think of variables as "storage containers" for data in your code.

You can declare variables using the `let` keyword.

`const` for variables that we _don't_ want to re-assign.

## Numbers

## Assignment

### [Variables](https://javascript.info/variables#variable-naming)

#### Variable naming

There are two limitations on variable names in JS:

1. The name must contain only letters, digits, or the symbol `$` and `_`.
2. The first character must not be a digit.

When the name contains multiple words, **camelCase** is commonly used.

> Case matters
> Non-Latin letters are allowed, but not recommended
> Reserved names
> An assignment without `use strict`

#### Constants

##### Uppercase constants

There is a widespread practice to use constants as aliases for difficult-to-remember
values that are known before execution.

Some constants are known before execution and some are _calculated_ in run-time,
but do not change after their initial assignment.

Capital-named constants are only used as aliases for "hard-coded" values.

#### Name things right

A variable name should have a clean, obvious meaning, describing the data that it
stores.

### [Operators](https://javascript.info/operators)

#### Terms: "unary", "binary", "operand"

An _operand_ is what operators are applied to. Sometimes, people call these "arguments"
instead of "operands".

An operator is _unary_ if it has a single operand.

An operator is _binary_ if it has two operands.

#### Maths

The following math operations are supported:

- Addition `+`
- Subtraction `-`
- Multiplication `*`
- Division `/`
- Remainder `%`
- Exponentiation `**`

#### String concatenation with binary +

The binary `+` is the only operator that supports strings. Other arithmetic operators
work only with numbers and always convert their operands to numbers.

#### Numeric conversion, unary +

If the operand is not an number, the unary plus converts it into a number.

#### Operator precedence

Unary operators are higher than corresponding binary ones.

#### Assignment

##### Assignment = returns a value

##### Chaining assignments

Once again, for the purposes of readability it's better to split such code into
few lines.

#### Modify-in-place

Short "modify-and-assign" operators exist for all arithmetical and bitwise operators.

#### Increment/decrement

The operators `++` and `--` can be placed either before or after a variable.

- When the operator goes after the variable, it is in "postfix form".
- The "prefix form" is when the operator goes before the variable.

#### Bitwise operators

Bitwise operators treat arguments as 32-bit integer numbers and work on the level
of their binary representation.

The list of operators:

- AND (`&`)
- OR (`|`)
- XOR (`^`)
- NOT (`~`)
- LEFT SHIFT (`<<`)
- RIGHT SHIFT (`>>`)
- ZERO-FILL RIGHT SHIFT (`>>>`)

#### Comma

The comma operator allows us to evaluate several expressions, dividing them with
a comma `,`. Each of them is evaluated but only the result of the last one is returned.
