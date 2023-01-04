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
  constructor(worker, salary, koef) {
    this.worker = worker;
    this.salary = salary;
    this.koef=koef;
  }
  upexperience(worker){
   
    if (worker.stage>=5){
      this.koef = 3
    }
    if (worker.stage>=10){
      this.koef = 4
    }
    if (worker.stage>=15){
      this.koef = 5
    }
    if (worker.stage>=20){
      this.koef = 5.5
    }
    if (worker.stage>=25){
      this.koef = 6
    }
    if (worker.stage>=30){
      this.koef = 6.5
    }
    if (worker.stage>=35){
      this.koef = 7
    }
    if (worker.stage>=40){
      this.koef = 7.5
    }
    if (worker.stage>=45){
      this.koef = 7
    }
    if (worker.stage>=50){
      this.koef = 8
    }
  }
}

class Worker {
  constructor(name, age, stage, money = 50000, items=[]) {
    this.name = name;
    this.age = age;
    this.stage = stage;
    this.money = money;
    this.items = items;
    this.random = Math.floor(Math.random()*10) + 85; 
    this.die = false;
  }

sayHi(){
  if (this.age < this.random) {
  console.log(`Hello, my name is ${this.name}, i'm ${this.age}years old, have ${this.stage} year experience, have ${this.money}руб, and have ${this.items.join(', ')})}`)
} else{
  console.log(`${this.name} к сожалению умер(`)
}
}
eat(){
  this.money = this.money - 250;
}
  working(work){
    if (this.age < this.random) {
    for (let i=0; i<3; i+=1){
      this.eat();
    }
this.stage +=1;
work.upexperience(this);
    this.age += 1;
    this.money = this.money + work.salary*work.koef;
  } else {
    this.die = true;
  
  }
}


  pokupki(dreams) {
    if (this.age < this.random){
    console.log(`Могу ли купить что-то?`)
      if (this.money >= dreams[0].price){
        console.log(`Купил ${dreams[0].name}`)
        this.items.push(dreams[0].name);
        this.money -= dreams[0].price;   
        dreams.shift()   
    } else{
      console.log(`Покоплю ещё`);
    };
  } else {
    
    console.log(`${this.name} к сожалению умер(`)
  }
}
}

const konstantin = new Worker('Константин', 23, 5);
const rabota = new Work(konstantin, 30000, 1);
const dreams = [
  {
    name: 'NewPhone',
    price: 50000,
  },
  {
    name: 'Tablet',
    price: 60000,
  },
  {
    name: 'Fridge',
    price: 70000,
  },
  {
    name: 'TV',
    price: 80000,
  },
  {
    name: 'Motocicle',
    price: 450000,
  },
  {
    name: 'Car',
    price: 1500000,
  },
  {
    name: 'Apartment',
    price: 8000000,
  },
  {
    name: '2nd live',
    price: 1000000000,
  }
]


for (let i=0; i<120; i+=1){
  if (!konstantin.die){
konstantin.working(rabota);
konstantin.pokupki(dreams);
konstantin.sayHi();
  }
}