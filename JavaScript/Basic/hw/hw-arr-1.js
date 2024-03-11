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
