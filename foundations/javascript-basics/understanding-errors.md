# Understanding Errors

## The anatomy of an error

An error is a type of object built into the JS language, consisting of a name/type
and a message. Errors containing crucial information that can assist you in locating
the code responsible for the error, determining why you have this error, and resolving
the error.

`ReferenceError`: a variable that is not declared and/or initialized within the
current scope.

## Common types of errors

### Syntax error

A **syntax error** occurs when the code you are trying to run is not written correctly.

### Reference error

### Type error

A `TypeError` may be thrown when:

- An operand or argument passed to a function is incompatible with the type expected
  by that operator or function;
- Or when attempting to modify a value that cannot be changed;
- Or when attempting to use a value in an inappropriate way.

## Tips for resolving errors

1. Start by understanding that error messages are your friends - not your enemies.
2. Google the error.
3. Use the debugger.
4. Make use of the console!

## Errors vs warnings

**Warning** are messages that provide you insight on potential problems that may
not necessarily crash your program at runtime, or at all!
