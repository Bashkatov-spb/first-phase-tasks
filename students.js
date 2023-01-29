/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
// Заполните классы так, чтобы при вызове методов в переменные попадал нужный результат

class Student {
  constructor(name, age, specialization) {
    this.name = name;
    this.age = age;
    this.specialization = specialization;
  }
}

class Institute {
  constructor(students = []) {
    this.students = students;
  }

  sortByAge() {
    return this.students.sort((a, b) => b.age - a.age);
  }

  takeOnlyEngineers() {
    let results = [];
    this.students.map((el) => {
      if (el.specialization === 'инженер') results.push(el);
    });
    return results;
  }

  averageAge() {
    let arr = this.students.map((el) => (el = el.age));
    let avg = arr.reduce((a, b) => a + b) / arr.length;
    return avg;
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
