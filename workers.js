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

const itemsShop = [
  {
    name: 'Iphone',
    price: 150_000,
  },
  {
    name: 'Lexus',
    price: 3_000_000,
  },
  {
    name: 'Коттедж',
    price: 10_000_000,
  },
];

class Work {

  constructor(worker, salary) {
    this.worker = worker;
    this.salary = salary;
  }

  getSalary(worker) {
    worker.money += this.salary * 12;

    if (worker.stage >= 5) {
      this.salary += 10000;
    }
    if (worker.stage >= 10) {
      this.salary += 20000;
    }
    if (worker.stage >= 15) {
      this.salary += 30000;
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
    this.rand = Math.floor(Math.random() * 10) + 50;
    this.lunch = 0;
  }

  oneYear() {
    this.age += 1;
    this.stage += 1;
    this.lunch += 3 * 365;
  }

  buyItems(itemsShop) {
    itemsShop.forEach((el) => {
      if (this.money >= el.price) {
        itemsShop.shift();
        this.items.push(el.name);
        console.log(`Я купил себе ${el.name}`);

        this.money -= el.price;
      }
    });
  }

  sayHeh() {
    const hi = String.fromCodePoint(128400);
    return `Привет${hi}, я ${this.name}, мне ${this.age} и мой рабочий стаж ${this.stage} лет.`
  }

  sayHi() {
    const rip = String.fromCodePoint(128128);

    if (this.age < this.rand) {
      return `Хай, я ${this.name}, в ${this.age} года накопил ${this.money} рублей, совершил ${this.lunch} приёмов пищи. Отработав ${this.stage} лет, у меня есть ${this.items}`;
    } else {
      return `${this.name} RIP...${rip}${rip}${rip}`
    }
  }

}

const eskobar = new Worker('Эскобар', 23, 5);
const rabota = new Work(eskobar, 30_000);

console.log(eskobar.sayHeh());

for (let i = eskobar.age; i < eskobar.rand; i++) {
  eskobar.oneYear();
  rabota.getSalary(eskobar);
  eskobar.buyItems(itemsShop);

  console.log(eskobar.sayHi());
}


