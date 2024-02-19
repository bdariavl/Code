const str = "123456789";

console.log(str[0]);

const sum =
  Number(str[0]) +
  Number(str[1]) +
  Number(str[2]) +
  Number(str[3]) +
  Number(str[4]) +
  Number(str[5]) +
  Number(str[6]) +
  Number(str[7]) +
  Number(str[8]);

console.log(sum);

// while
// for

let counter = 0;
let border = str.length;

// ітерація - повторювана дія в тілі циклу

// while (counter < border) {
//     console.log(counter, "COUNTER", Number(str[counter]));

//     counter = counter + 1;
// }

let loopSum = 0;

while (counter < border) {
  loopSum = loopSum + Number(str[counter]);
  counter = counter + 1;
  console.log(loopSum);
}

console.log(loopSum, "LoopSum");

// Завдання:
const str2 = "Hello world. I am a programmer :)";
// Порахуйте кількість пробілів

let counter2 = 0;
let border2 = str2.length;
let space = 0;

while (counter2 < border2) {
  if (str2[counter2] === " ") {
    space = space + 1;
  }
  counter2 = counter2 + 1;
}
console.log(space);
