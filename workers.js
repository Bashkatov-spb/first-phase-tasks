/* Перед вами 2 класса, которые нужно заполнить методами:
  1. Выплаты работнику, оклад 30_000, надбавки разные (относительно стажа разный уровень ЗП)
  2. sayHi для работника, где он здоровается и рассказывает о себе (имя, стаж, наличие денег, имущество)
  3. Походы на работу (необходимо реализовать максимально приближенный к реальности цикл, 3 приема пищи, старение раз в год, около 240 походов на работу в год)

  Реализуй: 
  1. Старение работника
  2. Необходимость приёма пищи 
  3. Покупка имущества, если на него хватает денег (для имущества создай массив объектов)
  4. Смерть работника от старости, либо шанс 0.1% 
*/
const magazine = [
  {
    item: 'Iphone 15',
    cost: 150_000,
  },
  {
    item: 'BMW x6',
    cost: 10_000_000,
  },
  {
    item: 'Penthouse',
    cost: 50_000_000,
  },
];

class Work {
  constructor(worker, salary) {
    this.worker = worker;
    this.salary = salary;
  }
  checkStage(worker) {
    if (worker.stage >= 5 && worker.stage < 10) {
      this.salary = 60_000;
    }
    if (worker.stage >= 10 && worker.stage < 15) {
      this.salary = 80_000;
    }
    if (worker.stage >= 15) {
      this.salary = 100_000;
    }
  }
}

class Worker {
  #doshirak = 200;

  constructor(name, age, stage = 0, money = 0, items = []) {
    this.name = name;
    this.age = age;
    this.stage = stage;
    this.money = money;
    this.items = items;
    this.isDead = false;
  }
  sayHi() {
return `Hello, my name is ${this.name}, i am ${this.age.toFixed(1)} years old, and i have ${this.money} руб, еще у меня есть ${this.items}`
} 
  working(work){
  if(!this.isDead){
    for (let i = 0; i < 90; i++) {
      this.money -+ this.#doshirak
    }
    this.money += work.salary
    this.age += 0.1
    this.stage += 0.1
    this.sayHi()
    if(this.age > 80){
      this.isDead = Math.random() >= 0.9
    }
} else {
  console.log('я не умер, я в шавасане');
}
}
shopping(magaz){
 
    for (let i = 0; i < magaz.length; i++) {
      if(this.money >= magaz[i].cost){
        this.money -= magaz[i].cost
        this.items.push(magaz.splice(i, 1)[0].item)
        console.log(`I have spent all my money but now i have ${this.items[this.items.length-1]}`)
    }
  }
}
}

const konstantin = new Worker('Константин', 23);
const rabota = new Work(konstantin, 30_000);


for (let i = 0; i < 600; i+=1) {
  konstantin.working(rabota)
  rabota.checkStage(konstantin)
  konstantin.shopping(magazine)
}
// console.log();
console.log(konstantin); 