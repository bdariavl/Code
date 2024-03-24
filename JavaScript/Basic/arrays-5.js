const arr = [10, 20, 30, 40];

const forty = arr.find((n) => n === 40);
// undefined

const indexOfForty = arr.findIndex((element) => element === 50);
// -1
console.log(forty, indexOfForty, arr[indexOfForty], arr[-1]);
console.log(Boolean(-1));

// Don't do this
if (indexOfForty) {
}

if (forty) {
  // do the job
} else {
  // do something to not fail
}

if (indexOfForty !== -1 && arr[indexOfForty]) {
  // do the job
}

// []
[1, 2, 3, 4, 5].filter((e) => e > 10);

// foreach
// filter
// every
// some
// find
// findIndex
// map

// reduce
// splice
// sort

// FIND INDEX
const primitives = [1, 2, 3, 4, 5, 6];
const objects = [{ a: 10 }, { a: 20 }, { a: 10 }, { a: 40 }];

// indexOf
// findIndex

console.log(primitives.indexOf(4));
// Won`t wokr
// console.log(objects.findIndex({ a: 10 }));
// Will work
console.log(objects.findIndex((obj) => obj.a === 10));

const elements = [
  { id: 1, title: "Title 1", value: 90 },
  { id: 2, title: "Title 2", value: 10 },
  { id: 3, title: "Title 3", value: 55 },
  { id: 4, title: "Title 4", value: 90 },
  { id: 5, title: "Title 5", value: 20 },
];

// 1. Знайти індекс елемента з title Title3
// 2. Знайти всі елементи з value більше за 10

console.log(elements.findIndex((element) => element.title === "Title 3"));

console.log(elements.filter((element) => element.value > 10));

// reduce

// [1, 2, 3, 4, 5, 6] => 21
// [{a: 10}, {a: 90}, {a: 6}] => [10, 90, 6]
// [{a: 90}, {a: 10}, {a: 50}, {a: 10}] => {a: 160}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const sum = numbers.reduce((acc, element, i, arr) => {
  return acc + element;
}, 0);

console.log(sum, "sum");

const arrayOfObjects = [{ a: 10 }, { a: 90 }, { a: 6 }];
const reduced = arrayOfObjects.reduce((acc, obj, index) => {
  acc[index] = obj.a;
  // another way
  // acc.push(obj.a);
  return acc;
}, []);

console.log(reduced);

const sumAsObject = arrayOfObjects.reduce(
  (acc, object) => {
    acc.a = acc.a + object.a;

    return acc;
  },
  { a: 0 }
);

console.log(sumAsObject);

// Завдання
const elements2 = [10, "20", 50, "10", 80, 20, "90"];
// порахуйте суму лише значень типу number (typeof)

const sumOfNumbers = elements2.reduce((acc, number) => {
  if (typeof number === "number") {
    acc = acc + number;
  }

  return acc;
}, 0);

console.log(sumOfNumbers);

// Завдання
// ** Напишіть свій reduce

// поверніть на базі масива elements2 наступний object:
// {numbers: 160, strings: 120}

const newObjOfArray = elements2.reduce(
  (acc, element) => {
    if (typeof element === "number") {
      acc.numbers = acc.numbers + element;
    } else if (typeof element === "string") {
      acc.strings = acc.strings + Number(element);
    }

    return acc;

    // const isNumber = typeof element === "number";
    // acc[isNumber ? "numbers" : "strings"] += Number(element);

    // return acc;
  },
  { numbers: 0, strings: 0 }
);

console.log(newObjOfArray);

// у масиві elements2 порахувати кількість елементів з
// нулями та повернути кількість методом reduce

const result = elements2.reduce((acc, element) => {
  if (element.toString().includes("0")) {
    return acc + 1;
  }

  return acc;
}, 0);

// another way
// elements2.reduce((acc, el) => (`${el}`.includes(0) ? acc++ : acc), 0);

console.log(result);

// imutable - НЕ змінюють пам'ять (оригінальні данні)
// forEach, every, filter, some, find, findIndex, toSorted, toSpliced, map

// mutable - змінюють пам'ять
// reduce, sort, splice, reduceRight
