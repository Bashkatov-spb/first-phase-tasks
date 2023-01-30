// Заполните классы так, чтобы при вызове методов в переменные попадал нужный результат
const fs = require('fs').promises;

class Student {
  // твой код тут
  constructor(name, age, specialty) {
    this.name = name;
    this.age = age;
    this.specialty = specialty;
  }
}

class Institute {
  // твой код тут
  constructor(students = []) {
    this.students = students;
  }

  sortByAge() {
    return this.students.slice().sort((a, b) => a.age - b.age);
  }
  takeOnlyEngineers() {
    return this.students.filter((el) => el.specialty === 'инженер');
  }
  averageAge() {
    return (
      this.students.reduce((sum, el) => sum + el.age, 0) / this.students.length
    );
  }
  async load() {
    const students = await (
      await fs.readFile(`${__dirname}/students.txt`, 'utf-8')
    )
      .split('\n')
      .map((el) => el.split(' '));
    // console.log(students);
    for (const student of students) {
      console.log(student);
      this.students.push(
        new Student(student[0], Number(student[1]), student[2])
      );
    }
  }
}

// Код ниже менять нельзя

const elbrus = new Institute();

elbrus.load().then(() => {
  console.log(elbrus.students);
  const sortedByAge = elbrus.sortByAge(); // Исходный массив менять нельзя
  const onlyEngineers = elbrus.takeOnlyEngineers();
  const averageAge = elbrus.averageAge();

  console.log(sortedByAge); // В консоль должен быть выведен массив объектов, в котором студенты отсортированы по возрасту в порядке возрастания
  console.log(onlyEngineers); // В консоль должен быть выведен массив объектов, в котором только студенты со специальностью "инженер"
  console.log(averageAge); // В консоль должен быть выведен средний возраст всех студентов
});
