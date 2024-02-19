let numbers = "";

while (numbers.length !== 10) {
  console.log(numbers);
  numbers = numbers.concat("1");
}

console.log(numbers, numbers.length);

let shouldGoOn = true;
let n = -10;

while (shouldGoOn) {
  console.log(n);
  n = n + 1;

  if (n === 0) {
    shouldGoOn = false;
  }
}

console.log(`${n} result`);

let n1 = 10;

while (true) {
  console.log(n1, "iteration");
  n1 = n1 - 1;

  if (n1 === 0) {
    break;
  }
}

console.log(`${n1} - result(n1)`);

// Завдання:

function draw(symbol, iterations) {
  let str = "";
  while (str.length !== iterations) {

    str = str.concat(symbol);
    console.log(str);
  }

  while (str.length !== 0) {
    console.log(str);
    str = str.slice(0, str.length - 1);
  }
}


draw("*", 3);
draw("/", 5);

// for

