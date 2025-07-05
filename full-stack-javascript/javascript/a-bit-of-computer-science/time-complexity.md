# Time Complexity

## Introduction

Code readability and maintainability are super important.

However, there is another consideration that cna be just as important when
writing code. Efficiency!

In programming, there are two ways we can measure the efficiency of our code.
We can measure the time complexity or the space complexity.

## Efficiency basics

The way to measure code efficiency is to evaluate how many 'steps' it takes to
complete.

What we really want to be able to measure is how the number of steps of our
algorithm changes when the data changes.

## Asymptotic notations

Asymptotic Notations are used to describe the running time of an algorithm.
There are several notations that measure that running time in different ways.
The 3 most common are:

- Big O Notation - represents the upper bound of an algorithm. This means the
  worst-case scenario for how the algorithm will perform.
- Omega Notation - represents the lower bound of an algorithm. This is the
  best-case scenario
- Theta Notation - represents both the upper bound and lower bound and
  therefore analyses the average case complexity of an algorithm.

The differences are in how they look to measure the efficiency of the algorithm
and therefore which Notation should apply.

## What is Big O?

### Big O notation

Speed order:

- O(1) - Constant Complexity
- O(log N) - Logarithmic complexity
- O(N) - Linear Complexity
- O(N log N) - N x log N Complexity
- O(n^2^) - Quadratic Complexity
- O(n^3^) - Cubic Complexity
- O(2^n^) - Exponential Complexity
- O(N!) - Factorial Complexity

### O(1) - Constant Complexity

Big O only wants to tell us an algorithm's complexity relative to the size of
the input.

### O(log N) - Logarithmic complexity

Logarithmic Complexity tells us that the number of steps an algorithm takes
increases by 1 as teh data doubles.

### O(N) - Linear Complexity

Linear Complexity just tells us that as the number of items grows, the number
of steps grows at exactly the same rate.

### O(N log N) - N x log N Complexity

This notation implies we have an algorithm which initially is `O(log N)` where
it repeatedly breaks an array in half, but with `O(N log N)` each of those
array halves is processed by another algorithm with a complexity of `O(N)`.

### O(n^2^) - Quadratic Complexity

It's commonly seen when you loop over a data set and within each loop you loop
over it again.

### O(n^3^) - Cubic Complexity

Think triple nested loops baby.

### O(2^n^) - Exponential Complexity

Exponential Complexity means that with each item added to the size, the number
of steps doubles from the previous number of steps.

You want to avoid this if at all possible, otherwise you won't be processing
much data quickly

### O(N!) - Factorial Complexity

You will come across Factorial Complexity if you ever need to calculate
permutations or combinations. It's manageable for a small number of items, but
the leap with each new item in a dataset can be huge.

## Alternatives to Big O

### Big Ω (Omega notation)

Omega Notation isn't considered as useful because it is unlikely our item will
often be the first item in our data structure search, so it doesn't igve us any
idea how well the algorithm will scale.

### Big-Θ (Big-Theta notation)

The looks to give the exact value or a useful range between narrow upper and
lower bounds.

For other algorithms, Theta may represent both the lower and upper bound of an
algorithm that has different complexities.

## Why Big O

Using a worse-case scenario we can make sure our algorithm will scale in all
outcomes.

## Algorithms with the same complexity

Big O doesn't concern itself with constants because they aren't relative to how
an algorithm scales as the input changes.

## Assignment

### [Big O Notation in JS](https://www.doabledanny.com/big-o-notation-in-javascript)

#### What is Big O Notation and why is it useful?

The scalability of an algorithm refers to how much the algorithm slows down
when we increase the size of the input to the algorithm.

#### What is space complexity and time complexity?

**"Time complexity": analysing how the runtime of an algorithm changes as the
input increases.**

**"Space complexity" (aka auxiliary space complexity): the space required by
the algorithm, not including inputs.**

There is usually a trade-off between space complexity and time complexity: to
increase the speed of an algorithm, you'll likely need to store more variables
in memory.

#### The graph of Big O Notation

![Big O Notation graph](https://www.doabledanny.com/static/33ef8737ec93416320dab795d4a399c5/62407/1.jpg)

Usually an algorithm with linear time is good - in most cases it will be
absolutely fine. Whilst not as efficient as constant time, it is often the best
we can do, and it's a lot better than big O(n^2^).

#### Back to the graph of Big O Notation

**A good rule-of-thumb**: if possible, avoid nested for-loops if the input size
is large. Use two separate loops instead.

#### Using Big O to compare algorithms

#### But What About Built in Methods?

Push and pop will always be constant time - Big O(1).

Shift and unshift have linear time complexities - Big O(N) - because the longer
the input array, the more items have to be re-indexed.

#### A logarithmic algorith

#### Visualising logartihmic time with teh balanced binary tree

A great way to visualize log(n) time is via a "balanced binary tree".

Algorithms with logarithmic time are often "divide and conquer" style. The
algorithm has less data to deal with on each loop and so find/sort things
quickly.

#### The bigger graph of Big O Notation

![Bigger Big O Notation Graph](https://www.doabledanny.com/static/31985456f982a6965ee675e767256140/f2bf3/3.jpg)

#### Recursive factorial algorithm

#### Visualising factorial growth

#### Summary - Big O comparison table

![Big O comparison table](https://www.doabledanny.com/static/0c65ab4afd2fd0f8b4b40a13da5e19f5/a1afe/11.jpg)

#### What's the best JS data structure and algorithms course?

### [Step-by-Step Big O Complexity Analysis Guide](https://www.sahinarslan.tech/posts/step-by-step-big-o-complexity-analysis-guide-using-javascript)

The main goal is no matter how many complexity types a method includes - we
always want to reduce everything into one end result.

How can we simplify this?

1. Analyse and break your function into individual operations
1. Calculate the Big O of each operation one step at a time.
1. Add Big O of each operation together and calculate the end result.

And while going through those steps, we will keep 4 rules in mind:

1. Always assume the worst cast
1. Each input should have a unique variable
1. Drop the constants
1. Drop non-dominant terms

#### Always assume the worst case

Big O can be used to find best, average and worst case. But when it comes to
programming, we are more interested on the worst case part. When we know the
worst case, we can optimize our algorithms furhter if it is needed

#### Each input should have a unique variable

Whenever you are analyzing a function that operates with multiple inputs,
always make sure to assign a unique variable name representing each input.

Quick reminders:

- Looping through **2 separate arrays** one after another = `O(a + b)`
- Looping through **2 nested separate arrays** = `O(a * b)`

Loops using the same input:

- Looping through **same array one after another** => `O(n)`
- Looping through **same array with 2 nested loops** => `O(n^2^)`

#### Drop the constants

A constant part combined with other complexities doesn't have an impact on
scaling when we are looking for a pattern.

#### Drop non-dominant terms

Compare all existing complexities we have, then pick the worst scaling one.
This is typically the last rule being used to finalize a complexity analysis of
an algorithm.
