Object;

const car = {
  name: "Ford",
  model: "Mustang",
  price: 40000,
  color: "black",
};

// car.vin = 10000020101;

const str = new String("Hello");

for (const key in str) {
  console.log(key, str[key]);
}

Object.defineProperty(car, "vin", {
  value: 10000020101, // значення
  enumerable: true, // видимість у ціклі
  writable: true, // присвоєння нового значення
  configurable: true, //не можн авидалити ключ
});

console.log(Object.keys(car));
console.log(Object.values(car));

console.log(car.vin2, "vin2");
car.vin2 = 90999999999999;
console.log(car.vin2, "vin2");

delete car.vin2;
console.log("after delete", car);

Object.defineProperty(car, "vin2", {
  value: "private",
  enumerable: false,
});

console.log(car);

for (const key in car) {
  console.log(key, car[key]);
}

// Завдання:

const obj1 = { a: 10 };
// додайте значення b до obj1  так, щоб його ігнорували цикли

Object.defineProperty(obj1, "b", {
  value: 20,
});

// Опишіть метод keys(obj) - він має повертати всі
// ключі obj через кому у вигляді строки

function keys(car) {
  let result = "";

  for (const key in car) {
    result += key + ", ";
  }

  console.log(result);
  return result;
}

keys(car);
// a, b, c, d, price, color

// Завдання
// Написати свій freeze (існуючі ключі НЕ можна міняти)
const obj2 = { a: 10 };

console.log(obj2);

obj2.a = 10;

function freeze(obj) {
  for (const key in obj) {
    Object.defineProperty(obj, key, {
      value: obj[key],
      writable: false,
      enumerable: true,
      configurable: true,
    });
  }
}
freeze(obj2);

obj2.a = 1000;
obj.b = 90;

console.log(Object.entries(obj2)); // із об'єкта в масив
console.log(Object.fromEntries([["a", 30]])); // із мвсива в об'єкт

const adminUser = {
  id: 0,
  name: "Admin",
  password: 12345,
  isAdmain: true,
};

const user = {
  id: 1,
  name: "Admin",
  password: 12345,
};

console.log(user.isAdmain);
console.log(adminUser.isAdmain);

if (user.hasOwnProperty("id")) {
  //має свое значення або ні
  console.log(user.id, "USER ID");
}

if ("id" in user) {
  console.log(user.id, "USER ID");
}

typeof user === "object";

function hasOwnProperty(object, keyToLookFor) {
  let keys = ``;

  for (const key in object) {
    keys = keys + `${key}|`;
  }

  // console.log(keys, "keys");

  return keys.includes(keyToLookFor);
}

console.log(hasOwnProperty({ a: 10 }, "a"));

// Destruction of objects

const dataFromServer = {
  a: 10,
  b: 10,
  c: 10,
};

// деструктурізація - зворотнє присвоєння

const { a, b, c } = dataFromServer;

console.log(a, b, c);
