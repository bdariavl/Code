// this
console.log(this);

function sum(a, b) {
  return a + b;
}

// Function - Constructor

function Car(brand, color, price) {
  this.brand = brand;
  this.color = color;
  this.price = price;

  this.miles = 0;
  this.owners = [];

  // methods
  this.ride = function (miles) {
    this.miles = this.miles + miles;
  };

  // Завдання:
  // Опишіть метод changeColor(newColor)
  // він має змінити колір автомобіля

  this.changeColor = function (newColor) {
    this.color = newColor;
  };

  this.addOwner = function (owner) {
    this.owners.push(owner);
  };

  this.removeOwner = function (owner) {
    this.owners = this.owners.filter((ow) => ow.fullname !== owner.fullname);
  };

  return this;
}

function Owner(fullname, age, budget) {
  // Завдання: опишіть Owner, наповніть його інформацією
  // Створіть екземпляр

  this.fullname = fullname;
  this.age = age;
  this.budget = budget;

  // опишіть метод birthday, що збільшує вік на +1
  this.birthday = function () {
    this.age = this.age + 1;
  };

  this.buyCar = function (car) {
    if (this.budget >= car.price) {
      this.budget = this.budget - car.price;
      car.addOwner(this);
    } else {
      console.log(`Potential owner ${this.fullname} has not enough money:)`);
    }
  };

  return this;
}

const car1 = new Car("Ford Mustang", "black", 30000);
console.log(car1);
car1.ride(10);
console.log(car1, "car1 after ride");

const car2 = new Car("Subaru Forester", "black", 5000);
console.log(car2);
car2.ride(5);
console.log(car2, "car2 after ride");

car1.changeColor("red");
console.log(car1, "car1 after changeColor");

const owner1 = new Owner("Daryna Bondarenko", 23, 7500);
console.log(owner1);

const owner2 = new Owner("Somebody", 30, 300000);

owner1.buyCar(car2);
car2.addOwner(owner2);

console.log(car2, owner1);

car2.removeOwner(owner2);
console.log(car1, "removeOwner");

function Star(color) {
  this.color = color;

  this.x = Math.floor(Math.random() * 5000);
  this.y = Math.floor(Math.random() * 3000);

  this.appear = function () {
    document.body.innerHTML += `<div class="star" style="top: ${this.y}px; left: ${this.x}px"></div>`;
  };

  this.dissappear = function () {};
}

const testStar = new Star("pink");
console.log(testStar, "testStar");
testStar.appear();

// Завдання
// Написати цикл for генерації 100 зірок

for (let i = 0; i < 1000; i++) {
  new Star("pink").appear();
}
