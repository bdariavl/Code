const arr = [100, 900, 200, 800];
const arrOfObject = [{ X: 100 }, { x: 900 }, { x: 200 }, { x: 800 }];

arr.length;

arr.indexOf;
console.log(arr.indexOf(900));
arr.findIndex;

arr.includes;
console.log(arrOfObject.includes({ x: 900 }));
arr.find;

const joinedArrayStr = arr.join("");
console.log(joinedArrayStr, "result of join");
console.log([1, 2, 3, 4]);

const names = ["daryna", "oleg", "igor"];
console.log(names.join(", ").toUpperCase());

const namesStr = "daryna,oleg,igor";
const arrayNames = namesStr.split(",");
console.log(arrayNames, "split result");

for (const element of arrayNames) {
  console.log(`${element[0].toUpperCase()}${element.slice(1)}`);
}

const members = "member-1.member-2.member-3";
// Отримайте масив memberArray та виведіть лище цифру кожного member

// 1, 2, 3

const arrayMembers = members.split(".");
for (const element of arrayMembers) {
  console.log(element[element.length - 1]);
}

const arr2 = [1, 2, 3, 4, 5];
// [5, 4, 3, 2, 1]

const reversedArr2 = arr2.reverse();
console.log(reversedArr2, "reversed result", arr2);

function reversedString(str) {
  // const arr = str.split("");
  // console.log(arr);

  // const resersedArray = arr.reverse();
  // console.log(resersedArray);

  // const joined = resersedArray.join("");
  // console.log(joined);

  return str.split("").reverse().join("");
}

console.log(reversedString("hello"));
// olleh

const arr3 = [];
const arr4 = new Array(7);

arr4.fill(":)", 0, 100);
arr4.fill("-", 101, 200);

// for(let i = 0; i<1000; i = i + 1) {
//     arr4[i] = i;
// }

arr4[0] = 1;
arr4[1] = 2;

console.log(arr4);
console.log(arr3.fill("*"));

// push, pop, shift, unshift

// push - adds an element at the end of array (most common)

const arr5 = [1, 2, 3, 4, 5];
arr5[arr5.length] = 6;
const newLenght = arr5.push(7);
console.log(newLenght, "new array lenght");

// pop - remove an element from the end of array

const lastElement = arr5.pop();
arr5.pop();
arr5.pop();
console.log(arr5, lastElement);

// unshift - add new element at the start of array

arr5.unshift(0);
arr5.unshift(-1);
arr5.unshift(-2);

console.log(arr5);

// shift - removes an element of the start of array

const removedElementShift = arr5.shift();
console.log(removedElementShift, arr5);

const arr6 = ["E", "A", "B", "C"];
// Відновіть алфавітний порядок
// врахуйте, що літери D немає у масиві, але вона потрібна

arr6.shift();
arr6.push("D");
arr6.push("E");
console.log(arr6);

const arr7 = [300, 400, 100, 200, 500];
// Порахувати суму перших 3 чисел

const result = arr7.shift() + arr7.shift() + arr7.shift();

console.log(result);

const arrayOfObjects = [{ x: 10 }, { x: 7 }, { x: 2 }];
// console.log(arrOfObject[0]["y"].a);
// arrayOfObjects[2].x;
// arrayOfObjects[3].x;

for (const object of arrayOfObjects) {
  console.log(object.x, "object");
  delete object.x;
}

arrayOfObjects.push({ x: 8 });
arrayOfObjects.unshift({ x: 10 });

console.log(arrayOfObjects);

// console.log({ a: 10 } === { a: 10 }); not useful
console.log({ a: 10 }.a === { a: 10, b: 30 }.a);

const obj = {
  a: 10,
  b: 90,
  c: 50,
};

console.log(Object.keys(obj));
console.log(Object.values(obj));

const keys = Object.keys(obj);
const values = Object.values(obj);

for (const element of keys) {
  console.log(element);
}

for (let i = 0; i < keys.length; i = i + 1) {
  console.log("key:", keys[i]);
  console.log("values:", values[i]);
}

// Завдання:

const users = [
  { name: "Igor", age: 24 },
  { name: "Oleg", age: 29 },
  { name: "Alex", age: 30 },
  { name: "Joe", age: 14 },
];

// порахуйте суму всіх age користувачів

let suma = 0;

for (const element of users) {
    suma += element.age;
}

console.log(suma);