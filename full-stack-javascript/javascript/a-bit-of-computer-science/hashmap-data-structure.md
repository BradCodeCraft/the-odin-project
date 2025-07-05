# HashMap Data Structure

## Introduction

A hash map is similar to a conventional array, except it uses "keys" as indices
rather than meaningless sequential numbering of the values. With the data
organized in this way, we get quick search speeds for keys in the structure.

## What is a hash code?

Hashing involves taking an input in and generating a corresponding output. A
has function should be a pure function. Hashing the same input should always
return the same hash code, and there should be no random generation component.

There is a key difference between hashing and ciphering (encryption):
reversabilty. Hashing is a one-way process.

### Use cases

In the context of hash maps, we need the hash code to be a number. This number
will serve as teh index to the bucket that will store the key value pair.

## Buckets

Buckets are storage that we need to store our elements. We can consider each
index of an array to have a bucket. For a specific key, we decide which bucket
to use for storage through our hashing function. The hash function returns a
number that serves as the index of the array at which we store this specific
key value pair.

A `Set` is similar to a hash map but the key difference is that a `Set` will
have nodes with only keys and no values.

If we wanted to get a value using a key:

1. To retrieve a value, we have the key and calculate the index of its bucket
1. If the bucket is not empty, then we go to that bucket
1. Now we compare if the node's key is the same key that was used for the
   retrieval
1. If it is, then we can return the node's value. Otherwise, we return `null`.

> Different keys might generate the same hash code. We need to make sure the
> key is the same by comparing both keys that are inside the bucket.

### Insertion order is not maintained

A hash map does not guarantee insertion order when you iterate over it. The
translation of hash codes to indexes does not follow a linear progression from
the first to the last index. Instead, it is more unpredictable, irrespective of
the order in which items are inserted. That means if you are to retrieve the
array of keys and values to iterate over them, then they will not be in order
of when you inserted them.

If iterasting over a hash map frequently is your goal, then this data structure
is not the right choice for the job, a simple array would be better.

## Collisions

A collision occurs when two different keys generate the exact same hash code.
Because they have the same hash code, they will land in the same bucket.

```javascript
function stringToNumber(string) {
  let hashCode = 0;
  const primeNumber = 31;

  for (let i = 0; i < string.length; i++) {
    hashCode = primeNumber * hashCode + string.charCodeAt(i);
  }

  return hashCode;
}
```

> Notice the usage of a prime number. We could have chosen any number we
> wanted, but prime numbers are preferable. Multiplying by a prime number will
> reduce the likelihood of hash codes being evenly divisible by the bucket
> length, which helps minimize the occurrence of collisions.

Since we have a finite number of buckets, there is no way to eliminate
collisions entirely.

### Dealing with collisions

What if each `Node` inside the bucket can store more than one value? Enter
`Linked Lists`. Now, each bucket will be a Linked List. When inserting into a
bucket, if it's empty, we insert the head of Linked List. If a head exists in a
bucket, we follow that Linked List to add to the end of it.

## Growth of a hash map

We should start a with a small array for our buckets. We'll use an array of
size `16`.

> Most programming languages start with the default size of `16` because it's a
> power of 2, which helps with some techniques for performance that require bit
> manipulation for indexes.

How are we going to insert into those buckets when our hash function generates
big numbers? We make use of the module `%` operation `given any number modulo
by 16 we will get a number between 0 and 15`.

As we continue to add nodes into our buckets, collisions get more and more
likely. Eventually, howeverm there will be more nodes than there are buckets,
which guarantees a collision.

In a perfect world, each bucket will either have 0 or 1 node only, so we grow
our buckets array to have more chance that our nodes will spread and not stack
up in the same buckets. To grow our array, we create a new one that is double
its size and then copy all existing nodes over to the buckets of this new
array, hashing their keys again.

### When do we know that it's time to grow our buckets array?

To deal with this, our hash map class needs to keep track of two new fields,
the `capacity` and the `load factor`.

- The `capacity` is the total number of buckets we currently have
- The `load factor` is a number that we assign our hash map to at the start.
  It's the factor that will determine when it is a good time to grow our
  buckets array. Hash map implementations across various languages use a load
  factor between `0.75` and `1`.

The product of these two numbers gives us a number, and we know it's time to
grow when there are more entries in the hash map than that number. Setting it
too low will consume too much memory by having too many empty buckets, while
setting it too high will allow our buckets to have many collisions before we
resize the array.

## Computation complexity

A hash map is very efficient in its insertion, retrieval, and removal
operations. A hash map has an average case complexity of `O(1)` for those
operations.

The worst case of those operations would be `O(n)` and that happens when we
have all our data hashes to the same exact bucket. The complexity itself
surfaces because of the linked list, and `O(n)` is because we are traversing
the linked list to insert yet again another node into the same bucket, which
happens specifically because of collisions.

The growth of our hash map has the complexity of `O(n)` at all times.

## Assignment

### [What are Hash Functions and How to choose a good Hash Fucntion?](https://www.geeksforgeeks.org/what-are-hash-functions-and-how-to-choose-a-good-hash-function/)

#### What is a Hash Function?

In simple terms, a hash function maps a large number or string to a small
integer that can be used as the index in the hash table.

#### What is Meant by a Good Hash Function?

A good hash function should have the following properties:

- **Efficiently Computable**: the function should be fast to compute.
- **Uniform Distribution of Keys**: the hash function should distribute the
  keys evenly across the hash table (each table position should be qually
  likely for each key.)

#### Rules for Choosing a Good Hash Function

1. **Simplicity**
1. **Minimise Collisions**
1. **Uniform Distribution**
1. **Consider All Bits of the Key**

#### Heuristic Methods for Hashing

1. **Hashing by Division**: we map a key to one of the slots of a hash table by
   taking the ramainder when dividing the key by the table size. The hash
   function: `h(key) = key % table_size`

   - Some values of `table_size` should be avoided. To avoid collision, the
     table size should ideally be a prime number, and it should not be close to
     an exact power of 2.

1. **The Multiplication Method**: we multiply the key `k` by a constant real
   number `c` in the range `0 < c < 1`, and then extract the fractional part of
   the result. We then multiply this value by the table size `m` and take the
   floor of the rsult. The hash function: `h(k)  = floor(m * (k * c % 1))` or
   `h(k) = floor(m * frac(k * c))` where floor is the integer part and frac is
   the fractional part.

   - An advantage of the multiplication method is that the value of `m` is not
     critical. It's typically chosen as a power of 2 for simplicity.
   - The constant `c` is often chosen to be the fraction because this value
     works reasonably well.

### [CS50 2019 - Lecture 5 - Hash Table](https://www.youtube.com/watch?v=btT4bCOvqjs)
