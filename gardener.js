class Tree {
  constructor(tree) {
    this.tree = tree;
  }
}

class Garden {
  constructor(arr) {
    this.arr = arr;
  }
}

class Gardener {
  constructor(name) {
    this.name = name;
  }

  gatherFruits(trees) {
    // console.log(trees);
    return trees.arr.map(
      (i) => `${this.name} собрал фрукты с дерева ${i.tree}`
    );
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
