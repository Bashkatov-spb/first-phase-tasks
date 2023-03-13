// Заполните классы так, чтобы при вызове методов в переменные попадал нужный результат

class Student {
  constructor(name, age, proffession) {
    this.name = name;
    this.age = age;
    this.proffession = proffession;
  }
}

class Institute {
  constructor(arr = []) {
    this.arr = arr;
  }
  sortByAge() {
    const newarr = this.arr.slice();
    return newarr.sort((a, b) => a.age - b.age);
    // console.log(newarr);
  }
  takeOnlyEngineers() {
    return this.arr.filter((el) => el.proffession === "инженер");
  }
  averageAge() {
    return this.arr.reduce((acc, a) => acc + a.age, 0) / this.arr.length;
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
console.log(elbrus);
const sortedByAge = elbrus.sortByAge(); // Исходный массив менять нельзя
const onlyEngineers = elbrus.takeOnlyEngineers();
const averageAge = elbrus.averageAge();

console.log(sortedByAge); // В консоль должен быть выведен массив объектов, в котором студенты отсортированы по возрасту в порядке возрастания
console.log(onlyEngineers); // В консоль должен быть выведен массив объектов, в котором только студенты со специальностью "инженер"
console.log(averageAge); // В консоль должен быть выведен средний возраст всех студентов
