const obj = {
  adddValues: function () {
    for (let i = 0; i < arguments.length; i = i + 1) {
      const arg = arguments[i];
      obj[arg.key] = arg.value;
    }

    return obj;
  },
};

// Допишіть функцію так, щоб всі аргументи що ви передасте у неїї записувалися у obj
// передавати аргументи можна тільки так {key: "ключ", value: "значення"}

//ПРИКЛАД
obj.adddValues({ key: "a", value: 10 }, { key: "b", value: 20 });

// результат: obj
// {a: 10, b: 20, adddValues: function () {}}

console.log(obj);
