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
const magazine = [{name: 'iphone', price: 100_000}, {name: 'mac', price: 200_000}, {name: 'BMW', price: 1_000_000}, {name: 'flat', price: 10_000_000}, {name: 'cottage', price: 20_000_000}, {name: 'rich life', price: 1_000_000_000}]

class Work {
  constructor(worker, salary) {
    this.worker = worker;
    this.salary = salary;
  }
}

class Worker {
  constructor(name, age, stage, money = 0, items = [], random) {
    this.name = name;
    this.age = age;
    this.stage = stage;
    this.money = money;
    this.items = items;
    this.random = Math.floor(Math.random() * (90 - 55) + 55)
  }

  // (имя, стаж, наличие денег, имущество)
  sayHi()  {
    console.log(`I'm ${this.name}, my age is ${this.age}, i have ${this.money} money, and i ${this.myItem()}`)
  }

  premium()  {
    if(this.stage < 5)  {
      return 1.0
    }
    if(this.stage > 5)  {
      return 1.25
    }
    if(this.stage > 10)  {
      return 1.50
    }
    if(this.stage > 15)  {
      return 1.75
    } else {
      return 2.0
    }
  }

  myItem()  {
    if(this.items.length == 0)  {
      return `don't have any items`
    } else {
      return `have ${this.items.join(', ')}`
    }
  } 

  oneYear(work)  {
    this.age += 1;
    this.stage += 1;
    this.money += (work.salary * 12 * this.premium()); //зарплата за год
    this.money -= 120000; //ежегодные траты на еду
    if(magazine[0].price <= this.money)  {
      this.money -= magazine[0].price
      this.items.push(magazine[0].name)
      magazine.shift();
    }
  }
  }


const konstantin = new Worker('Константин', 23, 5);
const rabota = new Work(konstantin, 30_000);
for(i = 0; i < 90; i++)  {
if(konstantin.age < konstantin.random)  { 
 konstantin.sayHi();
 konstantin.oneYear(rabota);
 konstantin.premium();
} else {
  console.log(`${konstantin.name} is DIED`)
}
}