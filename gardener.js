class Tree {
  constructor(name) {
    this.name = name;
  }
}

class Garden {
  constructor(arrTree=[]) {
    this.arrTree = arrTree;
   }
}

class Gardener{
  constructor(name) {
    this.name = name;
  }
 
  gatherFruits(arr) {
    return arr.arrTree.map((a)=> `${this.name} sобрал фрукты с дерева ${a.name}`)
  }
}

const myLittleGarden = new Garden([
  new Tree(`яблоня высокая`), // экземпляр класса
  new Tree(`груша`),
  new Tree(`персиковое дерево`),
]);

console.log(myLittleGarden);

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
