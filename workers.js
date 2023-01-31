/* Перед вами 2 класса, которые нужно заполнить методами:
  1. Выплаты работнику, оклад 30_000, надбавки разные (относительно стажа разный уровень ЗП)
  2. sayHi для работника, где он здоровается и рассказывает о себе (имя, стаж, наличие денег, имущество)
  3. Походы на работу (необходимо реализовать максимально приближенный
     к реальности цикл, 3 приема пищи, старение раз в год, около 240 походов на работу в год)

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
  monthlyPayToWorker() {
    if (this.worker.age < 65) {
      let extraPay = 0;
    const stage = this.worker.stage;
    if (stage > 5 && stage < 10) {
      extraPay = Math.ceil(1,1 * this.worker.salary);
    };
    if (stage > 10 && stage < 20) {
      extraPay = Math.ceil(1,15 * this.worker.salary);
    };
    if (stage > 20) {
      extraPay = Math.ceil(1,20 * this.worker.salary);
    }
    const allMonthlyPayment = this.salary + extraPay;
    this.worker.money += allMonthlyPayment;
    } else {
      return;
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
    console.log(
      `Hello, my name is ${this.name},
      \nI am ${this.age}, my stage is ${this.stage},
      \nmy money is ${this.money} and I have ${this.items}`
      );
  }
  passOneYear(work) {
    if(!this.isDead()) {
      const workingDays = 240;
      const EatsPerDay = 3;
      const costOfEat = 100;
      this.age += 1;
      this.money += (work.monthlyPayToWorker() * 12) + (workingDays * EatsPerDay * costOfEat);
      this.buyProperties();
    } else {
      return console.log(`Unfortunately ${this.name} is dead`)
    }
  }
  buyProperties() {
    for (let el of properties) {
      if (!this.items.includes(el) && this.money > el.cost) {
        this.items.push(el);
        this.money -= el.cost;
      }
    }
  }
  isDead() {
    const random = Math.floor(Math.random() * 1001);
    if (this.age > 100 || random === 0) {
      return true
    }
  }
}

class Property {
  constructor(type, cost) {
    this.type = type;
    this.cost = cost;
  }
}
const properties = [new Property(car, 600000), new Property(house, 3000000), new Property(childrensEducation, 600000)];

const kostantin = new Worker('Константин', 23, 5);
const rabota = new Work(kostantin, 30_000);
