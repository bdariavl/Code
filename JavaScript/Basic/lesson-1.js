// Data types

// Primitives
// Numbers : 1 2 3 123 (BigInt)
Number;
12;

// String (сточка): "Hello world" '123'
String;
("Hello world");

// Boolean (так або ні): true, false
Boolean;
true;
false;

// Undefined (невизначений):
undefined;

// Null
null;

// Symbol:
// -

// BigInt: 1:
// -

// Object - orientired data types:
// Object: {}, [], functio() {}, Map, Set, null.

const a = 10; // НЕ можна змінити
let b = 20; // можна змінити
// var c = 10; - not useful

const sum = ((a + b) * 10) / 2;

console.log(sum);
console.log(100 / 5);

const message = "Hello world!";
let message2 = "I am programmer 👻";

console.log(message);
console.log(message2);
console.log("Daryna" + "👻");

console.log(message + message2);

const isAdmin = true;
const isUser = false;

let user = undefined;
console.log(user);

user = "Daryna";
console.log(user);

user = "Daryna07";
console.log(user);

user = null;
console.log(user);

let counter = 0;

counter = counter + 1;
counter = counter + 100;

console.log(counter);

let greetingMessage = "";
greetingMessage = greetingMessage + "H";
greetingMessage = greetingMessage + "e";
greetingMessage = greetingMessage + "l";
greetingMessage = greetingMessage + "l";
greetingMessage = greetingMessage + "o";

console.log(greetingMessage);

const msg = "Hello";
console.log(msg);

// Object

const obj = {
    name: "Daryna",
    age: 23,
    isAdmin: true,
    info: undefined,
};

console.log(obj);
console.log(obj.name);

console.log(window);

window.console.log("Hello from window!");
