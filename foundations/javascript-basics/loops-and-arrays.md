# Loops and Arrays

## Loops

### [Looping code](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops)

#### Why are loops useful?

Loops are all about doing the same thing over and over again.

##### With and without a loop

#### Looping through a collection

One type of collection is `Array`, but there are other collections in JS as well,
including `Set` and `Map`.

##### The for...of loop

##### map() and filter()

You can use `map()` to do something to each item in a collection and create a new
collection containing the changed items.

You can use `filter()` to test each item in a collection and create a new collection
containing only items that match.

The function we pass in `filter()` returns a **boolean**.

#### The standard for loop

##### Looping through collections with a for loop

It's usually best to use `for...of` if you can.

Sometimes you still need to use a `for` loop to iterate through an array.

#### Exiting loops with break

If you want to exit a loop before all the iterations have been completed, you can
use the **break** statement.

#### Skipping iterations with continue

The `continue` statements skips to the next iteration of the loop.

#### while and do...while

The `while` loop works in a very similar way to the `for` loop, except that the initializer
variable is set before the loop, and the final-expression is included inside the
loop after the code to run.

The main difference between a `do...while` loop and a `while` loop is that _the code
inside a `do...while` loop always executes at least once_

#### Which loop type should you use

`for...of`: iterate through an array/object and don't need access to the index position

For other uses, `for`, `while`, and `do...while` loops are largely interchangeable.

## Arrays

### [Arrays](https://javascript.info/array)

#### Declaration

> The "trailing comma" style makes it easier to insert/remove items, because all
> lines become alike.

#### Get last elements with "at"

#### Methods pop/push, shift/unshift

A **queue** is one of the most common uses of an array. It is an ordered collection
of elements which supports two operations.

- `push` adds an element to the end.
- `shift` gets an element from the beginning, advancing the queue, so that the 2nd
  element becomes the 1st.

A **stack** supports two operations:

- `push` adds an element to the end.
- `pop` takes an element from the end.

`unshift` adds an element to the beginning of the array.

#### Internals

The engine tries to store arrays' elements in the contiguous memory area, one after
another, and there are other optimizations as well, to make arrays work really fast.

Ways to misuse an array:

- Add a non-numeric property
- Make holes
- Fill the array in the reverse order

#### Performance

`push/pop` run fast, while `shift/unshift` are slow. `shift/unshift` have to move
the data and update the `length` property.

#### Loops

#### A word about "length"

The `length` property automatically updates when we modify the array. It is the
greatest numeric index plus one.

The `length` property is writable. If we increase it manually, nothing interesting
happens. But if we decrease it, the array is truncated.

#### new Array()

If `new Array` is called with a single argument which is a number, then it creates
an array **without items**, but **with the given length**.

#### Multidimensional arrays

#### toString

#### Don't compare arrays with ==

Don't use the `==` operator, instead, compare them item-by-item in a loop or using
iteration methods.

## Some examples of array magic

### The map method

### The filter method

### The reduce method

Two key differences with `reduce` method:

- The callback function takes two arguments instead of one. The first argument is
  the `accumulator`, which is the current value of the result _at that point in
  the loop_. The second argument for the callback is the `current` value, which
  is the item currently being iterated on.
- `reduce` itself also takes in an `initialValue` as an optional second argument
  (after the callback), which helps when we don't want our initial value to be
  the first element in the array.

### Test-driven development

TDD refers to the practice of writing automated tests that describe how your code
should work before you actually write the code.

In many ways, TDD is much more productive than writing code without test.
