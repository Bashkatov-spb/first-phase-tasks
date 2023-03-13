// Заполните классы так, чтобы при вызове методов в переменные попадал нужный результат

class Student {
  constructor(name, age, leaerningProgram){
    this.name = name
    this.age = age
    this.leaerningProgram = leaerningProgram
  }
}

class Institute {
  constructor(arrStudent=[]){
    this.arrSt = [...arrStudent]
  }
  sortByAge(arr){
    return arr.arrSt.sort(function (a, b) {
      if (a.age > b.age) {
        return 1;
      }
      if (a.age < b.age) {
        return -1;
      }
      // a должно быть равным b
      return 0;
    });
  }

  takeOnlyEngineers(arr){
    return arr.arrSt.filter((spec)=>spec.leaerningProgram==='инженер')
  }
  averageAge(arr){
    let sum = 0
     arr.arrSt.forEach(element => {
      sum += element.age
     });
     return sum / arr.arrSt.length
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
//console.log(elbrus);
//const sortedByAge = elbrus.sortByAge(elbrus); // Исходный массив менять нельзя
//const onlyEngineers = elbrus.takeOnlyEngineers(elbrus);
const averageAge = elbrus.averageAge(elbrus);

//console.log(sortedByAge); // В консоль должен быть выведен массив объектов, в котором студенты отсортированы по возрасту в порядке возрастания
//console.log(onlyEngineers); // В консоль должен быть выведен массив объектов, в котором только студенты со специальностью "инженер"
console.log(averageAge); // В консоль должен быть выведен средний возраст всех студентов
