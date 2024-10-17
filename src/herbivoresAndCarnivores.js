'use strict';

class Animal {
  static alive = [];

  health = 100;
  constructor(name) {
    this.name = name;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(toBite) {
    if (toBite instanceof Herbivore) {
      if (!toBite.hidden && toBite.health > 0) {
        toBite.health -= 50;
      }
    }

    if (toBite.health <= 0) {
      const index = Animal.alive.indexOf(toBite);

      Animal.alive.splice(index, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
