# OOP Principles

## Introduction

It is not straightforward to decide what to put in each object, or when to make
a new object, or when to let an object 'inherit' from another one.

## Single responsibility

One of the most important things to remember is the **Single Responsibility
Principle** which states that a class (or object or module... you get the
point) should only have *one* responsibility. This doesn't mean that an object
can only do one thing, but it does mean that everything an object does should
be part of one responsibility.

Another way to think about the Single Responsibility Principle is that a given
method/class/component should have a single reason to change. Otherwise, if an
object is trying to have multiple responsibilities, changing one aspect might
affect another.

## Loosely coupled objects

You should take care, however, to make sure that your individual objects can
stand alone as much as possible. **Tightly coupled** objects are objects that
rely so heavily on each other that removing or changing one will mean that you
have to completely change another one.

## Assignment

### [SOLID principle #1: Single responsibility (JS)](https://duncan-mcardle.medium.com/solid-principle-1-single-responsibility-javascript-5d9ce2c6f4a5)

### [SOLID Design Principles](https://www.youtube.com/playlist?list=PLZlA0Gpn_vH9kocFX7R7BAe_CvvOCO_p9)

#### Single Responsibility Principle Explained

#### Open/Closed Principle Explained

The main idea of the open/closed principle is that every
class/function/module/section of your code should be **open for extension and
closed for modification**. This means that a class/function/module should be
able to be extended in functionality without having to go into the class and
change it. Essentially, you shouldn't need to change existing code to add new
functionality and instead should only have to add new code.

#### Liskov Substitution Principle Explained

The main idea of the Liskov substitution principle is that any function/module
that interacts with a class should also be able to interact with all subclasses
of that class without breaking. This essentially means that a class is
interchangeable with its subclasses.

#### Interface Segregation Principle Explained

The main idea of the interface segregation principle is that any class that
implements an interface must use all functions/properties of the interface. JS
does not have actual interfaces, but a class inheritance structure is similar
enough that it works in this instance. This means that any class that inherits
from another class needs to use all of the methods/properties from the base
class. This encourages writing small classes instead of large classes.

#### Dependency Inversion Principle Explained

The main idea of the dependency inversion principle is that any class that uses
a dependency should only ever use the dependency through a predefined
interface/wrapper. This makes it so that your code will never directly depend
on a low level API for its operations. The reason this is so important is
because if you ever need to change or remove that dependency it becomes really
difficult when it is used all over your code. By wrapping this dependency in an
interface you can depend on the interface you created which will make changing
out the dependency painless.

### [How to Write Highly Scalable and Maintainable JS - Coupling](https://web.archive.org/web/20170215102316/http://www.innoarchitech.com:80/scalable-maintainable-javascript-coupling)

#### Coupling

Coupling between modules occurs when one module directly references another
module. In other words, one module "knows" about another module.

One of the goals when creating highly scalable and maintainable JS applications
is that any module can be easily swapped out at any time for a different
module. Reusability is also a major reason to minimize coupling. Ideally, we
would like to maximize code reuse and the ability to test modules
independently.

Another goal was that there should not be a single point of failure anywhere in
the application.

#### Patterns to Reduce Coupling

These patterns are often a variation of the so-called observer pattern. On such
variation is referred to as the Pub/Sub or Publish/Subcribe pattern.

In some cases, the observer registers itself with the event emitter directly in
order to be notified whenever a certain event occurs. The downside to this
approach is that an observer "knows" about the event emitter object and what
observables or events to observe through the registration process.

There are many versions of the Pub/Sub pattern that involve a mediator object,
which helps to further minimize coupling between modules. A mediator object is
an object that isolates the publisher from the subscriber.

Topic-based simply means that there are topics that a module can either
subscribe to, publish to, or both. A module is also able to unsubscribe from a
topic if needed.

### [Composition over Inheritance](https://www.youtube.com/watch?v=wfMtDGfHWpA)

`Object.assign()`
