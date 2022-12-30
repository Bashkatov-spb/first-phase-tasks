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

  checkStage() {
  if (this.worker.stage === 3) {
  this.salary+=5000}
  if (this.worker.stage === 6) {
  this.salary+=5000}
  if (this.worker.stage === 9) {
  this.salary+=5000}
  if (this.worker.stage === 12) {
  this.salary+=5000}
  if (this.worker.stage === 15) {
  this.salary+=5000}
  if (this.worker.stage === 18) {
  this.salary+=5000}
  if (this.worker.stage === 21) {
  this.salary+=5000}
  if (this.worker.stage === 22) {
  this.salary+=5000}
  if (this.worker.stage === 25) {
  this.salary+=5000}
  if (this.worker.stage === 28) {
  this.salary+=5000}
  if (this.worker.stage === 31) {
  this.salary+=5000}
  if (this.worker.stage === 33) {
  this.salary+=5000}
  if (this.worker.stage === 36) {
  this.salary+=5000}
  if (this.worker.stage === 39) {
  this.salary+=5000}
  if (this.worker.stage === 42) {
  this.salary+=5000}
    if (this.worker.stage === 45) {
      this.salary+=5000}
  }
}

class Worker {
  constructor(name, age, stage, money = 0, items = [], work) {
    this.name = name;
    this.age = age;
    this.stage = stage;
    this.money = money;
    this.items = items;
    this.work = work
    this.purchases = [
      {
        name: 'iphone 12',
        price: 70000
      },
      {
        name: 'macbook',
        price: 100000
      },
      {
        name: 'Kia Rio',
        price: 700000
      },
      {
        name: 'Жена',
        price: 2000000
      },
      {
        name: 'Квартира',
        price: 10_000_000
      }
    ]
    this.isDeath = false
  }

  sayHi () {
     if (!this.isDeath) {
       console.log(`Привет меня зовут ${this.name}, мне ${this.age}, мой стаж: ${this.stage} лет, у меня в кошельке ${this.money}, и я имею ${this.items.join(', ')}`)
     }
  }

  start () {
    const ageDeath = Math.floor(Math.random() * 25 + 40) + this.age
    while (this.age !== ageDeath && !this.isDeath) {
      this.age++
      this.stage++
      this.work.checkStage()
      this.oneYear()
    }
    this.theEnd()
  }

  oneYear() {
    let month = 0
    while (month !== 12) {
      this.oneMonth()
      month++
    }
  }

  oneMonth() {
    this.money += this.work.salary
    this.oneWeek()
    this.oneWeek()
    this.oneWeek()
    this.oneWeek()
  }

  oneWeek() {
    this.oneWorkDay()
    this.oneWorkDay()
    this.oneWorkDay()
    this.oneWorkDay()
    this.oneWorkDay()
    this.oneHolyday()
    this.oneHolyday()
  }

  oneWorkDay() {
    this.randomDeath()
    this.sayHi()
    this.driving()
    this.breakfast()
    this.lunch()
    this.driving()
    this.dinner()
  }

  oneHolyday() {
    this.randomDeath()
    this.sayHi()
    this.breakfast()
    this.driving()
    this.shopping()
    this.driving()
    this.dinner()
  }

  breakfast () {
    this.money -= 150
    this.randomDeath()
  }

  lunch () {
    this.money -= 250
    this.randomDeath()
  }

  dinner () {
    this.money -= 300
    this.randomDeath()
  }

  driving () {
    this.money -= 100
    this.randomDeath()
  }

  shopping() {
    if (this.purchases.length > 0 && this.money - this.work.salary > this.purchases[0].price) {
      this.items.push(this.purchases[0].name)
          this.purchases.shift()
    }
  }

  // сдеалал шанс смерти меньше, а то не доживает до 30  :)
  randomDeath () {
    if (Math.floor(Math.random() * 50000) + 1 === 666) {
      this.isDeath = true
    }
  }

  theEnd () {
    console.log(`${this.name} умер в возрасте ${this.age}. оставил после себя: ${this.items.join(', ')}`)
  }

}

const konstantin = new Worker('Константин', 23, 5);
const rabota = new Work(konstantin, 30_000);
konstantin.work = rabota

konstantin.start()
