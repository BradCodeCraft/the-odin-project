# Asynchronous Code

## Introduction

JS includes support for asynchronous functions, or to put it another way,
functions that can happen in the background while the rest of your code
executes.

## Callbacks

A **callback** function is a function passed into another function as an
argument, which is then invoked inside the outer function to complete some kind
of routine or action.

Unfortunately, using callbacks can get out of hand, especially when you need to
chain several of them together in a specific order.

### [Callback Functions](https://www.youtube.com/watch?v=QRq2zMHlBz4)

Asynchronous

- not immediately

Synchrnous

- immediately

**Callback hell** - callbacks after callbacks, etc.

## Promises

A **promise** is an object that might produce a value at some point in the
future.

## Assignment

### [JavaScript Promise API](https://davidwalsh.name/promises)

Async is generally better for performance and flexibility.

#### Basic Promise Usage

The `new Promise()` constructor should only be used for legacy async tasks. A
new Promise is created with the `new` keyword and the promise provides
`resolve` and `reject` functions to the provided callback.

```javascript
var p = new Promise(function(resolve, reject) {
    if (/* good condition */) {
        resolve("Success!");
    } else {
        reject("Failure!");
    }
})

p.then(function(result) {
    /* do something */
}).catch(function() {
    /* error */
}).finally(function() {
    /* executes regardless */
})
```

It's up to the developer to manually call `resolve` or `reject` within the body
of the callback based on the result of their given task.

Sometimes you don't _need_ to complete an async tasks within the promise - if
it's _possible_ that an async action will be taken, however, returning a
promise will be best so that you can always count on a promise coming out of a
given function. In that case, you can simply call `Promise.resolve()` or
`Promise.reject()` without using the `new` keyword.

#### then

All promise instances get a `then` method which allows you to react to the
promise.

If a promise has already resolved but `then` is called again, the callback
immediately fires. If the promise is rejected and you call `then` after
rejection, the callback is never called.

#### catch

The `catch` callback is executed when the promise is rejected.

#### finally

The newly introduced `finally` callback is called regardless of success or
failure.

#### `Promise.all`

There are times when you trigger multiple async interactions but only want to
respond when all of them are completed - that's where `Promise.all` comes in.
The `Promise.all` method takes an array of promises and fires one callback once
they are all resolved.

Dealing with rejection is hard. If any promise is rejected the `catch` fires
for the first rejection.

`Promise.all` will be super useful as more APIs move toward promises.

#### `Promise.race`

`Promise.race` triggers as soon as any promise in the array is resolved or
rejected.

#### Get Used to Promises

### [JavaScript Promises in 10 Minutes](https://www.youtube.com/watch?v=DHvZLI7Db8E)

`resolve` for successes and `reject` for failures

### [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

JS has a **heap** and a **stack** at runtime.

V8, WebAPIs, event loop, callback queues.

#### Call stack

The call stack: one thread == one call stack == one thing at a time

A data structure represents where in the code we are.

**Blowing the stack** - improper recursion

#### blocking

When requesting resource from a URL, it blocks the current browser. As a
result, async requests help solve this issue.

#### Concurrency & the Event Loop

Event loop can only operates **once the stack is clear**.

Timeout is a minimum time to execute, **not guaranteed**.

- setTimeout is an async function

### [JavaScript Visualized - Event Loop, Web APIs, (Micro)task Queue](https://www.youtube.com/watch?v=eiC58R16hb8)

Event Loop prioritizes Microtask Queue.

A microtask can schedule another microtask.

Promise => call stack, but Promise.then => microtask queue

### [JavaScript Visualized - Promise Execution](https://www.youtube.com/watch?v=Xs1EMmBLpn4)

Promise Object: [[PromiseState]], [[PromiseResult]],
[[PromiseFulfillReactions]], [[PromiseRejectReactions]], [[PromiseIsHandled]]

### [Promise](https://javascript.info/promise-basics)

1. A "producing code" that does something and takes time.
1. A "consuming code" that wants the result of the "producing code" once it's
   ready.
1. A _promise_ is a special JS object that links the "producing code" and the
   "consuming code" together.

> There can be only a single result or an error
> Reject with `Error` objects
> Immediately calling `resolve/reject`
> The `state` and `result` are internal

#### Consumers: then, catch

The first argument of `.then` is afunction that runs when the promise is
resolved and receives the result. The second argument of `.then` is a function
that runs when the promise is rejected and receives the error.

If we're interested only in errors, then we can use `null` as the first
argument: `.then(null, errorHandlingFunc)`. Or we can use
`.catch(errorHandlingFunc)`.

#### Cleanup: finally

The call `.finally(f)` is similar to `.then(f, f)` in the sense that `f` runs
always, when the promise is settled: be it resolve or reject.

The idea of `finally` is to set up a handler for performing
**cleanup/finalizing** after the previous operations are complete.

`finally(f)` isn't exactly an alias of `then(f, f)`:

1. A `finally` handler has no arguments.
1. A `finally` handler "passes through" the result or error to the next
   suitable handler
1. A `finally` handler also shouldn't return anything

> We can attach handlers to settled promises
