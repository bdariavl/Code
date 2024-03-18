const numbers = [1, 2, 3, 4, 5];

for (const element of numbers) {
  console.log(element);
}

// callback
numbers.forEach(function () {});

numbers.forEach((element) => console.log(element, "element from forEach"));

const fn = (a, b) => {
  return a + b;
};
function fn1(a, b) {
  return a + b;
}

console.log(fn(10, 20), fn1(30, 10));

// Завдання:
const strings = ["a", "b", "c"];
// Опишіть forEach по масиву strings

strings.forEach((element, i, arr) => console.log(element, i, arr));

const uppercasedString = strings.map((str) => {
  return str.toUpperCase();
});
console.log(uppercasedString);

const uppercasedString2 = strings
  .map((str) => str.toUpperCase())
  .forEach((str) => console.log(str));

//   Завдання:
const names = ["alex", "john", "bob"];
// трансформувати масив так, щоб кожен елемент починався з великої літери

const newName = names.map((name) => name.at(0).toUpperCase() + name.slice(1));

console.log(newName);

const arrayOfObject = [{ a: 10 }, { a: 11 }, { a: 12 }];
arrayOfObject.forEach((e) => {
  console.log(e.a);
});

const arrayOfObjectAfter = arrayOfObject.map((obj) => {
  obj.a = obj.a + 1;
  return obj;
});

console.log(arrayOfObjectAfter, "after");
console.log(arrayOfObject.map((obj) => ({ ...obj, a: obj.a + 1 })));

// Завдання:
const coords = [
  { x: 2, y: 70, z: 80 },
  { x: 10, y: 20, z: 30 },
  { x: 20, y: 70, z: 60 },
  { x: 10, y: 8, z: 30 },
];

// Трансофрмуйте масив так,
// щоб у кожного елемнта був ключ sum зі значенням суми 3 його координат

const result = coords.map((obj) => {
  obj.sum = obj.x + obj.y + obj.z;
  return obj;
});

console.log(result);

// Поверніть з масива coords масив вигляду
// [{x: 2}, {x: 10}, {x: 20}, {x: 10}]

const newCoords = coords.map((obj) => {
  return { x: obj.x };
});

console.log(newCoords);

// forEach, map - immutable
// filter

const tens = [10, 20, 30, 40, 50, 60, 1, 2, 3, 4];
const biggerThan = [];

for (const n of tens) {
  if (n > 30) {
    biggerThan.push(n);
  }
}

console.log(biggerThan);

const biggerThanWithFilter = tens.filter((number) => number > 30);
console.log(biggerThanWithFilter, "with filter");

const onlyWithZeros = tens
  .map((n) => {
    return n.toString();
  })
  .filter((str) => str.includes("0"))
  .forEach((e) => {
    console.log(+e);
  });

const users = [
  { name: "Igor", age: 24, city: "Kyiv" },
  { name: "Oleg", age: 34, city: "Kharkiv" },
  { name: "Alex", age: 12, city: "Kyiv" },
  { name: "Kate", age: 20, city: "Odessa" },
  { name: "Karina", age: 18, city: "Kyiv" },
];

const adultUser = users.filter((user) => {
  return user.age >= 18;
});

console.log(adultUser);

const adultUsersFromKyiv = users.filter((user) => {
  return user.age >= 18 && user.city === "Kyiv";
});

console.log(adultUsersFromKyiv);

// Завдання:

// 1. Поверніть користувачів, яким 18+, або які з Києва
// 2. Поверніть користувачів ім`я яких містить літеру К

const adultOrFromKyiv = users.filter((user) => {
  return user.age >= 18 || user.city === "Kyiv";
});

console.log(adultOrFromKyiv);

const includesK = users.filter((user) => {
  return user.name.includes("K");
});

console.log(includesK);

const obj = { a: 10 };
obj.a;
obj["a"];

const { a } = obj; // деструктуризація

const nums = [1, 2, 3, 4, 5, 6];
nums[0];
nums[1];

const [firstElement, secondElement] = nums;
console.log(firstElement, secondElement);

const [l1, l2, l3, l4, l5] = "hello";
console.log(l1, l2, l3, l4, l5);
