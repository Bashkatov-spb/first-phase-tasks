class Tree  {
  constructor(tree){
   this.tree = tree
  }
}

class Garden {
  constructor(derevo=[]){
this.derevo = derevo

  }
}

class Gardener {
  constructor(name, derevo){
   this.name = name
   this.derevo = derevo
  }

  gatherFruits(hjkjk) {
    return hjkjk.derevo.map((el)=>`${this.name} собрал фрукты с дерева ${el.tree}`)
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
