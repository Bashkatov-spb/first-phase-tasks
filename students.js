// Заполните классы так, чтобы при вызове методов в переменные попадал нужный результат

class Student {
  // твой код тут
}

class Institute {
  // твой код тут
}

// Код ниже менять нельзя

const elbrus = new Institute([
  new Student('Фёдор', 43, 'экономист'),
  new Student('Игнат', 25, 'инженер'),
  new Student('Ибрагим', 31, 'инженер'),
  new Student('Марфа', 18, 'врач'),
  new Student('Евдокия', 33, 'инженер'),
]);

const sortedByAge = elbrus.sortByAge(); // Исходный массив менять нельзя
const onlyEngineers = elbrus.takeOnlyEngineers();
const averageAge = elbrus.averageAge();

console.log(sortedByAge); // В консоль должен быть выведен массив объектов, в котором студенты отсортированы по возрасту в порядке возрастания
console.log(onlyEngineers); // В консоль должен быть выведен массив объектов, в котором только студенты со специальностью "инженер"
console.log(averageAge); // В консоль должен быть выведен средний возраст всех студентов
