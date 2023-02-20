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
class Work {
  constructor(worker, salary) {
    this.worker = worker;
    this.salary = salary;
  }
}

class Worker {
  constructor(name, age, stage, money = 0, items = []) {
    this.name = name;
    this.age = age;
    this.stage = stage;
    this.money = money;
    this.items = items;
  }
  sayHi() {
    console.log(
      `Hi, my name is ${this.name}. My stage is ${this.stage}. Ive got some money -like ${this.money} tenge.\n Im the owner of ${this.items}`
    );
  }
}
class Property {
  constructor(type, price) {
    this.type = type;
    this.price = price;
  }
}

const properties = [
  new Property(housewife, 100_000),
  new Property(car, 60_000),
  new Property(house, 100_000),
];
const kostantin = new Worker('Константин', 23, 5);
const rabota = new Work(kostantin, 30_000);
konstantin.sayHi()