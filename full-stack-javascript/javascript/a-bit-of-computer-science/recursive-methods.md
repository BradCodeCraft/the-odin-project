# Recursive Methods

## Introduction

Recursion is the idea that a function calls itself. It's used to take a big
problem and start breaking it down into smaller and smaller pieces and
continuing to feed their solutions back into the original function until some
sort of answer is achieved and the whole chain unwinds.

The fact is, any problem you can solve recursively, you can also solve using
the iterators that you know and love. You won't often end up using a recursive
solution to a problem, but you should get a feel for when it might be a good
idea.

## Assignment

### [Recursion and stack](https://javascript.info/recursion)

#### Two ways of thinking

1. Iterative thinking

   - Loops

1. Recursive thinking

   - Simplify the task and call self

The maximal number of nested calls (including the first one) is called
_recursion depth_.

The maximal recursion depth is limited by JS engine.

#### The execution context and stack

The information about the process of execution of a running function is stored
in its _execution context_.

The **execution context** is an internal data structure that contains details
about the execution of a function: where the control flow is now, the current
variables, the value of `this` and few other internal details.

**Any recursion can be rewritten as a loop. The loop variant usually can be
made more effective**.

#### Recusive traversals

#### Recursive structures

A recursive data structure is a structure that replicates itself in parts.

##### Linked list

The only structural modifications that do not require mass-renumbering are
those that operate with the end of array: `arr.push/pop()`.

If we really need fast insertion/deletion, we can choose another data structure
called a **linked list**.

The _linked list element_ is recursively defined as an object with:

- `value`
- `next` property referencing the next _linked list element_ or `null` if
  that's the end

Unlike arrays, there's no mass-renumbering, we can easily rearrange elements.

Naturally, list are not always better than arrays.

The main drawback is that we can't easily access an element by its number. In
the list, we need to start from the first item and go `next` `N` times to get
the Nth element.

Lists can be enhanced:

- We can add property `prev` in addition to `next` to reference the previous
  element, to move back easily.
- We can also add a variable named `tail` referencing the last element of the
  list (and update it when adding/removing elements from the end).
- ...The data structure may vary according to our needs.

### [What is Recusion](https://www.youtube.com/watch?v=6oDQaB2one8)

### [Best JS Recursion Explanation on YT](https://www.youtube.com/watch?v=LteNqj4DFD8&t=340s)

### [Recursion - CS50 Shorts](https://www.youtube.com/watch?v=mz6tAJMVmfM)

#### Recursion

Every recursive function has two cases that could apply, given any input.

- The _base case_, which when triggered will terminate the recursive process.
- The _recursive case_, which is where the recursion will actually occur

In general, but not always, recursive functions replace loops in non-recursive
functions.

It's also possible to have more than one base or recursive case.

The Collatz conjecture is applies to positive integers and speculates that it
is always possible to get "back to 1" if you follow these steps:

- if n is 1, stop
- otherwise, if n is even, repeat this process on n / 2.
- otherwise, if n is odd, repeat this process on 3n + 1.

### [Implementation Issues](https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm#Implementation_issues)

#### Recursion

Divide-and-conquer algorithms are neturally implemented as **recursive
procedures**.

#### Explicit stack

Divide-and-conquer algorithms can also be implemented by a non-recursive
program that stores that partial sub-problems in some explicit data structure.
This approach allows more freedom in teh choice of the sub-problem that is to
be solved next, a feature that is important in some applications. This approach
is also the standard solution in programming languages that do not provide
support for recursive procedures.

#### Stack size

In recursive implementations of D&C algorithms, one must make sure that there
is sufficient memory allocated for the recursion stack, otherwise, the
execution may fail because of **stack overflow**. D&C algorithms that are
time-efficient often have relatively small recursion depth.

Stack overflow may be difficult to avoid using recursive procedures since many
compilers assume that the recursion stack is a contiguous area of memory, and
some allocate a fixed amount of space for it. Compilers may also save more
information in the recursion stack than is strictly necessary. Thus, the risk
of stack overflow can be reduced by minimizing the parameters and internal
variables of the recursive procedure or by using an explicit stack structure.

#### Choosing the base cases

Choosing the smallest or simplest possible base cases is more elegant and
usually leads to simpler programs, because there are fewer cases to consider
and they are easier to solve.

On the other hand, efficiency often improves if the recursion is stopped at
relatively large base cases, and these are solved non-recursively, resulting in
a **hybrid algorithm**. This strategy avoids the overhead of recursive calls
that do little or no work and may also allow the use of specialized
non-recursive algorithms that, for those base cases, are more efficient than
explicit recursion. A general procedure for a simple hybrid recursive algorithm
is _short-circuiting the base case_, also known as **arm's-length recursion**.
In this case, whether the next step will result in the base case is checked
before the function call, avoiding an unnecessary function call. Since a D&C
algorithm eventually reduces each problem or sub-problem instance to a large
number of base instances, these often dominate the overal cost of the
algorithm, especially when the splitting/joining overhead is low.

#### Dynamic programming for overlapping subproblems

For some problems, the branched recursion may end up evaluating the same
sub-problem many times over. In such cases, it may be worth identifying and
saving the solutions to these overlapping subproblems, i.e. **memoization**.
Followed to the limit, it leads to **bottom-up** divide-and-conquer algorithms
such as **dynamic programming**.
