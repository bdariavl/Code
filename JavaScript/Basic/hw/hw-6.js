function iterate(str, until) {
  // Опишіть логіку, що виводить символи строки str у консоль ДО [until] числа
  // дійшовши лічильником циклу до значення, що дорівнює until треба зупинити цикл
  let i = 0;

  while(i < until) {
    console.log(str[i]);

    i = i + 1;
  }
//   for (let i = 0; i < until; i = i + 1) {
//     console.log(str[i]);
//   }
}

iterate("I am a string", 5);
// I
//
// a
// m
//
// a
//

function showAllButNotSpaces(str) {
  // Опишіть логіку, що виводить кожен символ строки str, окрім пробілів " "
  // for
  for (let i = 0; i < str.length; i = i + 1) {
    if (str[i] !== " ") {
        console.log(str[i]);
    }
  }
}

showAllButNotSpaces("Hello, there!");
