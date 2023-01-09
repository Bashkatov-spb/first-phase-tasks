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

const shop = [
  {
    name: "iPhone",
    price: 50000,
  },
  {
    name: "Travel",
    price: 100000,
  },
  {
    name: "Car",
    price: 700000,
  },
];

class Work {
  constructor(worker, salary, koef) {
    this.worker = worker;
    this.salary = salary;
    this.koef = koef;
  }

  checkStage(worker) {
    if (worker.stage >= 1) {
      this.koef = 1.1;
    }
    if (worker.stage >= 3) {
      this.koef = 1.5;
    }
    if (worker.stage >= 5) {
      this.koef = 1.8;
    }
  }
}

class Worker {
  constructor(name, age, stage, money = 0, items = []) {
    this.name = name;
    this.age = age;
    this.stage = stage;
    this.money = money;
    this.items = items;
    this.old = 100;
    this.meal = 0;
    this.die = false;
  }

  sayHi() {
    if (this.age < this.old) {
      console.log(
        `Hello! My name is ${this.name}, I've been working for ${
          this.stage
        } years, I ate ${this.meal} vegetables, I have ${
          this.money
        } $ and ${this.things()}`
      );
    } else {
      console.log(`${this.name} died`);
    }
  }

  things() {
    if (this.items === 0) {
      `nothing`;
    } else {
      let newArr = this.items.map((i) => i.name);
      return `${newArr.join(", ")}`;
    }
  }

  eating() {
    this.meal += 1095;
    this.money -= 200;
  }

  working(year) {
    if (this.age < this.old) {
      for (let i = 0; i < 1095; i += 1) {
        this.eating();
      }
      this.stage += 1;
      year.checkStage(this);
      this.age += 1;
      this.money = this.money + year.salary * year.koef * 12;
    } else {
      this.die = true;
    }
  }

  shopping(shop) {
    shop.forEach((i) => {
      if (this.money >= i.price) {
        // console.log(this.items);
        this.money -= i.price;
        this.items.push(shop.shift());
      }
    });
    // console.log(this.items);
  }
}

const kostantin = new Worker("Константин", 23, 5);
const rabota = new Work(kostantin, 30_000);

for (let i = 0; i < 15; i += 1) {
  if (!kostantin.die) {
    kostantin.working(rabota);
    kostantin.shopping(shop);
    kostantin.sayHi();
  }
}
