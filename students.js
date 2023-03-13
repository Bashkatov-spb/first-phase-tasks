// Заполните классы так, чтобы при вызове методов в переменные попадал нужный результат

class Student {
  constructor(name, age, spec){
  this.name = name
  this.age = age
  this.spec = spec
  }
  
}
/
class Institute {
  constructor(arr=[]){
    this.arr = [...arr]
  }
  sortByAge(){
    return this.arr.sort((a, b)=>{
      if (a.age > b.age) {
        return 1;
        } else if (b.age > a.age) {
        return -1;
        } else {
        return 0;
        }
    });
  }
  takeOnlyEngineers(){
    return this.arr.filter((g)=>g.spec==='инженер')
  }
   averageAge(){
    let a = [...this.arr]
     function findAverage(acc, item, index) {
      const sum = acc + item.age
      if (index === a.length - 1) {
         return sum / a.length
      }
      return sum
    }
    const average = this.arr.reduce(findAverage, 0)
return average
   }
}

// Код ниже менять нельзя

const elbrus = new Institute([
  new Student('Жмотяра', 43, 'экономист'),
  new Student('Петушара', 25, 'инженер'),
  new Student('Козлина', 31, 'инженер'),
  new Student('Сопляк', 11, 'какулегенератор'),
  new Student('Алкаш', 33, 'инженер'),
]);

const sortedByAge = elbrus.sortByAge(); // Исходный массив менять нельзя
const onlyEngineers = elbrus.takeOnlyEngineers();
const averageAge = elbrus.averageAge();

console.log(sortedByAge); // В консоль должен быть выведен массив объектов, в котором студенты отсортированы по возрасту в порядке возрастания
console.log(onlyEngineers); // В консоль должен быть выведен массив объектов, в котором только студенты со специальностью "инженер"
console.log(averageAge); // В консоль должен быть выведен средний возраст всех студентов
