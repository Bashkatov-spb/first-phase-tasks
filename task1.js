const data = [
  {
    firstName: 'Gabriel',
    lastName: 'X.',
    country: 'Monaco',
    continent: 'Europe',
    age: 49,
    language: 'PHP',
  },
  {
    firstName: 'Odval',
    lastName: 'F.',
    country: 'Mongolia',
    continent: 'Asia',
    age: 38,
    language: 'Python',
  },
  {
    firstName: 'Emilija',
    lastName: 'S.',
    country: 'Lithuania',
    continent: 'Europe',
    age: 19,
    language: 'Python',
  },
  {
    firstName: 'Sou',
    lastName: 'B.',
    country: 'Japan',
    continent: 'Asia',
    age: 49,
    language: 'PHP',
  },
  {
    firstName: 'John',
    lastName: 'L.',
    country: 'Tokio',
    continent: 'Asia',
    age: 49,
    language: 'Java',
  },
];

// Необходимо вернуть массив, содержащий самого старшего человека в списке. Если несколько людей имеют одинаковый наибольший возраст, то нужно вернуть массив, содержащий их всех.

const getMostSenior = (arr) => {
//   let arr2 = arr.map(el => Number(el.age));
//   let a = Math.max(...arr2);
// return arr.filter(el => Number(el.age) === a);
  const resultArr = arr
    .filter(
      (el) => el.age === Math.max(...arr.map(el => Number(el.age)))
    );
    return resultArr;
  // твой код тут
};



const result = getMostSenior(data);

console.log(result);
// [
//     { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
//     { firstName: 'John', lastName: 'L.', country: 'Tokio', continent: 'Asia', age: 49, language: 'Java' },
// ]
