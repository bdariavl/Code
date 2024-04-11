const data1 = {
  users: [{ email: "email1@gmai.com" }, { email: "email2@gmail.com" }],
  addUser: function (user) {
    // допишіть логіку додавання користувача
    return this.users.push(user);
  },
};

const data2 = {
  users: [],
};

// "Навчіть" data2 додавати користувачів 3 способами (bind, call, apply)

const bindAdd = data1.addUser.bind(data2, { email: "email3@gmail.com" });
bindAdd();
console.log(data2.users);

const callAdd = data1.addUser.call(data2, { email: "email4@gmail.com" });
console.log(data2.users);

const applyAdd = data1.addUser.apply(data2, [{ email: "email5@gmail.com" }]);
console.log(data2.users);
