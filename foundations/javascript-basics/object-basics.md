# Object Basics

## Objects

Objects are a _very_ important part of the JS language, and while for the most part
you can accomplish simple and even intermediate tasks without worrying about, any
real project that you're going to attempt is going to feature Objects.

### [Objects](https://javascript.info/object)

Objects are used to store keyed collections of various data and more complex entities.
In JS, objects penetrate almost every aspect of the language.

A property is a "key:value" pair, where `key` is a string (also called a "property
name"), and `value` can be be anything

An empty object ("empty cabinet") can be created using one of two syntaxes:

```javascript
let user = new Object();
let user = {};
```

#### Literals and properties

Property values are accessible using the dot notation.

The value can be of any type.

To remove a property, we can use the `delete` operator:

```javascript
delete user.age;
```

We can also use multi-word property names, but they must be quoted.

#### Square brackets

Square brackets also provide a way to obtain the property name as the result of
any expression - as opposed to a literal string.

#### Computed properties

We can use square brackets in an object literal, when creating an object. That's
called _computed properties_.

Square brackets are much more powerful than dot notation. They allow any property
names and variables. But they are also more cumbersome to write.

When property names are known and simple, the dot is use. And if we need something
more complex, then we switch to square brackets.

#### Property value shorthand

```javascript
function makeUser(name, age) {
  return {
    name, // same as name: name
    age, // same as age: age
  };
}
```

#### Property names limitations

There are no limitations on property names. They can be any strings or symbols
(a special type for identifiers).

Other types are automatically converted to strings.

There is a minor gotcha with a special property named `__proto__`. We can't set
it to a non-object value.

#### Property existence test, "in" operator

There will be no error if the property doesn't exist.

Reading a non-defined property just returns `undefined`.

There's also a special operator `in` for testing.

> On the left side of `in` there must be a _property name_.

When an object property exists, but stores `undefined`, use `in`.

We mostly use `null` for "unknown" or "empty" values.

#### The "for..in" loop

```javascript
for (key in object) {
}
```

#### Ordered like an object

Properties are "ordered in a special fashion": integer properties are sorted,
others appear in creation order.

Adding a plus `+` sign before an integer property make it **non-integer**.

## Differences between objects and primitives

The primitives can contain only a single thing. Objects data types are used to store
a collection of data and more complex entities.

When you define a primitive variable, it will contain a copy of the information
provided to it.

On the other hand, when you define an object variable, it will contain a _reference_
to the object provided to it.

> While mutating the object we have a reference to affects all other variables that
> reference it, reassigning a variable does not change what the other variables refer
> to.
