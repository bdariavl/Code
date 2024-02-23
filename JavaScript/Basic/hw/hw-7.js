// Завдання

function findCharactersQuantity(str, char) {
  // функція має рахувати кількість символів char у строці str
  let counter = 0;

  for (const char of str) {
    if (char === "a") {
      counter = counter + 1;
    }
  }

  return counter;
}

console.log(findCharactersQuantity("a a a", "a")); // => 3 (три літери а)

function encryption(str) {
  // функція має замініти у str:
  // кожну літеру а на :
  // кожну літеру b на -
  // кожну літеру с на !

  // for - of , switch - case
  let result = "";
  for (const char of str) {
    switch (char) {
      case "a":
        result = result + ":";
        break;
      case "b":
        result = result + "-";
        break;
      case "c":
        result = result + "!";
        break;
      default:
        result = result + char;
    }
  }

  return result;
}

console.log(encryption("abc")); // => ":-!"
console.log(encryption("abcd")); // => ":-!d"
