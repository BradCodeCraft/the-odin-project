# Classes

## Introduction

JS *did* introduce a syntax for object creation that uses the `class` keyword.
It is basically a new syntax that does the *exact* same thing as the object
constructors and prototypes we learned about in the constructor lesson.

Class syntax looks like classes from languages like Java, but in reality, it is
only syntactic sugar over constructors and prototypes.

## Assignment

### [Property getters and setters](https://javascript.info/property-accessors)

There are two kinds of object properties: *data properties* and *accessor
property*.

#### Getters and Setters

Accessor properties are represented by "getter" and "setter" methods.

```javascript
let obj = {
    get propName() {...}
    set propName(value) {...}
}
```

#### Accessor descriptors

For accessor properties, there is no `value` or `writable`, but instead there
are `get` and `set` functions

That is, an accessor descriptor may have:

- `get`
- `set`
- `enumarable`
- `configurable`

> A property can be either an accessor or a data property, **not both**.

#### Smarter getters/setters

Getterssetters can be used as wrappers over "real" property values to gain more
control over operations with them.

There is a widely known convention that properties starting with an underscore
`"_"` are internal and should not be touched from outside the object.

#### Using for compatibility

One of the great uses of accessors is that they allow to take control over a
"regular" data property at any moment by replacing it with a getter and a
setter and tweak its behavior.

### [Class basic syntax](https://javascript.info/class)

#### The "class" syntax

The basic syntax:

```javascript
class MyClass {
    constructor() {...}
    method() {...}
    ...
}
```

> **No comma between class methods**

#### What is a class?

In JS, a class is a kind of function.

#### Not just a syntactic sugar

**Syntactic sugar** - syntax that is designed to make things easier to read,
but doesn't introduce anything new.

There are important differences:

1. First, a function created by `class` is labelled by a special internal
   property `[[IsClassConstructor]]: true`. So it's not entirely same as
   creating it manually.
1. Class methods are non-enumerable
1. Classes always `use strict`.

#### Class Expression

Just like functions, classes can be defined inside another expression, passed
around, returned, assigned, etc.

#### Getters/setters

Just like literal objectsm classes may include getters/setters, computed
properties, etc.

#### Computed names [...]

```javascript
class User {
    ["say" + "Hi"]() {
        alert("Hello");
    }
}
```

#### Class fields

They are a syntax that allows to add any properties.

The important difference of class fields is that they are set on individual
objects, not `User.prototype`.

##### Making bound methods with class fields

The problem is called "losing `this`".

Two approaches to fixing it:

1. Pass a wrapper-function
1. Bind the method to object

### [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

#### Description

##### Defining classes

A class can be defined in two ways: a **class expression** or a **class
declaration**.

Liek function expressions, class expressions may be anonymous, or have a name
that's different from the variable that it's assigned to.

##### Class body

A class element ca nbe characterized by three aspects:

- Kind: getter, setter, method, or field
- Location: static or instance
- Visibility: public or private

There are two specual class element syntaxes: **`constructor`** and **static
initialization blocks**, with their own references.

##### Constructor

##### Static initialization blocks

This allows flexible initialization of **static properties**, including the
evaluation of statements during initialization, while granting access to the
private scope.

##### Methods

This can be plain functions, async functions, generator functions, or async
generator functions.

##### Static methods and fields

The `static` keyword defines a static method or field for a class. Static
properties are defined on the class itself instead of each instance. Static
methods are often used to create utility functions for an application, whereas
static fields are useful for caches, fixed-configuration, or any other data
that doesn't need to be replicated across instances.

##### Field declarations

Class fields are similar to object properties, not variables, so we don't use
keywords such as `const` to declare them. In JS, **private properties** use a
special identifier syntax, so modifier jeywords like `public` and `private`
should not be used either.

##### Private properties

```javascript
class Rectangle {
    #height = 0;
    #width = 0;
    
    constructor(height, width) {
        this.#height = height;
        this.#width = width;
    }
}
```

##### Inheritance

The `extends` keyword is used in *class declarations* or *class expressions* to
create a class as a child of another constructor.

If there is a constructor present in the subclass, it needs to first call
`super()` before using `this`. The `super` keyword can also be used to call
corresponding methods of super class.

##### Evaluation order

When a `class` declaration or `class` expression is evaluated, its various
components are evaluated in the following order:

1. The `extends` clause

1. The `constructor` method

1. The class elements' property keys are evaluated in the order of declaration.

1. Methods and accessors are installed in the order of declaration

1. The class is now initialized with the prototype specified by `extends` and
   implementation specified by `constructor`.

1. The class elements' values are evaluated in the order of declaration:

   - For each instance field, its initializer expression is saved.
   - For each static field, its initializer is evaluated with `this` set to the
     class itself, and the property is created on the class.
   - Static initialization blocks are evaluated with `this` set to the class
     itself.

1. The class in now fully initialized and can be used as a constructor function.

#### Examples

##### Binding this with instance and static methods
