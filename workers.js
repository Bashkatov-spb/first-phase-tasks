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
  constructor(name, age, stage = 0, money = 0, items = []) {
    this.name = name;
    this.age = age;
    this.stage = stage;
    this.money = money;
    this.items = items;
    this.Alive = true;
  }

  sayHi() {
    return `Hi, my name is ${this.name}, I have ${this.stage} years of stage, ${
      this.money
    } money and ${[
      this.items.reduce((acc, el) => `${acc + el[0].name} `, ""),
    ]}`;
  }

  live({ salary }, shop) {
    if (!this.Alive) return false;

    if (this.stage > 5 && this.stage <= 10) salary = 40000;
    if (this.stage > 10 && this.stage <= 20) salary = 60000;
    if (this.stage > 20) salary = 80000;

    const meal = 300;
    const medicine = 3000;
    const housingUtilities = 10000;
    const other = 10000;

    for (let i = 1; i <= 240; i += 1) {
      if (i % 30 === 0) {
        this.money += salary;
        this.money -= medicine + housingUtilities + other;
      }
      this.money -= meal * 3;
    }

    shop.forEach((el) => {
      if ((this.money = el.price)) {
        this.money -= el.price;

        this.items.push(shop.splice(el, 1));
      }
    });

    this.age += 1;
    this.stage += 1;
    if (this.age === 70) this.Alive = false;
    if (Math.random() > 0.99) this.Alive = false;

    this.live(rabota, shop);
  }
}

const kostantin = new Worker("Константин", 23, 5);
const rabota = new Work(kostantin, 30_000);
const shop = [
  { name: "NewСlothing", price: 30000 },
  { name: "TV", price: 100_000 },
  { name: "laptop", price: 110_000 },
  { name: "Iphone", price: 150_000 },
  { name: "NewIphone", price: 150_000 },
  { name: "NewIphonePlus", price: 150_000 },
  { name: "NewIphonePlusMinus", price: 150_000 },
  { name: "NewIphonePlusMinusPinus", price: 150_000 },
  { name: "Furniture", price: 300_000 },
  { name: "NewCar", price: 10_000_000 },
  { name: "NewHouse", price: 30_000_000 },
];

kostantin.live(rabota, shop);

console.log(kostantin);

console.log(kostantin.sayHi());
