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
      this.salary + Math.ceil((this.salary / 100) * this.worker.stage * 2));
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
      ? `Привет меня зовут ${this.name}, работаю уже ${this.stage} лет и у меня ${this.money} рублей.`
      : `Привет меня зовут ${this.name}, работаю уже ${this.stage} лет и у меня ${this.money} рублей и есть: ${this.items}`;
  }
}

const konstantin = new Worker('Константин', 23, 5);
const rabota = new Work(konstantin, 30_000);

rabota.paySalary(konstantin);

console.log(konstantin.sayHi());
