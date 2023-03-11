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
const store = [
  { item: "dochik", price: 100 },
  { item: "iphone", price: 100_000 },
  { item: "car", price: 2_000_000 },
  { item: "mac", price: 250_000 },
];

class Work {
  constructor(worker, salary) {
    this.worker = worker;
    this.salary = salary;
  }
  getSalary() {
    this.worker.money += this.salary;
  }
  indexation(stage) {
    if (this.worker.stage >= 5) {
      this.salary * 1.5;
    }
    if (this.worker.stage >= 10) {
      this.salary * 3;
    } else {
      console.log("Надо работать больше!");
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
  }
  sayHi() {
    return `Привет! Меня зовут ${this.name}. Мне ${this.age}. Мой стаж работы ${this.stage} года. У меня ${this.money} рублей.  У меня есть ${this.items}`;
  }
  eat(num) {
    for (let i = 0; i < num; i += 1) {
      this.money -= 100;
    }
  }
  aging() {
    this.age += 1;
    this.stage += 1;
  }
  shoping(store) {
    for (let i = 0; i < store.length; i += 1) {
      const stuff = store[i];
      if (stuff.price <= this.money) {
        this.items.push(stuff.item);
        this.money -= stuff.price;
        store.splice(i, 1);
        break;
      }
    }
  }
  dath() {
    this.age <= 90;
  }
}

const kostantin = new Worker("Константин", 23, 5);
const rabota = new Work(kostantin, 30_000);
kostantin.shoping(store);
rabota.getSalary();
kostantin.eat(3);
console.log(kostantin.sayHi());
