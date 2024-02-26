const obj = {
  name: "Daryna",
  age: 23,
};

const str = "Hello";

// for with iterator for (let i = 0; i < 10; i++)
// for of (for strings and arrays) for (const char of str)
// for in (FOR OBJECTS) for (const key in obj)

// for (const char of str) {
//     console.log(char);
// }

for (const key in obj) {
  console.log(obj[key]);
}

const numberObj = {
  a: 10,
  b: 10,
  c: 80,
  d: 100,
  e: 50,
  g: 0,
};

function checkValues(obj) {
  let sum = 0;

  for (const key in obj) {
    sum = sum + obj[key];
  }

  console.log(sum, "sum");

  if (sum > 50) {
    console.log(true);
  }
}

checkValues(numberObj);

// Завдання:
function decrease(obj) {
  let sum = 500;
  // відняти всі поля obj від sum та вививести те, що залишиться
  for (const key in obj) {
    sum = sum - obj[key];
  }

  console.log(sum);
}

decrease({ a: 10, b: 100, c: 200 });

// Завдання

function filterObjectValues(obj) {
  // опишіть функцію так, щоб якщо вона зустрічає значення
  // менше за 10 - вона змінювала його на undefined
  for (const key in obj) {
    if (obj[key] < 10) {
      // obj[key] = undefined;
      delete obj[key];
    }
  }
  console.log(obj);
  return obj;
}
// => {a: 11, b: undefined, c: 30 }

function canculateObjectValue(obj) {
  let sum = 0;

  for (const key in obj) {
    sum = sum + obj[key];
  }

  return sum;
}

const filterdObject = filterObjectValues({ a: 11, b: 7, c: 30 });
const sum = canculateObjectValue(filterdObject);

console.log(sum);

const obj1 = {
  a: 10,
  b: 80,
};

delete obj1.b;
delete obj1["a"];

console.log(obj1);

Object;

String;

const str1 = new String("Hello");
str1.includes();

const obj4 = { x: 50, y: 10 };

const keys = Object.keys(obj4); //повернає всі ключі об'єкта
const values = Object.values(obj4); //овернає всі значення об'єкта

console.log(keys);
console.log(values);

const obj5 = Object.create({ message: "Hello" });
console.log(obj5);

