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


const shop = [
  {
    name: 'гараж',
    price: 30000
  },
  {
    name: ' офис',
    price: 5000000
  },
  {
    name: ' завод',
    price: 100000000
  },
  {
    name: ' остров с пальмой',
    price: 1500000000
  }
] 

class Work {
  constructor(worker, salary) {
    this.worker = worker;
    this.salary = salary;
  }

  upSalary(worker) {
    worker.money += this.salary * 12
    if (worker.stage >= 2) {
      this.salary += 20000
    }
    if (worker.stage >= 5) {
      this.salary += 30000
    }
    if (worker.stage >= 8) {
      this.salary += 50000
    }
    if (worker.stage >= 12) {
      this.salary += 70000
    }
    if (worker.stage >= 15) {
      this.salary += 100000
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
    this.random = Math.round(Math.random() * 10) + 70
    }

    buyItems(shop) {
      shop.forEach((el) => {
        if(this.money >= el.price) {
          shop.shift()
          this.items.push(el.name)
          console.log(`я купил ${el.name}`)

          this.money -= el.price
        }
      })
    }

    year() {
      this.age += 1
      this.stage += 1
  }

  sayHi() {
    if(this.age < this.random) {
    return `Привет, я ${this.name}, мне ${this.age}, работаю уже ${this.stage} лет, накопил ${this.money}, приобрел ${this.items}`
  } else {
    return 'Я погиб'
  }
  }
}

const Volodya = new Worker('Володя', 21, 0);
const rabota = new Work(Volodya, 30_000);

for (let i = Volodya.age; i < Volodya.random; i++) {
  Volodya.year()
  rabota.upSalary(Volodya)
  Volodya.buyItems(shop)

  console.log(Volodya.sayHi())
}


