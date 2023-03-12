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
  checkStage(worker) {
    if (worker.stage >= 5 && worker.stage < 10) {
      this.salary = 45_000;
    }
    if (worker.stage >= 10 && worker.stage < 15) {
      this.salary = 65_000;
    }
    if (worker.stage >= 15) {
    this.salary = 85_000;
    }
  }
} 
const shop = [
  {
  item: 'компьютер',
  cost: 110_000,
  },
  {
    item: 'уаз патриот',
    cost: 3_500_000,
    },
    {
      item: 'квартира в центре недалеко от работы',
      cost: 37_500_000,
      },
]

class Worker {
  #food = 400;
  constructor(name, age, stage, money = 0, items = []) {
    this.name = name;
    this.age = age;
    this.stage = stage;
    this.money = money;
    this.items = items;
    this.isDead = false;
  }

  sayHi(){
    console.log(`Привет! Меня зовут ${this.name}, мне ${this.age.toFixed(1)} лет и у меня ${this.money}р а еще у меня есть ${[...this.items]}`) 
  }

  working(work) {
    if (!this.isDead) {
      for (let i = 0; i < 90; i += 1) {
         this.money -= this.#food;
      }
     this.age += 0.1;
     this.stage += 0.1;
     this.money += work.salary;
     this.sayHi();
     if (this.age > 80) {
      this.isDead = Math.random() >= 0.9;
     }
    }else{
    console.log ('R.I.P.');
    }
  }
  shopping(shop) {
    for (let i = 0; i < shop.length; i += 1) {
      if (this.money >= shop[i].cost) {
        this.money -= shop[i].cost;
        const currentItem = shop.splice(i, 1)[0].item;
        this.items.push(currentItem);
        console.log(`=================я накопил на ${currentItem}===================`);
        break;
      }
    }
  }
}

const kostantin = new Worker('Константин', 23, 5_000);
const rabota = new Work('Вкусно_И_Точка', 30_000);


for (let i = 0; i < 600; i += 1) {
  kostantin.working(rabota);
  rabota.checkStage(kostantin);
  kostantin.shopping(shop);
}
kostantin.sayHi();
