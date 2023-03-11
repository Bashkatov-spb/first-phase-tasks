// eslint-disable-next-line max-classes-per-file
class Tree {
  constructor(name) {
    this.name = name;
  } // Твой код ту
}

class Garden {
  constructor(args = {}) {
    this.args = args;
  }
  // Твой код тут
}

class Gardener {
  constructor(name) {
    this.name = name;
  }

  gatherFruits(arr) {
    const resArr = [];
    for (let i = 0; i < arr.args.length; i += 1) {
      resArr.push(`${this.name} собрал фрукты с дерева "${arr.args[i].name}"`);
    }
    return resArr;
  }

  // Твой код тут
}

// Измени код выше, чтобы код ниже заработа.
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
