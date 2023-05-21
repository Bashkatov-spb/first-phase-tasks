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
  experience(worker) {
    if (worker.stage >= 5 && worker.stage < 10) {
      this.salary = 45_000;
    }
    if (worker.stage >= 10 && worker.stage < 15) {
      this.salary = 65_000;
    }
    if (worker.stage >= 15) {
    this.salary = 90_000;
    }
  }
}
const wishlist = [
  {
  item: 'ноут',
  price: 99_999,
  },
  {
    item: 'Чунг Фе Ламбо Хень',
    price: 3_499_999,
    },
    {
      item: 'халупа',
      price: 17_999_999,
      },
]
class Worker {
  #food = 500;
  constructor(name, age, stage, money = 0, items = ['мечта']) {
    this.name = name;
    this.age = age;
    this.stage = stage;
    this.money = money;
    this.items = items;
    this.dead = false;
  }

sayHi(){
  console.log(`Привет! Меня зовут ${this.name}, мне ${this.age.toFixed(1)} лет и у меня ${this.money}р а еще у меня есть ${[...this.items]}`) 
}

working(work) {
  if (!this.dead) {
    for (let i = 0; i < 90; i += 1) {
       this.money -= this.#food;
    }
   this.age += 0.1;
   this.stage += 0.1;
   this.money += work.salary;
   this.sayHi();
   if (this.age > 80) {
    this.dead = Math.random() >= 0.9;
   }
  }else{
  console.log ('Пусть земля ему будет пухом');
  }
}
shopping(wishlist) {
  for (let i = 0; i < wishlist.length; i += 1) {
    if (this.money >= wishlist[i].price) {
      this.money -= wishlist[i].price;
      const currentItem = wishlist.splice(i, 1)[0].item;
      this.items.push(currentItem);
      console.log(`\nКруто, я купил ${currentItem} !!!!!\n`);
      break;
    }
  }
}
}

const kostantin = new Worker("Константин", 23, 5);
const rabota = new Work('СельПо "Рога и Копыта"', 30_000);

for (let i = 0; i < 600; i += 1) {
  kostantin.working(rabota);
  rabota.experience(kostantin);
  kostantin.shopping(wishlist);
}
kostantin.sayHi();