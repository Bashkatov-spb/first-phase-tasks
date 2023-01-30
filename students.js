// Заполните классы так, чтобы при вызове методов в переменные попадал нужный результат

const { age } = require("random-profile-generator");

class Student {
  constructor(name, age, prof) {
    this.name = name;
    this.age = age;
    this.prof = prof;
  }
}

class Institute {
  constructor(all = []) {
    this.all = all;
  }
  sortByAge() {
    return this.all.sort((a, b) => a.age - b.age);
  }
  takeOnlyEngineers() {
    return this.all.filter((el) => el.prof === "инженер");
  }
  averageAge() {
    return this.all.reduce((accum, el) => accum + el.age, 0)/this.all.length;
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
