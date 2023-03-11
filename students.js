class Student {
  constructor(name, age, stady) {
    this.name = name;
    this.age = age;
    this.stady = stady;
  }
}

class Institute {
  constructor(students = []) {
    this.students = students;
  }
  sortByAge() {
    return this.students.sort((a, b) => a.age - b.age);
  }
  takeOnlyEngineers() {
    return this.students.filter((el) => el.stady === "инженер");
  }
  averageAge() {
    let res = 0;
    const count = this.students.length;
    res = this.students.reduce((acc, el) => acc + el.age, 0);
    return Math.floor(res / count);
    //return Math.floor(this.students.reduce((acc, el) => acc + el.age, 0)/ this.students.length)
  }
}

// Код ниже менять нельзя

const elbrus = new Institute([
  new Student("Жмотяра", 43, "экономист"),
  new Student("Петушара", 25, "инженер"),
  new Student("Козлина", 31, "инженер"),
  new Student("Сопляк", 11, "какулегенератор"),
  new Student("Алкаш", 33, "инженер"),
]);

const sortedByAge = elbrus.sortByAge(); // Исходный массив менять нельзя
const onlyEngineers = elbrus.takeOnlyEngineers();
const averageAge = elbrus.averageAge();

console.log(sortedByAge); // В консоль должен быть выведен массив объектов, в котором студенты отсортированы по возрасту в порядке возрастания
console.log(onlyEngineers); // В консоль должен быть выведен массив объектов, в котором только студенты со специальностью "инженер"
console.log(averageAge); // В консоль должен быть выведен средний возраст всех студентов
