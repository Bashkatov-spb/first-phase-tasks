// Заполните классы так, чтобы при вызове методов в переменные попадал нужный результат

class Student {
  // твой код тут
  constructor(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
  }

}



class Institute {
  // твой код тут

  constructor(student) {
    this.student = student;
  }

  sortByAge() {
    const newElb = this.student.slice();
    return newElb.sort((a, b) => b.age - a.age);
  }

  takeOnlyEngineers() {
    return this.student.filter((el) => el.profession === "инженер");
  }

  averageAge() {
    // let averAge = 0;
    // this.student.map((el) => averAge += el.age)
    // return averAge / this.student.length;

    return this.student.reduce((acc, el) => el.age + acc, 0) / this.student.length;
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
