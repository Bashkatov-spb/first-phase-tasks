// Заполните классы так, чтобы при вызове методов в переменные попадал нужный результат

class Student {
  constructor (name, age, work) {
    this.name = name;
    this.age = age;
    this.work = work;
  }
}

class Institute {
  constructor (nameInst) {
    this.nameInst = [...nameInst];
  }
  sortByAge () {
    return this.nameInst.sort((a, b) => a.age - b.age);
  };
  takeOnlyEngineers() {
    const result = this.nameInst.filter((el) => el.work === 'инженер');
    return result;
  };
  averageAge() {
    const result = this.nameInst.reduce((acc, val) => acc + val.age, 0);
    return result / this.nameInst.length;
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
