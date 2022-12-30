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

const getMostSenior = (data) => {
  const dataSort = data.slice().sort((a, b) => b.age - a.age)
  const result = [dataSort[0]]
  for(i = 0; i < 1; i++)  {
    for(j = 1; j < dataSort.length; j++)  {
      if(dataSort[i].age == dataSort[j].age)  {
        result.push(dataSort[j])
      }
    }
  }
  return result;
};

const result = getMostSenior(data);

console.log(result);
// [
//     { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]
