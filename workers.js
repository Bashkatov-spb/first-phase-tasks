/* eslint-disable comma-dangle */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-else-return */
/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
/* eslint-disable max-len */
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

const pokupki = [
  {
    name: 'Iphone 14 pro max',
    price: 2000,
  },
  {
    name: 'Porshe Cayenne Platinum Edition',
    price: 100_000,
  },
  {
    name: 'Квартиру с видом на море',
    price: 150_000,
  },
  {
    name: 'Шикарную Виллу',
    price: 1_800_000,
  },
  {
    name: 'Полет в космос',
    price: 2_000_000,
  },
];
class Work {
  constructor(worker, salary, koef) {
    this.worker = worker;
    this.salary = salary;
    this.koef = koef;
  }

  checkExperience(worker) {
    if (worker.stage >= 2) {
      this.koef = 1.2;
    }
    if (worker.stage >= 5) {
      this.koef = 1.5;
    }
    if (worker.stage >= 10) {
      this.koef = 2;
    }
    if (worker.stage >= 15) {
      this.koef = 2.5;
    }
    if (worker.stage >= 30) {
      this.koef = 3;
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
    this.food = 0;
    this.random = Math.floor(Math.random() * 10) + 82;
    this.die = false;
  }

  years(number) {
    const lastNum = number % 10;
    if (number > 10 && [11, 12, 13, 14].includes(number % 100)) {
      return 'лет';
    } else if (lastNum === 1) {
      return 'год';
    } else if ([2, 3, 4].includes(lastNum)) {
      return 'года';
    } else if ([5, 6, 7, 8, 9, 0].includes(lastNum)) {
      return 'лет';
    }
  }

  sayHi() {
    if (this.age < this.random) {
      console.log(
        `Привет, меня зовут ${this.name}, мне ${this.age} ${this.years(
          this.age
        )}, мой стаж работы ${this.stage} ${this.years(
          this.stage
        )}, я заработал ${this.money} $. Я съел ${this.food} разных блюд.`
      );
    } else {
      console.log(`${this.name} прожил счастливую жизнь.......`);
    }
  }

  eatFood() {
    this.food += 3 * 365;
    this.money -= 5;
  }

  working(chtobyjit) {
    if (this.age < this.random) {
      this.eatFood();
      this.stage += 1;
      chtobyjit.checkExperience(this);
      this.age += 1;
      this.money += chtobyjit.salary * chtobyjit.koef;
    } else {
      this.die = true;
    }
  }

  makeBuy(items) {
    if (this.age < this.random) {
      items.forEach((item) => {
        if (this.money >= item.price) {
          console.log(`Ура!!! Я купил ${item.name}`);
          this.items.push(items.shift());
          this.money -= item.price;
        }
      });
    }
  }
}

const kostantin = new Worker('Константин', 23, 5);
const rabota = new Work(kostantin, 30_000);

for (let i = 0; i < 65; i += 1) {
  if (!kostantin.die) {
    kostantin.working(rabota);
    kostantin.makeBuy(pokupki);
    kostantin.sayHi();
  } else {
    kostantin.sayHi();
  }
}
