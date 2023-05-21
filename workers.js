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
  constructor(name, age, stage, money = 5000, items = [], dead = false) {
    this.name = name;
    this.age = age;
    this.stage = stage;
    this.money = money;
    this.items = items;
    this.dead = dead;
  }

  sayHi() {
    console.log(
      `Привет, меня зовут ${this.name}! Мне ${Math.floor(
        this.age
      )} лет. У меня всего лишь ${Math.floor(
        this.money
      )} рублей. Мое имущество: ${this.items}. Мой стаж: ${Math.floor(
        this.stage
      )}`
    );
  }

  isDead() {
    if (this.age >= 70) {
      this.dead = Math.random() > 0.99 && true;
      return this.dead;
    }
    return false;
  }

  eat() {
    this.money -= this.stage * 20000;
  }

  upStage(work) {
    if (this.stage >= 5 && this.stage < 10) {
      work.salary = 60_000;
    }
    if (this.stage >= 10 && this.stage < 15) {
      work.salary = 90_000;
    }
    if (this.stage >= 15 && this.stage < 20) {
      work.salary = 120_000;
    }
  }

  working(work) {
    if (!this.isDead()) {
      this.age += 0.08333;
      this.stage += 0.1;
      this.upStage(work);
      this.money += work.salary;
    }
  }

  shopPing(item) {
    if (item.length > 0 && this.money >= item[0].cost) {
      this.items.push(item[0].title);
      this.money -= item[0].cost;
      item.shift();
    }
  }
}

const item = [
  {
    title: "Iphone 15",
    cost: 150_000,
  },
  {
    title: "MacBook Pro",
    cost: 170_000,
  },
  {
    title: "BMW x6",
    cost: 20_000_000,
  },
  {
    title: "Penthouse",
    cost: 40_000_000,
  },
];

const kostantin = new Worker("Константин", 23, 5);
const rabota = new Work(kostantin, 30_000);

for (let i = 0; i < 950; i++) {
  if (!kostantin.isDead()) {
    kostantin.sayHi();
    console.log(`я работаю ${i} месяц`);
    kostantin.working(rabota);
    kostantin.shopPing(item);
  } else {
    console.log('я умер');;
    break;
  }
}
