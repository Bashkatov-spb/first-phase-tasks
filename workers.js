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
  salaryForMonth() {
    for (let i = 0; i <= this.worker.stage; i += 5) {
      this.worker.money += i * 1000;
    }
    this.worker.money += this.salary;
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
    return `Добрый день! Меня зовут ${this.name}. Мне ${
      this.age
    } года. Мой стаж работы ${this.stage} лет. Наличие денег ${
      this.money
    } рублей. Владею имуществом ${this.items.reduce(
      (a, b) => a + " " + b.title,
      ""
    )}`;
  }
  meal(n) {
    for (let i = 0; i < n; i += 1) this.money -= 150;
  }
  again() {
    this.age += 1;
    this.stage += 1;
  }
  buy(item) {
    if (this.money >= item.price) {
      this.money -= item.price;
      this.items.push(item);
    }
  }
  diad() {
    this.age < 100;
  }
}
class Item {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
}

const kostantin = new Worker("Константин", 23, 5);
const rabota = new Work(kostantin, 30_000);
const tv = new Item("Телевизор", 10000);
const table = new Item("Стол", 10000);
rabota.salaryForMonth();
kostantin.meal(3);
kostantin.buy(tv);
kostantin.buy(table);
kostantin.again();
console.log(kostantin.sayHi());
