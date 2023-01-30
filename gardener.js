class Tree {
  constructor(name_tree) {
    this.name_tree = name_tree;
  }
}

class Garden {
  constructor(store = []) {
    this.store = store;
  }
}

class Gardener {
  constructor(name) {
    this.name = name;
  }
  gatherFruits(sobaka) {
    const result = sobaka.store.map(
      (el) => (el = `${this.name} собрал фрукты с дерева "${el.name_tree}"`)
    );
    return result;
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
