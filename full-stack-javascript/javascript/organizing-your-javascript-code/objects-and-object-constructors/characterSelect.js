/**
 * @param {string} name
 * @param {number} level
 */
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

/**
 * @param {string} name
 * @param {number} level
 * @param {string} weapon
 */
function Warrior(name, level, weapon) {
  Hero.call(this, name, level);

  this.weapon = weapon;
}

/**
 * @param {string} name
 * @param {number} level
 * @param {string} spell
 */
function Healer(name, level, spell) {
  Hero.call(this, name, level);

  this.spell = spell;
}

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Hero.prototype.hello = function () {
  return `${this.name} says hello.`;
};

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}.`;
};

Healer.prototype.heal = function () {
  return `${this.name} casts ${this.spell}.`;
};

const hero1 = new Warrior("Bjorn", 1, "axe");
const hero2 = new Healer("Kanin", 1, "cure");
