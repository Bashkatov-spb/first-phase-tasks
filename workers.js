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
  #food = 300
  constructor(name, age, stage, money = 0, items = []) {
    this.name = name;
    this.age = age;
    this.stage = stage;
    this.money = money;
    this.items = items;
    this.checkDeath = false;
  }
  sayHi() {
    console.log(`Привет, меня зовут ${this.name}, мне ${this.age.toFixed(1)} лет и я работаю здесь уже ${this.stage} лет.\nУ меня есть ${this.money} рублей.\nМое имущество ${this.items}`);
  }
  
  working(work) {
    if(!this.checkDeath) {
      for(let i = 0; i < 90; i += 1) {
        this.money -= this.#food;
      }
      this.age += 0,1;
      this.stage += 0,1;
      this.money += work.salary;
      this.sayHi();
    } else {
      console.log('Thats it.');
    }
   
  }

  getOlder() {
    this.age += 1;
    if(this.age === 90) {
      this.checkDeath();
    }
  }


  buyItem(items) {
    for(let i = 0; i < items.length; i += 1) {
      if(this.money >= items[i].price) {
        this.money -= items[i].price;
        const currentItem = items.splice(i, 1)[0].item;
        this.items.push(currentItem);
        console.log(`Отлично! Я накопил на ${currentItem}`);
        break;
      }
    }
  }

  checkDeath() {
    const chance = Math.random();
    if(chance <= 0,1 || this.age >= 90) {
      console.log(`К сожалению ${this.name} умер от старости.`);
      return true;
    }
    return false;
  }
}



const items = [{
  item: 'iphone 14',
  price: 100000
}, {
  item: 'Porshe',
  price: 7000000
}, {
  item: 'House',
  price: 20000000
}];

const kostantin = new Worker('Константин', 23, 5);
const rabota = new Work(kostantin, 30_000);
console.log(kostantin);