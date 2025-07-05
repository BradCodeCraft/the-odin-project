# Common Data Structures and Algorithms

## Introduction

The basic idea of a **data structure** is to store data in a way that meets the
needs of your particular application.

The differences between data structures typically have to do with trade-offs
between how long it takes to first populate the structure, how long it takes to
add or find elements, and how large the structure is in memory.

## Assignment

### [Data structure](https://en.wikipedia.org/wiki/Data_structure)

#### Usage

Data structures serve as the basis for **abstract data types** (ADT). The ADT
defines the logical form of the data type. The data structure implements the
physical form of the **data type**.

Different types of data structures are suited to different kinds of
applications, and some are highly specialized to specific tasks.

Data structures provide a means to manage large amounts of data efficiently for
uses such as large **databases** and internet indexing services.

#### Implementation

Data structures can be implemented using a variety of programming languages and
techniques, but they all share the common goal of efficiently organizing and
storing data. The **array** and **record** data structures are based on
computing the addresses of data items with **arithmetic operations**, while the
**linked data structures** are based on storing addresses of data items within
the structure itself. This approach to data structuring has profound
implications for the efficiency and scalability of algorithms.

### [Design and Analysis of Algorithms I](https://www.youtube.com/watch?v=u2TwK3fED8A)

#### Why Study Algorithms?

Important for all other branches of Computer Science

Plays a key role in modern technological innovation

Provides novel "lens" on processes outside of Computer Science and technology

Challenging (i.e., good for the brain)

Fun

#### Integer Multiplication

Input: 2 n-digit numbers - x and y

Output: product of x and y

"Primitive Operation": add or multiply

#### The Grade-School Algorithm

O(n^2^)

#### The Algorithm Designer's Mantra

> "Perhaps the most important principle for the good algorithm designer is to
> refuse to be content."

"Can we do better?"

#### A Recursive Algorithm

Idea: recursively compute ac, ad, bc, bd
`x * y = 10^n^ * ac + 10^(n/2)^ * (ad + bc) + bd`

#### Karatsuba Multiplication

`x * y = 10^n^ * ac + 10^(n/2)^ * (ad + bc) + bd`

1. Recursively compute ac
1. Recursively compute bd
1. Recursively compute (a + b)(c + d)

**Gauss' trick**: `3 - 1 - 2 = ad + bc`

Upshot: only need 3 recursive multiplications.

### [What is an Algorithm and How Does it Make you a Better Programmer?](https://web.archive.org/web/20231223233808/http://blog.thefirehoseproject.com/posts/what-is-an-algorithm/)

#### What is an algorithm?

The word algorithm is used to describe the "step-by-step" approach where there
is exactly one correct next step.

#### Linear Search Algorithm

Linear ssearch is the process of going start to finish through a list and
comparing values.

#### Chunking Search Algorithm

The process of chunking involves first finding the general area where an entry
would be, then proceeding to check every entry.

#### Binary Search Algorithm

**Learning algorithms is learning how to break problems down in the manner we
outlined here.** It's all about breaking things down into different steps, and
in a manner where tehre is exactly one behavior that someone could take given a
scenario.

#### Tricks that you need in your tool belt

Learning algorithms is all about mastering the art of process development and
converting it to code that can be run by a computer.

Once you can convert a handful of common computer science algorithm into code
in any programming language, you'll have the skills you need to conquer any
code the world has to throw at you.

Other useful tricks of the trade, which you'd be unlikely to figure out on your
own are algorithms like:

- Depth-first search
- Breadth-first search
- Writing sorting algorithmso

The key to solving them is to first understand how they work intuitively and
then translate it into code.

In order to implement some of the algorithms that computer scientists came up
with, you often need additional tools in your belt.

A queue is a concretedata structure that you **NEED** if you're going to
implement the breadth-first search algorithm.

Queues have two properties:

- _Enqueue_ is when you "start waiting"
- _Dequeue_ is when it's your turn to be served

### [CS50 2018 - Lecture 0 - Phone book](https://www.youtube.com/watch?v=DSffdCT5Cx4)

### [How to Construct a Binary Search Tree](https://www.youtube.com/watch?v=FvdPo8PBQtc)

### [Stacks and queues: the basic](https://www.youtube.com/watch?v=6QS_Cup1YoI)

#### Stacks

Elements are sroted by insertion order

Last element in is first out (LIFO)

Elements have no index

Can only add to top and remove from top

#### Queues

Elements are sorted by insertion order

First element in is first out (FIFO)

Element have no index

Can only add to back and remove from front

### [Binary Tree Traversal](https://www.youtube.com/watch?v=9RHO6jU--GU)

Tree Traversal is the process of visiting each node in the tree exactly one in
some order.

#### Breadth-first

A method of visiting all the nodes in the same depth or level.

#### Depth-first

A method of visiting all the nodes in a subtree.

Three popular depth-first traversal strategies:

- Preorder: root - left - right
- Inorder: left - root - right
- Postorder: left - right - root

### [Binary tree: Level Order Traversal](https://www.youtube.com/watch?v=86g8jAQug04)

Use queue (FIFO)

### [Binary tree traversal: preorder, inorder, postorder](https://www.youtube.com/watch?v=gm8DUJJhmY4)

We're using memory implicitly
