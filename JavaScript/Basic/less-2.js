// Дано значення: 10, 7, 3, 9 - порахуйте середнє арифметичне (сума / кількість) цих значень
// Дано:

const part1 = "F34";
const part2 = "is";
const part3 = "the best!";

const space = " ";

// Виведіть готове повідомлення (+)

const a = 10;
const b = 7;
const c = 3;
const d = 9;

const avrg = (a + b + c + d) / 4;

console.log(avrg, "AVRG");

const message = part1 + " " + part2 + " " + part3;

console.log(message, "message");

// Number 

const n = 100;
const m = 0.675;
const o = 13.694576;

const number = new Number(50);

console.log(number);

// "100"
const stringFromNumber = n.toString();
console.log(n, stringFromNumber, 'stringFromNumber');

const stringFromNumber2 = n.toLocaleString();
console.log(n, stringFromNumber2, "string FromNumber2");

// число в округлену строку, в () кількість цифр до округлення
const fixedValue = o.toFixed();
console.log(o, fixedValue, "fixedValue");

const precisionValue = o.toPrecision(6);
console.log(o, precisionValue, "precisionValue");

// 7.7e+1 toExponential
// Завдання:
 
const n1 = 10.1234567;
const n2 = 3;
 
// Округліть та виведіть число n1 (2 знаки після коми)
// Переведіть n2 у строку
// "Додайте" дві строки, що у вас вийшли +


const num1 = n1.toFixed(2);
const num2 = n2.toString();
const sum = num1 + num2;

console.log(sum);

const name1 = "Daryna";
const message2 = "Hello World!";
const smile = "😎";

String;

const oldString = new String("Old string");
console.log(smile);

console.log(oldString);

console.log(name1 + " " + smile);

console.log(name1[0]);
console.log(name1[1]);
console.log(name1[2]);
console.log(name1[3]);
console.log(name1[4]);
console.log(name1[5]);

console.log(name1[0], name1[1], name1[2], name1[3], name1[4], name1[5], name1[99]);
console.log(name1[0] + name1[1] + name1[2] + name1[3] + name1[4] + name1[5]);

const firstLeter = name1[0];

console.log(name1.length);
console.log(message2.length);
console.log(smile.length);

// Завдання:
 
const str1 = "Hello";
const str2 = "World";
const str3 = "! :)";
 
// порахуйте та виведіть загальну довжину строк

const summ = str1 + str2 + str3;

console.log(summ.length);

// Методи

// Обєднання строк
const str1And2 = str1.concat(" ", str2, " ", str3, " ", "I am Daryna", smile);
console.log(str1And2);

const capitalizedStr1 = str1.toUpperCase();
console.log(capitalizedStr1);

const loweredLetter = str1.toLowerCase();
console.log(loweredLetter);

const firstNameLetter = name1[0].toLowerCase();

console.log(firstNameLetter.concat(smile));
console.log(o.toFixed(2).concat(" ", "$"));