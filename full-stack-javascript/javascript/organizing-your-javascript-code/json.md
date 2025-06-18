# JSON

## Introduction

JSON (JS Object Notation) is a standardized format for structuring data. It is
heavily based on teh syntax for JS objects.

## Assignment

### [Working with JSON](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON)

#### No, really, what is JSON?

JSON is a text-based data format following JS object syntax. It represents
structured data as a string, which is useful when you want to transmit data
across a network.

##### JSON structure

The key takeaway is that there's really nothing special about working with
JSON; after you've aprsed it into a JS object, you work with it just like you
would with an object declared using the same object literal syntax.

##### Arrays as JSON

You have to access array items by starting with an array index.

##### JSON syntax restrictions

- JSON can only contain *serializable* data types. This means:
  - For primitives, JSON can contain string literals, number literals, boolean,
    and null.
  - For non-primitives, JSON can contain object literals and array, but not
    functions or any other object types.
- String must be enclosed in double quotes, not single.
- Numbers must be written in decimal notation
- Each property of an object must be in the form of "key": value.
- Objects and arrays cannot contain *trailing commas*.
- Comments are not allowed in JSON.

### [JSON.parse()](https://www.w3schools.com/js/js_json_parse.asp)

When receiving data from a web server, the data is always a string. Parse the
data with `JSON.parse()`, and teh data becomes a JS object.

#### Arrays as JSON

When using the `JSON.parse()` on a JSON derived from an array, the method will
return a JS array, instead of a JS object.

#### Exceptions

##### Parsing Dates

Date objects are not allowed in JSON.

If you need to include a date, write it as a string.

Or, you can use the second parameter, of the `JSON.parse()` function, called
*reviver*, a function that checks each property, before return the value.

##### Parsing Functions

Functions are not allowed in JSON.

If you need to include a function, write it as a string.

> You should avoid using fucntions in JSON, the functions will lose their
> scope, and you would have to use `eval()` to convert them back into
> functions.

### [JSON.stringify()](https://www.w3schools.com/js/js_json_stringify.asp)

#### Stringify a JS Object

#### Stringify a JS Array

#### Storing Data

When storing data, the data has to be a certain format, and regardless of where
you choose to store it, *text* is always one of the legal formats.

#### All Data Types

JSON.stringify() can not only convert objects and arrays into JSON strings, it
can convert any JS value into a string.

#### Stringify a Date

In JSON, date objects are not allowed. The `JSON.stringify()` function will
convert any Date objects into strings.

#### Stringify a Function

In JSON, functions are not allowed as object values. The `JSON.stringify()`
function will remove any functions from a JS object, both the key and the
value.

This can be omitted if you convert your functions into strings before running
the `JSON.stringify()` function.
