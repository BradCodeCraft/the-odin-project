// We have two hamsters: speedy and lazy inheriting from the general hamster object.
// When we feed one of them, the other one is also full. Why? How can we fix it?
let hamster = {
  eat(food) {
    if (this.stomach) {
      this.stomach.push(food);
    } else {
      this.stomach = [food];
    }
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// This one found the food
speedy.eat("apple");
speedy.eat("pear");
console.log(speedy.stomach); // apple

console.log(lazy.stomach); // nothing
