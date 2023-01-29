/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-return-assign */
/* eslint-disable lines-between-class-members */
/* eslint-disable max-classes-per-file */
class Tree {
  constructor(name) {
    this.name = name;
  }
}

class Garden {
  constructor(trees = []) {
    this.trees = trees;
  }
}

class Gardener {
  constructor(gardName) {
    this.gardName = gardName;
  }

  gatherFruits(garden) {
    const results = garden.trees.map(
      (el) => (el = `${this.gardName} собрал фрукты с дерева "${el.name}"`)
    );
    return results;
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
