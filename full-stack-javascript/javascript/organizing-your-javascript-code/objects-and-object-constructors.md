# Objects and Object Constructors

## Introduction

There are multiple ways to define objects but in most cases, it is best to use
the **object literal** syntax as follows:

```javascript
const user = {
    name: "test user",
    age: 40,
    "is old": function() { ... }
};
```

There are also 2 ways to get information out of an object: dot notation and
bracket notation.

```javascript
// dot notation
user.name;
// bracket notation
user["is old"];
```

Dot notation is cleaner and is usually preferred, but there are plenty of
circumstances when it is not possible to use it.

## Lesson overview

## Objects as a design pattern

One of the simplest ways you can begin to organize your code is by grouping
things into objects.

## Object constructors

When you have a specific type of objec that you need to duplicate, a better way
to create them is using an object constructor, which is just a regular function
that by convention is named with an uppercase initial letter.

```javascript
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}
```

and use can use it by calling the function with the keyword `new`.

```javascript
const player = new Player("steve", "X");
```

Just like with objects created using the Object Literal method, you can add
functions to the object:

```javascript
function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(this.name);
    };
}
```

> **Safeguarding constructors**
> Note that, as constructors are jsut regular functions, they could be called
> without using `new` by mistake, which would case hard-to-track errors. To
> prevent that, you can use the `new.target` meta-property like this:
>
> ```javascript
>   function Player(name, marker) {
>       if (!new.target) {
>           throw Error("You must use the `new` operator");
>       }
>   }
> ```

### Exercise

Note: It is almost *always* best to `return` things rather than putting
`console.log()` directly into the function.

## The prototype

All objects in JavaScript have a `prototype`. The `prototype` is another object
that the original object *inherits* from, which is to say, the original object
has access to all of its `prototype`'s methods and properties.

1. All objects in JS have a prototype
1. The prototype is another object
1. ...that the original object inherits from, and has access to all of its
   prototype's methods and properties

### Accessing an object's prototype

### Object.getPrototypeOf() vs. `.__proto__` vs. `[[Prototype]]`

`Object.getPrototypeOf()` is used to access an object's `prototype`, the same
thing can also be done using the `.__proto__` property of the object. However,
this is a non-standard way of doing so, and **deprecated**. Hence, it is not
recommended to access an object's `prototype` by using this property.

In some places, like legacy code, you might also come across `[[Prototype]]`,
which is just another way of talking about the `.__proto__` property of an
object.

### Prototypal inheritance

The purpose of defining properties and functions on the `prototype` can be
narrowed down to two reasons:

1. We can define properties and functions common among all objects on the
   `prototype` to save memory.
1. The second reason is the name of this section, **Prototypal Inheritance**.

We make us of another function called `.hasOwnProperty` to check if a function
is defined on `Object.prototype`.

Essentially, this is how JavaScript makes use of `prototype` - by having the
objects contain a value - to point to `prototype`s and inheriting from those
prototypes, and thus forming a chain.

However, this chain does not go on forever, and if you have already tried
logging the value of `Object.getPrototypeOf(Object.prototype)`, you would find
that it is `null`, which indicates the end of the chain.

Note:

1. Every `prototype` object inherits from `Object.prototype` by default
1. An object's `Object.getPrototypeOf()` value can only be *one* unique
   `prototype` object.

### Recommended method for prototypal inheritance

Just as we use `Object.getPrototypeOf()` to 'get' the `prototype` of an object,
we can use `Ojbect.setPrototypeOf()` to 'set' it.

```javascript
function Person(name) {
    this.name = name;
}

Person.prototype.sayName = function() {
    return this.name;
}

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

Player.prototype.getMarker = function() {
    return this.marker;
}

Object.getPrototypeOf(Player.prototype); // returns Object.prototype

Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype); // returns Person.prototype
```

`Object.setPropertyOf()` takes two arguments - the first is the one which
inherits and the second argument is the one which you want the first argument
to inherit from.

> Note:
> Though it seems to be an easy way to set up Prototypal Inheritance using
> `Object.setPrototypeOf()`, the prototype chain has to be set up using this
> function *before* creating any objects. Using `setPrototypeOf()` after
> objects have already been created can result in performance issues.

## Assignment

### [Understanding Prototypes and Inheritance in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-prototypes-and-inheritance-in-javascript)

#### JavaScript Prototypes

Every object in JS has an internal property called `[[Prototype]]`.

Another way to construct an object: `let x = new Object();`.

Another way to find the `[[Prototype]]` is through the `__proto__` property.

> `.__proto__` is a legacy feature and should not be used in production code.

#### Prototype Inheritance

When you attempt to access a property or method of an object, JS will first
search on the object itself, and if it is not found, it will search the
object's `[[Prototype]]`. If after consulting both the object and its
`[[Prototype]]` still no match is found, JS will check the prototype of the
linked object, and continue searching until the end of the prototype chain is
reached.

At the end of the prototype chain is `Object.prototype`.

We can use the `instanceof` operator to test whether the `prototype` property
of a constructor appears anywhere within an object's prototype chain.

#### Constructor Functions

**Constructor functions** are functions that are used to construct new objects.

It is a common practice in JS to defined methods on the prototype for increased
efficiency and code readability.

We can use the `call()` method to copy over properties from one constructor
into another constructor.

However, prototype properties and methods are not automatically linked when you
use `call()` to chain constructors. We will use `Object.setPropertyOf()` to
link the properties, making sure to put it before any additional methods.

### [Prototypal inheritance](https://javascript.info/prototype-inheritance)

#### `[[Prototype]]`

In JS, objects have a special hidden property `[[Prototype]]` that is either
`null` or references another object. That object is called "a prototype".

When we read a property from `object`, and it's missing, JS automatically takes
it from the prototype.

There are only two limitations:

1. The references can't go in circles. JS will throw an error if we try to
   assign `__proto__` in a circle.
1. The value of `__proto__` can be either an object or `null`. Other types are
   ignored.

> `__proto__` is a historical getter/setter for `[[Prototype]]`

#### Writing doesn't use prototype

The prototype is only used for reading properties.

Writedelete operations work directly with the object.

Accessor properties are an exception, as assignment is handled by a setter
function.

#### The value of "this"

**No matter where the method is found: in an object or its prototype. In a
method call, `this` is always the object before the dot**.

#### for...in loop

`Object.keys()` to retrieve keys.

`obj.hasOwnProperty(key)` to check if an `obj` has a `key`.

### [Demystifying the JS this keyword](https://www.javascripttutorial.net/javascript-this/)

In JS, you can use the `this` keyword in the **global and function contexts**.
Moreover, the bahvior of the `this` keyword changes between strict and
non-strict modes.

#### What is this keyword

In general, the `this` references the object of which the function is a
property. In other words, the `this` references the object that is currently
calling the function.

#### Global context

In the global context, the `this` references the **global object**, which is
the `window` object on the web browser or `global` object on Node.js

#### Function context

In JS, you can call a function in the following ways:

- Function invocation
- Method invocation
- Constructor invocation
- Indirect invocation

##### Simple function invocation

In the non-strict mode, the `this` references the global object when the
function is called.

In the strict mode, JS sets the `this` inside a function to `undefined`.

To enable the strict mode, you use the directive `"use strict"` at the
beginning of the JS file. If you want to apply the strict mode to a specific
function only, you place it at the top of the function body.

##### Method invocation

When you call a method of an object, JS sets `this` to the object that owns the
method.

To bind to an object, use the `bind()` method of the `Function.prototype`
object.

##### Constructor invocation

When you use the `new` keyword to create an instance of a function object, you
use the function as a constructor.

This pattern works great with only one potential problem: calling the
constructor without using the `new` keyword will throw a `TypeError`.

ES6 introduced a meta-property named `new.target` that allows you to detect
whether a function is invoked as a simple invocation or as a constructor.

##### Indiret invocation

In JS, `functions are first-class citizens`. In other words, functions are
objects, which are instances of the **Function type**.

The `Function` type has two methods: `call()` and `apply()`. These methods
allow you to set the `this` value when calling a function.

`function.call(object, argument)`

`function.apply(object, [arguments])`

##### Arrow functions

In arrow functions, JS sets the `this` lexically.

It means the arrow function does not create its own **execution context** but
inherits the `this` from the outer function where the arrow function is
defined.

### [`[[Protootype]]` vs `__proto__` vs `.prototype` in JS](https://medium.com/@eamonocallaghan/prototype-vs-proto-vs-prototype-in-javascript-6758cadcbae8)

#### `[[Prototype]]`

This is a hidden private property that all objects have in JS, it holds a
reference to the object's **prototype**.

An object's prototype is the object that an object inherits or descends from.

#### `__proto__`

This is a property of `Object.prototype` that exposes the hidden
`[[Prototype]]` property of an object and allows you to access or modify it.
You should not use it as it is deprecated, although you may come across it in
older code.

The modern way of accessing an object's prototype is by using
`Object.getPrototypeOf(obj)`. You can also modify an object's prototype using
`Object.setPrototypeOf(obj, prototype)`.

#### `.prototype`

This is a special property that almost all functions have that is only used
when a function is invoked as a constructor function. Arrow functions and
methods defined using the concise syntax do not have `.prototype` properties
and cannot be used as constructors.

The `.prototype` property contains a reference to an object and when a
constructor is used to instantiate or create a new object, `.prototype` is set
as the prototype of the new object.

#### Accessing a prototype's properties
