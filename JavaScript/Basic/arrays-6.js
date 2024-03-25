// reduce
const numbers = [1, 2, 3, 4, 5];
const reducedSum = numbers.reduce((acc, n) => (acc += n), 0);
// (callback, initialAcc)

console.log(reducedSum, "reducedSum");

function customReduce(arr, callback, initialAcc) {
  let acc = initialAcc;

  for (let i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr);
  }

  return acc;
}

const cutomReducedSum = customReduce(
  numbers,
  (acc, n) => {
    return (acc = acc + n);
  },
  0
);
console.log(cutomReducedSum, "customReducedSum");

// sort
const items = [4, 1, 9, 2, 3, 5];
// console.log(items.sort(), "sorted");

console.log(
  items.sort((e1, e2) => e1 - e2),
  "sorted"
);

const words = ["b", "x", "r", "u", "p"];
console.log(
  words.sort((l1, l2) => l1.localeCompare(l2)),
  "sorted words"
);

console.log("a".localeCompare("b"));

// Завдання:
const fruits = ["banana", "apple", "pineapple", "melon"];
// відсортувати fruits за алфавітом

console.log(fruits.sort((el1, el2) => el1.localeCompare(el2)));

const numbers2 = [60, 39, 34, 20, 80, 10, 22, 87];
// відсортувати числа  у порядку зростання

console.log(numbers2.sort((n1, n2) => n1 - n2));

const values = [{ a: 10 }, { a: 40 }, { a: 10 }, { a: 50 }, { a: 10 }];

const sortedValues = values.sort((obj1, obj2) => {
  return obj1.a - obj2.a;
});

console.log(sortedValues);

const objectsStrings = [
  { name: "Igor" },
  { name: "Oleg" },
  { name: "Alex" },
  { name: "Nastya" },
];

const sortedUsersWithNames = objectsStrings.sort((obj1, obj2) =>
  obj1.name.localeCompare(obj2.name)
);

console.log(sortedUsersWithNames);

// Завдання
// Розташуйте елементи у зворотньому до алфавітного порядку

console.log(
  objectsStrings.sort((obj1, obj2) => obj2.name.localeCompare(obj1.name))
);

const users2 = [
  { name: "Igor", age: 24, isAdmin: true },
  { name: "Oleg", age: 20, isAdmin: true },
  { name: "Alex", age: 30, isAdmin: false },
  { name: "Nastya", age: 24, isAdmin: false },
];

const sortedUsers2 = users2.sort((user1, user2) => {
  const cr1 = user1.age - user2.age;
  const cr2 = user1.name.localeCompare(user2.name);
  const cr3 = user1.isAdmin ? 1 : -1;

  return cr1 || cr2 || cr3;
});

console.log(sortedUsers2, "sortedUsers2");

const cities = [
  {
    name: "New York City",
    population: 8398748,
    rating: 4.5,
  },
  {
    name: "Los Angeles",
    population: 3990456,
    rating: 4.3,
  },
  {
    name: "Chicago",
    population: 2705994,
    rating: 4.2,
  },
  {
    name: "Houston",
    population: 2320268,
    rating: 4.1,
  },
  {
    name: "Phoenix",
    population: 1680992,
    rating: 4.0,
  },
  {
    name: "Philadelphia",
    population: 1584064,
    rating: 4.4,
  },
  {
    name: "San Antonio",
    population: 1547253,
    rating: 4.0,
  },
  {
    name: "San Diego",
    population: 1425976,
    rating: 4.6,
  },
  {
    name: "Dallas",
    population: 1343573,
    rating: 4.2,
  },
  {
    name: "San Jose",
    population: 1030119,
    rating: 4.7,
  },
];

// Завдання:
// відсортувати масив міст за критеріями:
// 1. rating
// 2. population
// 3. name - алфавітно

const sortedCities = cities.sort((city1, city2) => {
  const rating = city2.rating - city1.rating;
  const population = city2.population - city1.population;
  const name = city1.name.localeCompare(city2.name);

  return rating || population || name;
});

console.log(sortedCities);

// splice

const elements = ["first", "second", "fourth"];

// splice(startIndex, quantityOfElementsToDelete,  items...)
elements.splice(2, 0, "third");

console.log(elements, "elements");

const deletedElements = elements.splice(0, 4, "1", "2", "3", "4");
console.log(deletedElements, "deleteElements");

console.log(elements, "elements");