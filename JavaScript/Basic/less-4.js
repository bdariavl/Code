const str = "        Hello world!      ";

// Прибирає пробіли

console.log(str);
console.log(str.trim());
console.log(str.trimStart(), "trimStart");
console.log(str.trimEnd(), "trimEnd");

const trimmed = str.trim();
console.log(trimmed, str);

// Повтори

const str1 = "Hello"
console.log(str1);
console.log(str1.repeat(3));

const repeatStr = str1.repeat(5);
console.log(repeatStr);

const isStertsWithH = str1.startsWith("H");
console.log(isStertsWithH, "startsWith");

const isStertsWithA = str1.startsWith("A");
console.log(isStertsWithA, "startsWith");

const isEndsWithO = str1.endsWith("o");
console.log(isEndsWithO, "isEndsWithO");

const isEndsWithSpace = str1.endsWith(" ");
console.log(isEndsWithSpace, "isEndsWithSpace");

// Convertions

const possibleNumber = "200";
const number1 = new Number(possibleNumber);
console.log(number1);

const number2 = +possibleNumber;
console.log(number2);

// Empty string

// ""
// ''
// ``

const emptyString = "";
console.log(emptyString.length);

// 0, 1