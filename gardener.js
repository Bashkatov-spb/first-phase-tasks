class Tree {
  constructor(name) {
    this.name = name
  }
}

class Garden {
  constructor(take = []) {
    this.take = take
  }
}

class Gardener {
  constructor(nameG) {
    this.nameG = nameG
  }

 gatherFruits(myLittleGarden) {
 let quest = myLittleGarden.take.map((tree) => `${this.nameG} собрал фрукты с дерева ${tree.name}`)
 return quest
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
