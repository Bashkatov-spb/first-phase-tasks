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
    item: 'Macbook Pro',
    cost: 200_000,
  },
  {
    item: 'Ferrari',
    cost: 10_000_000,
  },
  {
    item: 'Country house',
    cost: 70_000_000,
  },
];

class Work {
  constructor(worker, salary) {
    this.worker = worker;
    this.salary = salary;
  }
  checkStage(worker) {
    if (worker.stage >= 5 && worker.stage < 10) {
      this.salary = 50_000;
    }
    if (worker.stage >= 10 && worker.stage < 20) {
      this.salary = 100_000;
    }
    if (worker.stage >= 20) {
      this.salary = 300_000;
    }
  }
  working(worker) {
    if (!worker.isDead) {
      for (let i = 0; i < 90; i += 1) {
        worker.money -= worker.food;
      }
      worker.age += 0.1;
      worker.stage += 0.1;
      worker.money += this.salary;
      worker.sayHi();
      if (worker.age > 70) {
        worker.isDead = Math.random() >= 0.9;
      }
    } else {
      console.log("I'll be back 👍, see you in the next live");
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
    this.isDead = false;
    this.food = 500;
  }
  sayHi() {
    console.log(
      `Hello! My name is ${this.name}, my working stage is ${this.stage.toFixed(1)} years, i have ${this.money} rub. and some stuff: ${[...this.items]}`
    );
  }
  shopping(magaz) {
    for (let i = 0; i < shop.length; i += 1) {
      if (this.money >= shop[i].cost) {
        this.money -= magaz[i].cost;
        const currentItem = magaz.splice(i, 1)[0].item;
        this.items.push(currentItem);
        break;
      }
    }
  }
}

const kostantin = new Worker('Константин', 23, 5);
const rabota = new Work(kostantin, 30_000);


kostantin.money = 100_000;

for (let i = 0; i < 500; i += 1) {
  rabota.checkStage(kostantin);
  rabota.working(kostantin);
  kostantin.shopping(shop);
}
