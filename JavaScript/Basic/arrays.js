const str = "Hello";

Array;

// empty array
const array = [];
const str2 = new String("0123456789");
console.log(str2);

// чисті масиви
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const strings = ["H", "e", "l", "l", "o"];
const booleans = [true, false, true, true];

// так не варто робити(в масиві повінна бути спорідненна інформація)
const mixed = [1, true, "Hello", 100, 7];

console.log(numbers);
console.log(numbers[0], numbers[8]);
console.log(numbers.length);

console.log("1234".includes("1234"));
console.log(numbers.includes(4));

// Завдання:

const arr1 = ["Hello", "World", "Coding", "JavaScript"];
// Перевірте, чи є в arr1 елементи: "Hello", "JavaScript", "Admin"

console.log(arr1.includes("Hello"));
console.log(arr1.includes("JavaScript"));
console.log(arr1.includes("Admin"));

console.log(numbers.slice(0, 5));
console.log("0123456789".slice(0, 5));

console.log(numbers.at(-1), numbers[1]);

console.log(numbers.indexOf(9));
console.log("0193456789".indexOf(9));

console.log("0123456789".lastIndexOf(9), "019345678".lastIndexOf(9));
// only primitive values in array (not works with array of objects)
// [1, 2, 3] - works
// [{a: 10}, { a: 15}] - not works
console.log(numbers.lastIndexOf(9));

console.log("---------------");

for (const element of numbers) {
  console.log(element);
}

let helloStr = "";
for (const str of strings) {
  helloStr += str;
}

console.log(`${helloStr}, helloStr`);

// Завдання:
const elements = [100, 80, 20, 50, 800];
// порахуйте суму елементів

function sum(elements) {
  let result = 0;
  for (const number of elements) {
    result += number;
  }

  console.log(result);
  return result;
}

sum(elements);

const arr = [1, 2, 3, 4, 5];

arr[2] = 100;
arr[5] = 7;
arr[10] = 10;
arr[9] = 9;
// Adding the latest element to the array
arr[arr.length] = 11;
arr[arr.length] = 12;
arr[arr.length] = 13;
console.log(arr, "!!!");

for (const element of arr) {
  console.log(element, "element");
}

// Завдання:
const arr2 = [100, 200, 300, 400, 500, 600, 700, 800];
// залиште лише ті числа, що менші за 400
// та поверніть їх у вигляді окремого масива

function solution(arr2) {
  let newArr = [];

  for (const element of arr2) {
    if (element < 400) {
      newArr[newArr.length] = element;
    }
  }

  return newArr;
}

console.log(solution(arr2));

// NOT AFFORDABLE!!!

const arr3 = ["a", "b", "v"];
const str3 = "Hello";

console.log(arr3 + str3);
