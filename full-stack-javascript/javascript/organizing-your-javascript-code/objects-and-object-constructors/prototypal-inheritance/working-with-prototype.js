// Working with prototype
let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps); // returns true (1)

delete rabbit.jumps;

console.log(rabbit.jumps); // return null (2)

delete animal.jumps;

console.log(rabbit.jumps); // return undefined (3)
