/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable max-classes-per-file */
// Заполните классы так, чтобы при вызове методов в переменные попадал нужный результат

class Student {
  constructor(nickName, age, profession) {
    this.nickName = nickName;
    this.age = age;
    this.profession = profession;
  }
}

class Institute {
  constructor(arr) {
    this.arr = arr;
  }

  sortByAge() {
    return [...this.arr].sort((a, b) => a.age - b.age);
  }

  takeOnlyEngineers() {
    return this.arr.filter((el) => el.profession === 'инженер');
  }

  averageAge() {
    return this.arr.reduce((acc, el) => acc + el.age / this.arr.length, 0);
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
