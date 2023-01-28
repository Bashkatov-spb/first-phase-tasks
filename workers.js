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
  paySalary() {
    this.worker.money += this.salary + this.salary * (this.worker.stage / 100);
  }
}

class Worker {
  constructor(name, age, stage, money = 0, items = []) {
    this.name = name;
    this.age = age;
    this.stage = stage;
    this.money = money;
    this.items = items;
    this.workingDays = 0;
    this.stomach = 0;
  }

  eat() {
    console.log(`${this.name} поел!`);
    this.stomach += 1;
    this.money -= 150;
  }

  getHungry() {
    console.log(`${this.name} проголодался!`);
    this.stomach -= 1;
  }

  buy(item, price) {
    if (this.money >= price) {
      this.money -= price;
      this.items.push({ item });
    }
  }

  sayHi() {
    if (this.items.length) {
      console.log(
        `Hello! My name is ${this.name}, age: ${this.age}, I have ${
          this.money
        } money and ${this.items.map((el) => el.item)}!`
      );
    } else {
      console.log(
        `Hello! My name is ${this.name}, age: ${this.age}, I have ${this.money} money and nothing more`
      );
    }
  }

  goToWork(someWork) {
    console.log(`${this.name} сходил на работу!`);
    this.workingDays += 1;
    this.eat();
    this.getHungry();
    this.eat();
    this.getHungry();
    this.eat();
    this.getHungry();
    if (this.workingDays % 20 === 0) {
      someWork.paySalary();
    }
    if (this.workingDays % 240 === 0) {
      this.stage += 1;
      getOlder();
    }
  }

  getOlder() {
    this.age += 1;
    if (this.age === 90) {
      this.died();
    }
  }

  died() {
    console.log(`${this.name} умер!`);
  }
}

const kostantin = new Worker('Константин', 88, 5, 1000);
const rabota = new Work(kostantin, 30_000);

kostantin.buy('table', 100);
kostantin.getOlder();
kostantin.goToWork(rabota);
kostantin.sayHi();

console.log(kostantin);
