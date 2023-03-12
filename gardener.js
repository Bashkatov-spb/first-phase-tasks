class Tree {
  constructor(type) {
    this.type = type;
  }
}

class Garden {
  constructor(trees) {
    this.trees = trees;
  }
}

class Gardener {
  constructor(name) {
    this.name = name;
  }
  gatherFruits(myLittleGarden) {
    return myLittleGarden.trees.map((elem) => `${this.name} собрал фрукты с дерева ${elem.type}`);
  }
}

// Измени код выше, чтобы код ниже заработал.
// Код ниже не менять :)
const myLittleGarden = new Garden([
  new Tree(`яблоня высокая`), // экземпляр класса
  new Tree(`груша`),
  new Tree(`персиковое дерево`),
]);
const gennadiy = new Gardener(`Геннадий`);
const results = gennadiy.gatherFruits(myLittleGarden);
console.log(results);

/*
  Ожидаемый результат в консоли:
  [
    ‘Геннадий собрал фрукты с дерева “яблоня высокая“‘,
    ‘Геннадий собрал фрукты с дерева “груша“‘,
    ‘Геннадий собрал фрукты с дерева “персиковое дерево“’,
  ]
*/
