/**
 * Calculate the sum of all numbers from 1 up to the number
 *
 * @param {number} num
 */
function sumRange(num) {
  if (num === 1) {
    return num;
  } else {
    return num + sumRange(num - 1);
  }
}

/**
 * Calculate a base number to the power of its exponent
 *
 * @param {number} base
 * @param {number} exponent
 */
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

/**
 * Calculate the factorial of a given number
 *
 * @param {number} num
 */
function factorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

/**
 * Compare all values in an array to a callback
 *
 * @param {any[]} array
 * @param {() => boolean} callback
 */
function all(array, callback) {
  if (array.length === 0) {
    return true;
  } else {
    return callback(array[0]) && all(array.slice(1), callback);
  }
}

/**
 * Calculate the product of all the values of an array
 *
 * @param {number[]} array
 */
function productOfArray(array) {
  if (array.length === 0) {
    return 1;
  } else {
    return array[0] * productOfArray(array.slice(1));
  }
}

/**
 * Searches for a value in a nested object
 *
 * @param {object} object
 * @param {any} value
 */
function contains(object, value) {
  for (const key in object) {
    if (typeof object[key] === "object") {
      return contains(object[key], value);
    }

    if (object[key] === value) {
      return true;
    }
  }

  return false;
}

/**
 * Calculate the total number of integers in a multi-dimensional array
 *
 * @param {any[]} array
 */
function totalIntegers(array) {
  let count = 0;

  for (const elem of array) {
    if (Array.isArray(elem)) {
      count += totalIntegers(elem);
    } else {
      if (typeof elem === "number") count += 1;
    }
  }

  return count;
}

/**
 * Calculate the squares of numbers in an array
 *
 * @param {number[]} array
 */
function sumSquares(array) {
  let sum = 0;

  for (const elem of array) {
    if (Array.isArray(elem)) {
      sum += sumSquares(elem);
    } else {
      sum += elem * elem;
    }
  }

  return sum;
}

/**
 * Creates an array filled with value repeated repetition times
 *
 * @param {number} repetition
 * @param {number} value
 */
function replicate(repetition, value) {
  if (repetition <= 0) {
    return [];
  } else {
    return [value].concat(replicate(repetition - 1, value));
  }
}
