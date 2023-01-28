class Tree {
  constructor(tree) {
    this.tree = tree;
  }
  // Твой код ту
}

class Garden {
  constructor(trees = []) {
    this.trees = trees;
  }
}

class Gardener {
  constructor(name) {
    this.name = name;
  }
  // Твой код тут
  gatherFruits(myL) {
    return myL.trees.map((el) => `Генадий собрал фрукты с дерева "${el.tree}"`);
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
