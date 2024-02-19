const user = { name: "Daryna", age: 23, email: "gmail@gmail.com" };
const user2 = { name: "Karyna", age: 33, email: "gmailkaryna@gmail.com" };
const obj = {};

// key (name, age, email)
// value (Daryna, 23)

const name = "Daryna";
const age = 23;
const email = "gmail@gmail.com";

console.log(`${name} ${age} ${email}`);
console.log(`${user.name} ${user.age} ${user.email}`);

obj.a = 100;
obj.b = true;
obj.b = ":)";

console.log(obj);

Object;

const obj2 = new Object({ a: 10 });
console.log(obj2);

const me = {
  name: "Daryna",
  surname: "Bondarenko",
  age: 23,
  email: "gmail@gmail.com",
  password: "123456",
};
console.log(me);

const key = "Daryna".toUpperCase();

const obj3 = {
  [key]: 10,
  ["a".concat("b").toUpperCase()]: 11,
};

console.log(obj3);
console.log(obj3["AB"]);
console.log(obj3.AB);

obj3["AB"] = 100;
// obj3.AB = 100;

console.table(obj3);

const str = new String("Hello");
console.log(str);
console["log"](":)");
console.log(str[0]);

obj3[0] = "H";
obj3[1] = "e";
obj3[20 / 10] = "l";
obj3[3] = "l";
obj3[4] = "o";

console.log(obj3);

const obj4 = {};
console.log(obj4.name, "!!!");

// Завдання:
//
function textAnalytics(str) {
  // повернути кількість кожної літери або символу у строці str
  const result = {};

  for (const char of str) {
    if (result[char]) {
      result[char] = result[char] + 1;
    } else {
      result[char] = 1;
    }
  }

  return result;
}

const result = textAnalytics("Hello world!");
console.log(result);

const a = 10;
const b = "String";
const valueOfTheName = "name";

const object1 = { a: a };
const object2 = { a, b, c: 10, [10 - 1]: "nine", valueOfTheName };

console.log(object1, object2);

function sum(a, b) {
  return { a, b, sum: a + b };
}

const sumResult = sum(10, 20);
console.log(sumResult.a, sumResult.b, sumResult.sum);

function calculate(a, b) {
  const operations = "+-*/";
  const result = { a, b };

  for (const operation of operations) {
    switch (operation) {
      case operations[0]:
        result["+"] = a + b;
        break;

      case operations[1]:
        result["-"] = a - b;
        break;

      case operations[2]:
        result["*"] = a * b;
        break;

      case operations[3]:
        result["/"] = a / b;
        break;

        default:
            "";
    }
  }

  return result;
}

const calculation = canculate(70, 5);
console.log(calculation);

console.log(calculation["+"]);
console.log(calculation["-"]);
console.log(calculation["/"]);
console.log(calculation["*"]);

console.log(calculation.a, calculation.b);