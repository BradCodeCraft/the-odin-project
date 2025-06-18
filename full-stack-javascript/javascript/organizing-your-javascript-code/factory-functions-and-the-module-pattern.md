# Factory Functions and the Module Pattern

## Introduction

## Scoopfuls of scopes

The word "scoping" essentially asks, "Where is a certain variable available to
me?" - it indicates the current context of a variable. When a variable is not
declared within **any** functions, existing outside any `{ curly braces }`,
they are said to be in the **global scope**, meaning that they are available
everywhere. If they are within a function or `{ curly braces }`, they are known
to be **locally scoped**.

While `var` variables were function scoped, these allow you to define variables
that are **block scoped** - basically, scoping the variable to only be avialble
within the closest set of `{ curly braces }` in which it was defined. These
braces can be those of a `for` loop, `if-else` condition, or any other similar
construct, and are called, a block.

## Closures aren't scary

Functions in JS form closures. A closure refers to the combination of a
function and the **surrounding state** in which the function was declared. The
surround state, also called its **lexical environment**, consists of any local
variables that were in scope at the time the closure was made.

This is a **crucial** behavior of functions - allowing us to associate data
with functions and manipulate the data anywhere outside of the enclosing
function.

### [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures#closure)

#### Lexical Scoping

Lexical closure describes how a parser resolves variable names when functions
are nested.

##### Scoping with let and const

Variables declared with `var` are either function-scoped or global-scoped,
depending on whether they are declared within a function or outside a function.

#### Closure

A *closure* is the combination of a function and the lexical environment within
which that function was declared. This environment consists of any variables
that were in-scope at the time the closure was created.

#### Practical Closure

Closures are useful because they let you associate data (the lexical
environment) with a function that operates on that data. This has obvious
parallels to object-oriented programming, where objects allow you to associate
data (the object's properties) with one or more methods.

Consequently, you can use a closure anywhere that you might normally use an
object with only a single method.

Situations where you might want to do this are particularly common on the web.

## So, what's wrong with constructors?

They don't provide automatic safeguards that prevent from using them wrong.

One of the key arguments is how they *look* like regular JS functions, even
though they do not *behave* like regular functions.

Yet another issue stems from misusing `instanceof`. In JS, it checks the
presence of a constructor's prototype in an object's *entire* prototype chain -
which does nothing to confirm if an object was made with that constructor since
the constructor's prototype can even be reassigned after the creation of an
object.

Because of that, constructors have become unpopular in favor of a pattern that
is similar but addresses a ton of these problems by not relying on those
troublesome features: Factory Functions.

## Factory functions

These fancy-sound functions work very similar to how constructors did, but with
one key difference - they levy the power of closures. Instead of using the
`new` keyword to create an object, factory functions set up and return the new
object when you call the function. They do not use the prototype, which incurs
a performance penalty - but as a general rule, this penalty isn't significant
unless you're creating thousands of objects.

```javascript
function createUser(name) {
    const discordName = `@${name}`;
    return { name, discordName };
}
```

> **The object shorthand notation**
> If we have a variable with the same name as that of the property to which we
> are assigning it, then we can write it once!
> An added advantage to this is that it's now it's possible to log values
> neatly.
> **Destructuring**
> When you have an object, you can extract a property of an object into a
> variable of the same name, or any named variable for an array.

## Private variables and functions

```javascript
function createUser(name) {
    const discordName = `@${name}`;

    let reputation = 0;
    function getReputation() { return reputation; }
    function giveReputation() { reputation++; }
    return { name, discordName, getReputation, giveReputation };
}
```

Concerning factory functions, a private variable or function uses closures to
create smaller, dedicated variables and functions within a factory function
itself - things that we do not *need* to return in the object itself.

## Prototypal inheritance with factories

Hypothetical scenario: we need to extend the `User` factory into a `Player`
factory that needs to control some more metrics - there are some ways to do
that:

```javascript
function createPlayer(name, level) {
    const { getReputation, giveReputation } = createUser(name);

    function increaseLevel() { level++; }
    return { name, getReputation, giveReputation, increaseLevel };
}
```

In case you want to extend it, you can also use the `Obkect.assign` method to
add on the properties you want.

```javascript
function createPlayer(name, level) {
    const user = createUser(name);

    function increaseLevel() { level++; }
    return Object.assign({}, user, { increaseLevel });
}
```

## The module pattern: IIFEs

Oftentimes, you do not need a factory to produce multiple objects - instead,
you are using it to wrap sections of code together, hiding the variables and
functions that you do not need elsewhere as private. This is easily achievable
by wrapping your factory function in parentheses and immediately calling it.
This immediate function call is commonly referred to as an Immediately Invoked
Function Expression or IIFE.

```javascript
const calculator = (function() {
    function add(a, b) { return a + b;}
    function sub(a, b) { return a - b;}
    function mul(a, b) { return a * b;}
    function div(a, b) { return a / b;}
}) ();
```

In this way, we can write code, wrapping away things that we do not need as
private variables and functions inside our factory functions, and, while they
are tucked inside of our module, we can use the returned variables and
functions outside the factory.

### Encapsulating with the module pattern

**Encapsulation** - bundling data, code, or something into a single unit, with
selective access to the things inside that unti itself. While it sounds
general, this is what happens when we wrap, or encapsulate our code into
modules - we don't expose everything to the body of our program itself. This
encapsulation leads to an effect called **namespacing**, a technique that is
used to avoid naming collisions in our programs.

## Assignment

### [Scope](https://wesbos.com/javascript/03-the-tricky-bits/scope#global-variables)

#### Global Variables

`var` variables are attached to the `window` object, and they are
globally-scoped, and `const` and `let` variables are not attached to the
window.

Anything that is in the global scope is attached to the window object with the
exception of `const` and `let` variables.

#### Function Scoping

**Shadow variables** have the same name as a variable in a different scope.

#### Block Scoping

#### Lexical and Static Scoping

Variable look-up or scope look-up happens, is where the functions are defined,
not where they are run.

**Best Practices**:

1. Try not to create global variables
1. Functions are scoped the exact same as variables

### [Closures](https://wesbos.com/javascript/03-the-tricky-bits/closures)

A **closure** is the ability to access a parent level scope from a child scope,
even after the parent function has been terminated.

A closure comes into play because you can access the function even though the
outer function is done.

JS is able to create functions inside of functions, and it can still reach
outside to the parent scope, and even though the outer function is done
running, it will still maintain that variable in memory so that we can then
access it at a later time.

#### Examples of Closures

```javascript
function createGreeting(greeting = "") {
    const myGreet = greeting.toUpperCase();

    return function(name) {
        return `${myGreet} ${name}`;
    };
}
```

#### Private Variables

### [Module pattern in JS](https://dev.to/tomekbuszewski/module-pattern-in-javascript-56jm)

A module has only one instance and exposes its members, but it doesn't have any
kind of internal state.

#### Defining a module

```javascript
const someModule = (function() {})();
```

Everything within the body of said function is bound to that module and can be
seen by each other. Modules emulates "public" and "private" methods by creating
mentioned earlier scope and exposing only those things that are declared.

> Private methods or functions are members of given entity than can be seen
> only within said entity. Public ones can be accessed from the outside of
> given entity.

**Accessing a module is actually accessing whatever it returns**.

#### Exposing a module

Modules can house not only functions, burt arrays, objects and primitives as
well.

Everything publicly exposed can be changed from the outside, which is one of
the biggest module pattern drawbacks.

#### Declaring module dependencies

Module may have dependencies to work with global objects.

Check whether `document` exists

We can declare our module's dependencies and inject them as we go.

```javascript
const Formatter = (function(doc) {
    function writeToDom(selector, message) {
        if (!!doc && "querySelector" in doc) {
            doc.querySelector(selector).innerHTML = message;
        }
    }

    return { writeToDom };
})(document);
```

`doc` and `document` are the arguments the moduel will be invoked with.

### Module JS

#### [LearnCode.academy](https://www.youtube.com/playlist?list=PLoYCgNOIyGABs-wDaaxChu82q_xQgUb4f)

Ground rules:

- self-container module

  - everything to do with my module is in my module
  - no global variables
  - if a module manages more than one thing, it should be split up

- separation of concerns

- DRY: don't repeat yourself

- efficient DOM usage

- no memory leaks

  - all events can be unbound
