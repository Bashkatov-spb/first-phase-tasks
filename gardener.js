class Tree{
  constructor(name){
    this.name = name;
  }
  // Твой код ту
}

class Garden{
  constructor(trees = []){
    this.trees = trees
  }
  // Твой код тут
}

class Gardener { 
  constructor(name) {
    this.name = name
  }
  gatherFruits(obj) {
    const result = []
    for (let tree in obj.trees) {
      result.push(`${this.name} собрал фрукты с дерева "${obj.trees[tree].name}"`)
    }
    return result
  }
  // Твой код тут
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
