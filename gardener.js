// eslint-disable-next-line max-classes-per-file
class Tree {
  constructor(typeTree) {
    this.typeTree = typeTree;
  }
}

class Garden {
  constructor(trees) {
    this.trees = trees;
  }
}

class Gardener {
  constructor(gennadiy) {
    this.gennadiy = gennadiy;
  }

  gatherFruits(myLittleGarden) {
    return myLittleGarden.trees.map((el) => `${this.gennadiy} собрал фрукты с дерева ${el.typeTree}`);
  }
}

// Измени код выше, чтобы код ниже заработал.
// Код ниже не менять :)
const myLittleGarden = new Garden([
  new Tree('яблоня высокая'), // экземпляр класса
  new Tree('груша'),
  new Tree('персиковое дерево'),
]);
const gennadiy = new Gardener('Геннадий');
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
