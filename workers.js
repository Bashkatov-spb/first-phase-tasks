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
  constructor(worker, salary, koef = 1) {
    this.worker = worker;
    this.salary = salary;
    this.koef = koef;
  }
}
const shop = [
  {
    name: "Часы",
    price: 10_000,
  },
  {
    name: "четкий прикид",
    price: 100_000,
  },
  {
    name: "Понтовый телефон",
    price: 150_000,
  },
  {
    name: "Мощный комп",
    price: 200_000,
  },
  {
    name: "Крутой джипяра",
    price: 8_000_000,
  },
  {
    name: "Хата мечты",
    price: 30_000_000,
  },
  {
    name: "Контора в которой я босс",
    price: 300_000_000,
  },
];
class Worker {
  constructor(
    name,
    age,
    stage,
    money = 30_000,
    items = [],
    timeToDie = Math.ceil(Math.random() * (110 - 25) + 25),
    died = false
  ) {
    this.name = name;
    this.age = age;
    this.stage = stage;
    this.money = money;
    this.items = items;
    this.timeToDie = timeToDie;
    this.died = died;
  }
  sayHi() {
    console.log(
      `Привет я ${this.name}, мне ${this.age}лет, у меня есть ${this.money} рублей и следущее имущество ${this.items}`
    );
  }
  haveDinner(num) {
    this.money -= Math.random() * 600 * num;
  }
  koefChanger() {
    if (this.stage >= 15) {
      Work.koef = 3;
    }
    if (this.stage >= 10) {
      Work.koef = 2;
    }
    if (this.stage >= 5) {
      Work.koef = 1.5;
    }
  }
  deposite() {
    this.money = this.money * 1.1;
  }
  shoppping(arr) {
    arr.map((el, i) => {
      if (el.price <= this.money) {
        this.money -= el.price;
        this.items.push(el.name);
        arr.splice(i, 1);
      }
    });
  }
  isDied() {
    const unlucky = Math.random() * (1000 - 1) + 1;
    if (this.age === this.timeToDie || unlucky === 500) {
      this.died = true;
    }
  }
  oneMounthLater(num) {
    this.haveDinner(30);
    this.money += Work.salary * Work.koef * num;
  }
  oneYearLater() {
    this.deposite();
    this.oneMounthLater(12);
    this.age += 1;
    this.stage += 1;
    this.koefChanger();
    this.shoppping(shop);
    this.isDied();
    if (this.died) {
      return console.log(
        `${this.name} умер на ${this.age}ем году жизни, он скопил ${this.money} рублей и нажил ${this.items} :( `
      );
    }
    this.sayHi();
    return this.oneYearLater();
  }
}

const kostantin = new Worker("Константин", 23, 5);
const rabota = new Work(kostantin, 30_000);
// kostantin.oneYearLater();

console.log(kostantin.oneMounthLater(1), kostantin.money);
