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

  }
  sayHi(){
if(this.items.length > 0){
  console.log(`Привет, я ${this.name}! Мне ${this.age}. Я работаю уже ${this.stage} лет, у меня на балансе ${this.money}р. Я имею: ${this.items}. Проел за свою жизнь ${shopCount}р`)
}
else{
    console.log(`Привет, я ${this.name}! Мне ${this.age}. Я работаю уже ${this.stage} лет, у меня на балансе ${this.money}р. Проел за свою жизнь ${shopCount}р`)
      }
    }
      job(){
        this.money+= rabota.salary + (rabota.salary / 100 * this.stage)
        this.stage+= 1
        this.age+=1
       }
       eat(){
        this.money-= 10000
        shopCount+= 10000
       }
       everyDayShoping(){
        this.money-= 5000
        shopCount+=5000
       }
}

let shopCount = 0

let itemShop = [
  {
    name: 'Пансионат',
    price: 300000,
  },
  {
    name: 'Приора',
    price: 200000,
  }
]
const kostantin = new Worker('Константин', 23, 5);
const rabota = new Work(kostantin, 30_000);
// const maxim = new Worker('Максим', 20, 0)
// const rabota = new Work(maxim, 30_000)

function life(people){
  for(let i = 0; i < 999; i ++){
    if(1 !== Math.floor(Math.random() * 100)){
      if(people.age <= 65){
    people.sayHi()
    people.job()
    people.eat()
    people.everyDayShoping()
    itemShop.map((el)=> {
    if(people.money >= el.price ){
    people.items.push(el.name)
    people.money-= el.price
    console.log(`Я купил ${el.name} и потратил ${el.price}`)
    itemShop = itemShop.filter((elStock)=> elStock !== el )
  }
   })
  }}
  if (1 === Math.floor(Math.random() * 100)){
    console.log(`${people.name} внезапно скончался :'(`)
    break
  }
  if(people.age >= 66){
    console.log(`${people.name} выходит на пенсию!`)
    break
  }
}
}

life(kostantin)