for (let i = 0; i < 10; i = i + 1) {
  console.log("Hello!");
}

for (let i = 10; i >= 0; i = i - 1) {
  console.log(i);
}

// Завдання:
//
// Дано:
const str = "Hello World!";
// Перегорніть строку

function reversedStr(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i = i - 1) {
    result = result.concat(str[i]);
  }

  return result;
}

const reversedString = reversedStr(str);
console.log(reversedString);

const reversedName = reversedStr("Daryna");
console.log(reversedName);

function multiply(a, times) {
  let result = a;

  for (let i = 0; i < times; i = i + 1) {
    result = result * a;
  }

  return result;
}

const f10 = multiply(10, 2);
console.log(f10);

const nums = "0123456789";

// ES-6

for (const symb of nums) {
  console.log(symb);
}

const withSpace = "Hello World!";

function replaceAll(str, charToChange, withChar) {
  let result = "";
  for (const char of str) {
    if (char === charToChange) {
      result = result.concat(withChar);
    } else {
      result = result.concat(char);
    }
  }

  return result;
}

console.log(replaceAll(withSpace, " ", ""));

// Завдання:
// Напишіть свою функцію replace

function replace(str, whatChar, forWhat) {
  let result = "";
  let isChanged = false;

  for (const char of str) {
    if (char === whatChar && !isChanged) {
      result = result.concat(forWhat);
      isChanged = true;
    } else {
      result = result.concat(char);
    }
  }

  return result;
}

console.log(replace("D ar yna", " ", ""));

// Завдання:
// Продублювати кожний символ строки 3 рази

const str2 = "I am a string";

function duplicateChar(str, n) {
  let result = "";

  for (const char of str2) {
    console.log("First loop", char)
    for (let i = 0; i < n; i = i + 1) {
        console.log("Second loop", result, i)
        result = result.concat(char);
    }
  }

  return result;
}

console.log(duplicateChar(str2, 3));

// Завдання:
// Поверніть числа з numbers, які у сумі дають lookingFor

const numbers = "345129";
const lookingFor = 10;

function returnNumb(numbers, lookingFor) {
    let result = "";

    for (const char1 of numbers) {
        for (const char2 of numbers) {
            if (Number(char1) + Number(char2) === lookingFor) {
                // console.log("Match", char1, char2);
                result = `${char1}, ${char2}`;
                return result;
            }
        }
    }

    return result;
}

console.log(returnNumb(numbers, lookingFor));