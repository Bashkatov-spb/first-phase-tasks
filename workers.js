/* Перед вами 2 класса, которые нужно заполнить методами:
  1. Выплаты работнику, оклад 30_000, надбавки разные (относительно стажа разный уровень ЗП)
  2. sayHi для работника, где он здоровается и рассказывает о себе (имя, стаж, наличие денег, имущество)
  3. Походы на работу (необходимо реализовать максимально приближенный к реальности цикл, 
         3 приема пищи, старение раз в год, около 240 походов на работу в год)

  Реализуй: 
  1. Старение работника
  2. Необходимость приёма пищи 
  3. Покупка имущества, если на него хватает денег (для имущества создай массив объектов)
  4. Смерть работника от старости, либо шанс 0.1% 
*/

const magaz = [{item:'fone', price:10000}, {item:'car', price:2000000}, {item:'house', price: 25000000}];


class Work {
  constructor(worker, salary) {
    this.worker = worker;
    this.salary = salary;
    this.worker.jobe=this;
  }

   workerLive(){
   
this.worker.live();

   };

salaryByStage(){
  this.worker.stage > 6 ? this.salary = 60000 : false;
  this.worker.stage > 10 ? this.salary = 100000 : false;
}

}

class Worker {
  constructor(name, age, stage, money = 0, items = []) {
    this.name = name;
    this.age = age;
    this.stage = stage;
    this.money = money;
    this.items = items;
    this.isDead = false;
  }

  sayHi(){
    console.log(`Hi, ${this.name},my age${this.age}, my jobe stage ${this.stage}, my money ${this.money}, i have ${this.items.join(' ')} ich bin trup.`)
  }

   shoping(mag){
for(let i=0 ; i<mag.length; i++){
  const item = mag[i];
  if(item.price<=this.money){
    this.items.push(item.item+',');
    this.money-=item.price;
    mag.splice(i,1);
    break;
  }
};
   }

rip(){

  const deadChanse = Math.floor(Math.random()*1000);

deadChanse === 999 || (this.age>=70 && deadChanse<200) ? this.isDead=true : false;
return this.isDead ;

}

eat(){
 this.zavtrak();
 this.obed();
 this.uzhin();
}


zavtrak(){
  this.money -= 200;
}

obed(){
  this.money -= 500;
}

uzhin(){
  this.money -= 300;
}

live(){

for(let i=0; i<10000000; i++){


this.eat();
if(i%30===0){ this.money+=this.jobe.salary; this.shoping(magaz);};
if(i%365===0){  if(this.rip()){return this.sayHi();}; this.age++; this.stage++; this.jobe.salaryByStage();};


};

};


}

const kostantin = new Worker('Константин', 23, 5);
const rabota = new Work(kostantin, 30_000);



rabota.workerLive()

