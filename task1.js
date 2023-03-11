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
  const newA = []
 const newArr = [...arr].sort((a,b) => b.age - a.age)
 for (let i = 1; i < newArr.length; i+=1) {
  if(newArr[i].age === newArr[0].age){
  newA.push(newArr[i])
  }

 }
 newA.push(newArr[0])
 return newA
};

const result = getMostSenior(data);

console.log(result);
// [
//     { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
//     { firstName: 'John', lastName: 'L.', country: 'Tokio', continent: 'Asia', age: 49, language: 'Java' },
// ]