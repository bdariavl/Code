const str = "I am a string";

const str2 = new String("String");
console.log(str2);

// str[0]; I

// immutable
const I = str.slice(0, 1);
const am = str.slice(2, 4);
const a = str.slice(5, 6);
const string = str.slice(7);

console.log(I, am, a, string, "slice");
console.log(str);

const lastStrSymbol = str[str.length - 1];

console.log(lastStrSymbol.toUpperCase());

const strFragment = str.slice(0, 3);
console.log(strFragment, "slice");
console.log(str);

// Завдання:
const str3 = "Daryna";

const a1 = str3.slice(1, 2);
const y = str3.slice(3, 4);
const a2 = str3.slice(5, 6);
console.log(a, y, a2);

console.log(str.indexOf("I"), "indexOf");
console.log(str.indexOf("a"));
console.log(str.indexOf(" "));

console.log(str.lastIndexOf("I"), "lastIndexOf");
console.log(str.lastIndexOf("a"));
console.log(str.lastIndexOf(" "));

console.log(str.charAt(0), str[str.length - 1]);

console.log(str.includes("I am a string"), "includes I");

// Завдання
const str11 = "I am a string";
const world = "Hello";

// перевірити чи є слово у строці (не враховуйте регістр)

console.log(str11.toLowerCase().includes(world.toLowerCase()));

console.log(str.replace("string", "number"));
console.log(str.replace("I", "-"));
console.log(str.replaceAll("a", "-"));
console.log(
  str.length,
  str
    .replaceAll(" ", "")
    .replaceAll(".", "")
    .replaceAll(",", "")
    .replaceAll(":", "").length
);

// Завдання

const message =
  "I am a message. Here is my text, here is my symbols: @#$%^&*()";

// Порахуйте кількість корисної інформації у message (.,:@#$%^&*()" ")

console.log(
  message
    .replaceAll(" ", "")
    .replaceAll(".", "")
    .replaceAll(",", "")
    .replaceAll(":", "")
    .replaceAll("@", "")
    .replaceAll("#", "")
    .replaceAll("$", "")
    .replaceAll("%", "")
    .replaceAll("^", "")
    .replaceAll("&", "")
    .replaceAll("*", "")
    .replaceAll("(", "")
    .replaceAll(")", "").length
);

const string1 = "";
const string2 = ':)';
const string3 = new String("");
const smile = "👻";

const string4 = `Hello, world! ${string2} ${smile}`;

console.log(string4);
console.log(str + smile);
console.log(str.concat(smile));
console.log(`${str.toUpperCase()}${smile}`);

// Easter agg

const fn = (a) => {
    console.log(a);
};

fn`10`;