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
  constructor(name, age, stage, money = 0, items = []) {
    this.name = name;
    this.age = age;
    this.stage = stage;
    this.money = money;
    this.items = items;
    this.countDiners = 0;
    this.random = Math.floor(Math.random() * 10) + 82;
    this.die = false;
  }

  sayHi() {
    if (this.age < this.random) {
      console.log(
        `Hello, my name is ${this.name}, i am ${this.age} years old, my stage is ${this.stage} i have ${this.money} money and ${this.items}`
        );
    } else {
      console.log(`${this.name} ...`)
    }
  }
  eatFood () {
    this.countDiners ++;
    this.money = this.money - 100;
  }

  working(parametr) {
    if (this.age < this.random) {
      for (let i = 0; i < 3; i++) {
        this.eatFood();
      }
      this.age += 1;
      this.stage += 0.5;
      this.money += parametr.salary * this.stage;
    } else {
      this.die = true;
    }
  }
  
  wonderful(dreams) {
    if (this.age < this.random) {
      dreams.forEach((item) => {
        if (this.money >= item.price) {
          console.log(`Ура! ${this.name} купил ${item.name}`);
          dreams.shift();
          this.items.push(item.name);
          this.money -= item.price;
        }
      })
    }
  }
}

const dreams = [
  {
    name: 'Iphone',
    price: 120_000,
  },
  {
    name: 'MacBook',
    price: 170_000,
  },
  {
    name: 'Mersedec',
    price: 1_800_000,
  },
  {
    name: 'Penthouse',
    price: 3_200_000,
  },
]

const kostantin = new Worker('Константин', 23, 5, 0, []);
const rabota = new Work(kostantin, 30_000);

for (let i = 0; i < 135; i++) {
  if(!kostantin.die) {
      kostantin.sayHi(); 
      kostantin.working(rabota);
      kostantin.eatFood();
      kostantin.wonderful(dreams);
    } else {
      kostantin.sayHi();
    }
  }