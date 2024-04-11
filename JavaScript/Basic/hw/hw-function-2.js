// Створіть свій шаблон Person за допомогою функції конструктора
// Опишіть поля name, age, skills (масив строк)
// Опишіть методи learn(skillName) - додає до навичок новий скілл, forget(skillName) - видаляэ з масиву навичок скілл
// Створіть декілька екземплярів та  перевірте правильність роботи методів)

function Person(name, age, skills = []) {
  this.name = name;
  this.age = age;
  this.skills = skills;

  this.learn = function (newSkill) {
    this.skills.push(newSkill);
  };

  this.forget = function (skillToForget) {
    this.skills = this.skills.filter((skill) => skill !== skillToForget);
  };

  return this;
}

const person1 = new Person("Daryna", 23, ["JavaScript"]);

person1.learn("HTML");
console.log(person1);

person1.forget("JavaScript");
console.log(person1);
