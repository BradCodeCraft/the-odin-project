# Space Complexity

## Introduction

When we talk about memory, we mean primary memory, which is the working memory
available to your system to execute algorithms.

## What do we mean by space complexity?

Space complexity can be considered to be the total space used by an algorithm
relative to the size of the input.

Measuring space complexity considers the space used by your algorithm input and
auxiliary space. Auxiliary space is the extra space used by the algorithm.
These can be things like temporary variables created during the execution of
the algorithm. They won't have a lasting impact on the memory space but during
the execution of the algorithm will need to be considered. Therefore, you can
consider the space complexity to be the total amount of working memory our
algorithms needs.

## The importance of considering space complexity

Although memory is cheap, your hardware will usually have a fixed amount.

### Measuring space complexity

The good news is that we measure space complexity in exactly the same way as
time complexity.

The first thing to know is that we measure space complexity by considering all
steps including any constants, and then we drop the constants when applying a
Big O Notation to the algorithm.

### O(1) - Constant Complexity

### O(N) - Linear Complexity

Most data structures you come across will have a space complexity of O(N).

### Other complexities

You do find some recursive functions that may have a different space complexity
and some sorting algorithms. You normally won't have much reason to consider
anything else.

### Other considerations

One of the common areas that causes confusion when considering space complexity
is what constitutes using space in the context of an algorithm.

The first answer to **analyzing space complexity** provides some great context
to the question and gives some though-provoking answers.

## Wrapping up

Once your code is working though, and you might be looking to refactor it, it's
definitely worth taking a moment to consider if the code is as efficient as it
could be.

On top of these considerations, you also need to balance the readability of
your code. Consider the readability first, and look to refactor for better
efficiency if there is a clear impact on performance.

## Assignment

### [Big O: Space Complexity](https://dev.to/mwong068/big-o-space-complexity-lcm)

#### Overview: What is space complexity?

Space complexity is how much total space the algorithm will take up but
auxiliary space is how much space could be used temporarily to run part of an
algorithm. Auxiliary space ignores the input size of the data structure that
you begin with and accounts for any program calls inside of the function.

#### Calculating Space Complexity

We can break down the memory consumption of an algorithm into three different
parts that mainly affect the space complexity:

- **variables and constants**
- **inputs**
- **execution**

### [Recursion and Space Complexity](https://dev.to/elmarshall/recursion-and-space-complexity-13gc)
