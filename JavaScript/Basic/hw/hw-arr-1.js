const users = [
  { name: "Igor", age: 24 },
  { name: "Oleg", age: 29 },
  { name: "Alex", age: 30 },
  { name: "Joe", age: 14 },
];

let sum = 0;

for (const user of users) {
  sum = sum + user.name.length;
}

console.log(sum);


const array = ["user", "guest", "admin", "anonim"];

// 1. Порахуйте суму індексів адміна та юзера, помножену на довжину масиву
// 2. Перетворіть весь масив на масив, слова якого починаються з великої літери

const user = array.indexOf("user");
const admin = array.indexOf("admin");
let sumOfInd = (user +admin) * array.length;

const names = ["alex", "john", "bob"];

const newNames = names.map(name => name.at(0).toUpperCase() + name.slice(1));
console.log(newNames)