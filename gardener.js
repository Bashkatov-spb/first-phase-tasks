/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */

class Tree {
  constructor(tree) {
    this.tree = tree;
  }
}

class Garden extends Tree {
  constructor(tree) {
    super(tree);
  }
}
class Gardener {
  constructor(name) {
    this.name = name;
  }

  gatherFruits(obj) {
    const res = [];
    for (const key in obj.tree) {
      res.push(`${this.name} собрал фрукты с дерева “${obj.tree[key].tree}“`);
    }
    return res;
  }
}

// Измени код выше, чтобы код ниже заработал.
// Код ниже не менять :)
const myLittleGarden = new Garden([
  new Tree('яблоня высокая'), // экземпляр класса
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
