// Languages Statistic
// Реализуйте функцию getLanguagesStatistic,
// которая поможет IT журналу подвести итоги 2019 года
// по популярности использования языков программирования.
// На входе функция получает массив отзывов пользователей.
// Необходимо вернуть объект в формате
// { languageName: count, anotherLanguageName: anotherCount, ... },
// где languageName - название языка в строке,
// а count - число отзывов, которые оставили программисты, использующие этот язык.
// При этом следует учитывать только те отзывы пользователей, которые были оставлены в 2019 году.
// Год отзыва хранится в поле year, язык - в поле language.

const data = [
  {
    firstName: 'Noah',
    lastName: 'M.',
    country: 'Switzerland',
    continent: 'Europe',
    age: 19,
    language: 'C',
    year: 2019,
  },
  {
    firstName: 'Anna',
    lastName: 'R.',
    country: 'Liechtenstein',
    continent: 'Europe',
    age: 52,
    language: 'JavaScript',
    year: 2019,
  },
  {
    firstName: 'Piter',
    lastName: 'G.',
    country: 'Sweden',
    continent: 'Europe',
    age: 30,
    language: 'JavaScript',
    year: 2019,
  },
  {
    firstName: 'Ramon',
    lastName: 'R.',
    country: 'Paraguay',
    continent: 'Americas',
    age: 29,
    language: 'Ruby',
    year: 2014,
  },
  {
    firstName: 'George',
    lastName: 'B.',
    country: 'England',
    continent: 'Europe',
    age: 81,
    language: 'C',
    year: 2016,
  },
];

const getLanguagesStatistic = (arr) => {
  const arr2019 = arr.filter((el) => el.year === 2019);
  let count = {};
  for (const elem of arr2019) {
    if (count[elem.language] === undefined) {
      count[elem.language] = 1;
    } else count[elem.language] += 1;
  }
  return count;
};
const result = getLanguagesStatistic(data);

console.log(result);
// {
//   C: 1,
//   JavaScript: 2
// }
