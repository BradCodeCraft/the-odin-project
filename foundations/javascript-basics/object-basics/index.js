// https://javascript.info/array-methods#tasks

/**
 * Convert an array of `user` objects to an array of names
 */
function convertMapToNames(users = []) {
  return users.map((USER) => USER.name);
}

/**
 *  Convert an array of `user` objects to an array with objects `id` and `fullName`
 */
function convertMapToObjects(users = []) {
  return users.map((USER) => {
    return {
      fullName: USER.name + " " + USER.surname,
      id: USER.id
    }
  })
}

/**
  * Sorts an array of objects
  */
function sortUsersByAge(users = []) {
  return users.sort((USER_A, USER_B) => USER_A.age - USER_B.age);
}

/**
 *  Gets the average age of an array of `user` objects
 */
function getUsersAverageAge(users = []) {
  return users.reduce(
    (total, CURRENT_VALUE) => total + CURRENT_VALUE,
    0) / users.length;
}

/**
 *  Create an object from an array with `id` as the key and the array items as values
 */
function groupUsersById(users = []) {
  return users.reduce((resultObject, USER) => {
    resultObject[USER.id] = USER;
    return resultObject;
  }, {});
}

let users = [
  { id: 'john', name: "John Smith", age: 20 },
  { id: 'ann', name: "Ann Smith", age: 24 },
  { id: 'pete', name: "Pete Peterson", age: 31 },
];

console.log(groupUsersById(users));
