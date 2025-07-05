/**
 * Sum all numbers till the given one
 *
 * @param {number} n
 */
function sumTo(n) {
  // 1. using a for loop
  // let sum = 0;
  // for (let i = 1; i <= n; i++) {
  //   sum += i;
  // }
  // return sum;
  //
  // 2. using recursion
  // if (n == 1) {
  //   return n;
  // } else {
  //   return n + sumTo(n - 1);
  // }
  //
  // 3. using arithmetic progression formula
  return (n * (n + 1)) / 2;
}

/**
 * Calculate factorial
 *
 * @param {number} n
 */
function factorial(n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

/**
 * Fibonaacci numbers
 *
 * @param {number} n
 */
function fib(n) {
  if (n <= 1) {
    return 1;
  } else {
    return fib(n - 2) + fib(n - 1);
  }
}

class LinkedList {
  /**
   * @param {any} value
   * @param {LinkedList} next
   */
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

/**
 * Output a single-linked list
 *
 * @param {LinkedList} list
 */
function printList(list) {
  // 1. loop
  while (list) {
    console.log(list.value);
    list = list.next;
  }
  //
  // 2. recursion
  //   console.log(list.value);
  // if (list.next) {
  //   printList(list.next);
  // }
}

/**
 * Output a single-linked list in the reverse order
 *
 * @param {LinkedList} list
 */
function printListReversed(list) {
  // 1. loop
  let values = [];
  let temporaryList = list;
  while (temporaryList) {
    values.push(temporaryList.value);
    temporaryList = temporaryList.next;
  }
  for (let i = values.length - 1; i >= 0; i--) {
    console.log(values[i]);
  }
  //
  // 2. recursion
  // if (list.next) {
  //   printList(list.next);
  // }
  //   console.log(list.value);
}

/**
 * Calculates how many steps it takes to get to 1
 *
 * @param {number} n
 */
function collatz(n) {
  if (n == 1) {
    return 0;
  } else if (n % 2 === 0) {
    return 1 + collatz(n / 2);
  } else {
    return 1 + collatz(3 * n + 1);
  }
}
