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

  paySalary(worker) {
    return (worker.money +=
      this.salary + Math.ceil((this.salary / 100) * this.worker.stage * 3));
  }

  factoryAccident(worker) {
    console.log(worker.paidHoliday());
    return this.paySalary(worker);
  }
}

class Shop {
  constructor(firstNeeds) {
    this.firstNeeds = firstNeeds;
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
    return this.items.length === 0
      ? `Привет меня зовут ${this.name}, мне ${this.age}, работаю уже ${this.stage} лет и у меня ${this.money} рублей.`
      : `Привет меня зовут ${this.name}, мне ${this.age}, работаю уже ${this.stage} лет и у меня ${this.money} рублей и есть: ${this.items}`;
  }

  eatFood() {
    return (this.money -= 200 * 3);
  }

  spendTime() {
    return (this.age += 1);
  }

  growStage() {
    return (this.stage += 1);
  }

  paidHoliday() {
    return `Ушел в оплачиваемый отпуск на 14 дней.`;
  }

  want_to_buy(shop, wish) {
    shop.firstNeeds.forEach((el) => {
      if (el.item === wish && this.money >= el.cost) {
        this.items.push(el.item);
        el.pisces -= 1;
        this.money -= el.cost;
      }
    });
  }

  drink_weekend(wish) {
    this.items = this.items.filter((el) => el !== wish);
  }

  smoke(wish) {
    this.items = this.items.filter((el) => el !== wish);
    return Math.floor(Math.random() * 10_000);
  }
}

const konstantin = new Worker('Константин', 23, 5);
const rabota = new Work(konstantin, 30_000);
const at_krasnoeBeloe = new Shop([
  {
    item: 'vodka',
    cost: 230,
    pisces: 100,
  },
  {
    item: 'beer',
    cost: 50,
    pisces: 1_000,
  },
  {
    item: 'cigarets',
    cost: 100,
    pisces: 10_000,
  },
  {
    item: 'redbull',
    cost: 180,
    pisces: 1_000,
  },
]);

for (let i = 0; i < 25_000; i += 1) {
  if (i % 2 === 0) {
    konstantin.want_to_buy(at_krasnoeBeloe, 'cigarets');
  }
  if ((i + 1) % 2 === 0) {
    let chanceToDie = konstantin.smoke('cigarets');
    if (chanceToDie === Math.floor(Math.random() * 100_000)) {
      i += Infinity;
      console.log(`${konstantin.name} умер от сигарет!`);
    } else {
      console.log('Живем дальше..');
    }
  }
  if (i % 5 === 0 && i !== 0) {
    konstantin.want_to_buy(at_krasnoeBeloe, 'vodka');
  }
  if ((i + 3) % 5 === 0) {
    i += 2;
    konstantin.drink_weekend('vodka');
  }
  if (Math.floor(Math.random() * 10_000) === 777) {
    i += 14;
    rabota.factoryAccident(konstantin);
  }

  if (i % 30 === 0) {
    rabota.paySalary(konstantin);
  }
  if (i % 365 === 0) {
    konstantin.spendTime();
    konstantin.growStage();
  }
  konstantin.eatFood();
  console.log(konstantin.sayHi());
}
