// Creating a class
// class - a function for creating objects
// typeof class - function

class Comment {
  constructor(text) {
    // function constructor - creates properties for the instance of the class. But not for the class itself
    this.text = text; // this - refers to the instance of the class
    this.votesQuantity = 0;
  }

  upVote() {
    this.votesQuantity += 1; // method of the class
  }

  downVote() {
    this.votesQuantity -= 1; // method of the class
  }
}

// Creating an instance of the class

const firstComment = new Comment("First comment");
console.log(firstComment);
firstComment.upVote(); // Calling a method of the class 'Comment' in object 'firstComment'
firstComment.upVote();
console.log(firstComment);
firstComment.downVote(); // Calling a method of the class 'Comment' in object 'firstComment'
console.log(firstComment);

// prototype chaining :
// a class inherits from another class:
// 'firstComment' inherits from 'Comment', and 'Comment' inherits from 'Object'

// operator instanceof :
// to check if an object is an instance of a class, use the 'instanceof' operator

console.log(firstComment instanceof Comment); // true
console.log(firstComment instanceof Object); // true

// declare a class as an expression
// class declared as an expression can be called without creating an instance of the class in some function

const CommentExpression = class {
  constructor(text) {
    this.text = text;
    this.votesQuantity = 0;
  }
  upVote() {
    this.votesQuantity += 1;
  }
};

// Method hasOwnProperty() - checks if an object has a property

console.log(firstComment.hasOwnProperty("text")); // true
console.log(Comment.hasOwnProperty("text")); // false
console.log(firstComment.hasOwnProperty("votesQuantity")); // true
console.log(firstComment.hasOwnProperty("upVote")); // false
console.log(firstComment.hasOwnProperty("downVote")); // false
console.log(firstComment.hasOwnProperty("hasOwnProperty")); // false

// Creating another instance of the class

const secondComment = new Comment("Second comment");
console.log(secondComment);
secondComment.upVote();
console.log(secondComment);

console.log(secondComment instanceof Comment); // true
console.log(secondComment instanceof Object); // true

console.log(secondComment.hasOwnProperty("text")); // true
console.log(secondComment.hasOwnProperty("votesQuantity")); // true

// static method in class
// static method may be called without creating an instance of the class
// static method belongs to the class and not the instance
// static methods inherit from the class to the extended class

class Car {
  static test = true; // static property
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log(this);
    console.log(`Let's start our ${this.model}`);
  }

  stop() {
    console.log(this);
    console.log(`Let's stop our ${this.model}`);
  }

  static showClassName(name) {
    console.log(name);
  }
}

Car.showClassName("Car"); // Car
console.log(Car.test); // true

const car1 = new Car("Ford", "Mustang", 2020);
car1.drive();
car1.stop();
console.log(car1.test);
car1.showClassName("Car"); // error, showClassName is static method

// static method can be inherited by a class which extends the class that contains the static method

class SuperCar extends Car {
  constructor(brand, model, year, maxSpeed) {
    super(brand, model, year);
    this.maxSpeed = maxSpeed;
  }
}

console.log(SuperCar.showClassName("SuperCar")); // 'SuperCar'
console.log(SuperCar.test); // true


// private(hidden) properties and methods in the class are written in this way - _propertyName or _methodName 
// but this way is just agreement between developers and not necessary in JS documentation
// private(hidden) properties and methods in the class are written in this way - #propertyName or #methodName works on JS documentation


class Worker {
  #rate; // private property in the class
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.#rate = rate;
    this.days = days;
  }
  getSalary() {
    return this.#rate * this.days;
  }
}

const worker = new Worker("Ivan", "Ivanov", 100, 25);
console.log(worker.getSalary()); // 2500
console.log(worker.#rate);// Error: Private field '#rate' must be declared in an enclosing class
console.log(Worker.#rate); // Error: Private field '#rate' must be declared in an enclosing class


// prototype inheritance in objects
// __proto__ - method for inheritance in objects (not in classes In classes we use 'extends' keyword)
// __proto__ is a method of the object(instance)
// object.__proto__ - refers to the prototype of the object
//object.__proto__ === Object.prototype - true

// first example with prototype inheritance (__proto__)
const obj1 = {
  text: "Hello World",
  color: "green",
  fontSize: "25px",
};
document.body.append(`${obj1.color}, ${obj1.fontSize}`); // green, large
console.log(obj1);

const obj2 = {
  textTransform: "uppercase",
  __proto__: obj1,
};

console.log(obj2);
console.log(obj2.text);

const string = document.createElement("h2");
string.innerHTML = obj2.text; // inherits from obj1
string.style.cssText = `
  color: ${obj2.color}; 
  font-size: ${obj2.fontSize}; 
  text-transform: ${obj2.textTransform}
  `;
document.body.append(string);

// second example with prototype (__proto__)

const user = {
  login: "",
  password: "",
  passwordValidate: function () {
    if (this.password.length < 8) {
      return false;
    } else {
      return true;
    }
  },
};

// filling the object's properties
user.login = "dreamer";
user.password = "123456789";

console.log(user);
console.log(user.passwordValidate());

const userProfile = {
  username: "",
  userphoto: "",
  userage: 0,
  __proto__: user,
};

// filling the object's properties
userProfile.username = "andrew";
userProfile.userphoto = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
userProfile.userage = 46;

console.log(userProfile);
console.log(userProfile.password); // inherits from user

// checking property' hasOwnProperty' with cycle 'for in' 

for(let prop in userProfile) {
  if(userProfile.hasOwnProperty(prop)) {
    console.log(prop, userProfile[prop]); // doesn't show properties from user
  }
}

// class extending with extends and super

class User {
  constructor(login, password) {
    this.login = login;
    this.password = password;
  }

  passwordValidate() {
    if (this.password.length < 8) {
      return false;
    } else {
      return true;
    }
  }

  showValidate() {
    if (this.passwordValidate() == true) {
      const passwordTrue = "password is valid";
      console.log(passwordTrue);
      return passwordTrue;
    } else {
      const passwordFalse = "password is not valid";
      console.log(passwordFalse);
      return passwordFalse;
    }
  }
}

// creation of an object with operator new

const user1 = new User("dreamer", "123456");
console.log(user1);
console.log(user1.passwordValidate()); // calling class method in the object
console.log(user1.showValidate()); // calling class method in the object

// class extending with  extends and super

class Student extends User {
  constructor(username, password, nickname) {
    super(username, password); // super - refers to the properties and methods from the parent class
    this.nickname = nickname; // new property
  }

  // with super we can use methods from the parent class and override or extend them in the child
  passwordValidate() {
    console.log("new variant of passwordValidate");
    console.log(super.passwordValidate());
  }
}

const student1 = new Student("dreamer", "123456", "andrew");
console.log(student1);
console.log(student1.passwordValidate());

// parent's methods are accessible in the child
console.log(student1.passwordValidate());
console.log(student1.showValidate());

// Methods getOwnPropertyDescriptor() , defineProperty() and defineProperties()

const user = {
  name: "Ivan",
  password: "123456",
  passwordValidate() {
    console.log(this.password);
  },
}

// Object's method getOwnPropertyDescriptor() - returns information about the property
console.log(Object.getOwnPropertyDescriptor(user, 'name'));
console.log(Object.getOwnPropertyDescriptor(user, 'passwordValidate'));

// Object's method defineProperty() - defines a property's parameters in an object
Object.defineProperty(user,'name', {
  writable: false, // false - read-only, true - read-write
  configurable: false, // false - non-configurable, true - configurable
  enumerable: false, // false - non-enumerable, true - enumerable (if it is false it can't be used in 'for...in' loop)
});

//user.name = 'Andrew';
//console.log(user); // throws an error. Property 'name' is read-only

for(let prop in user) {
  console.log(prop); // doesn't show property  name from user because it is not enumerable
}

// Object's method defineProperties() - defines parameters of several properties in an object

Object.defineProperties(user, {
  name: {
    writable: false,
    configurable: false,
    enumerable: false,
  },
  password: {
    writable: false,
    configurable: false,
    enumerable: false,
  },
})




// inheritance in objects
// null and undefined do not have __proto__

const object = {water: true, milk: true, sugar: true, coffee: true, cups: true,}

console.log(object.__proto__ === Object.prototype); // true   Object is a javascript class


const array = [1,2,3,4];
console.log(array.__proto__ === Array.prototype); // true   Array is a javascript class

const string = "hello";
console.log(string.__proto__ === String.prototype); // true   String is a javascript class

function showWords() {
  console.log('hello');
}
console.log(showWords.__proto__ === Function.prototype); // true    Function is a javascript class
console.log(new showWords()); // prototype of function has a constructor


const arrowFunction = () => {
  console.log('hello');
}
console.log(arrowFunction.__proto__ === Function.prototype); // true    Function is a javascript class
//console.log(new arrowFunction()); // arrow function does not have a constructor

// coffee machine
const coffeeMachine = {
  'water': true,
  'milk': true,
  'sugar': true,
  'coffee': true,
  'cups': true,

  makeCoffee() {
    console.log('Please wait...');
    if (this.water && this.milk && this.sugar && this.coffee && this.cups == true) {
    setTimeout(() => {
      console.log('Coffee is ready!');
     }, 3000)
      
    } else {
      setTimeout(() => {
        console.log('Not enough ingredients!');
       }, 3000)
     
    }
  }
}

// replace some ingredients in the coffee machine
coffeeMachine.water = false;

// call the method
coffeeMachine.makeCoffee();

const coffeeMachine2 = {
  'chocolate': true,
  'nuts': true,
  __proto__: coffeeMachine
}

coffeeMachine2.makeCoffee();


// function constructor - property template for creating objects

const admin = {
  'rules': true,

  isAdmin() {
    console.log(`Admin ${this.name} has ${this.rules} rights`);
    
  }
}

// function constructor can contain methods and properties from another object with __proto__
function User(name, age, gender ) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.__proto__ = admin;
  // creating a method in the constructor
  this.showUserData = function() {
    console.log(`Name: ${this.name}, age: ${this.age}, gender: ${this.gender}`);
  }
}

const user = new User('Andrew', 26, 'male');
console.log(user);
user1.isAdmin();
user1.showUserData();

const user2 = new User('Vlad', 27, 'male');
console.log(user2);
user2.isAdmin();
user2.showUserData();


// Classes

class MotorBike {
  constructor(brand, model, year, maxSpeed) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.maxSpeed = maxSpeed;
  }

  showInfo() {
    console.log(`Brand: ${this.brand}, model: ${this.model}, year: ${this.year}, maxSpeed: ${this.maxSpeed}`);
  }
}

// first instance of the class MotorBike
const bmw = new MotorBike('BMW', 'X5', 2022, 250);
console.log(bmw);
bmw.showInfo();

// second instance of the class MotorBike
const harley = new MotorBike('Harley', 'X5', 2022, 250);
console.log(harley);
harley.showInfo();

// creating new class extending from the class MotorBike

class SportBike extends MotorBike {
  constructor(brand, model, year, maxSpeed, power) {
    super(brand, model, year, maxSpeed); // calling the constructor of the parent class
    this.power = power; // adding new property
  }

  showInfo() {
     super.showInfo(); // calling the showInfo method of the parent class
    console.log(`power: ${this.power}`); // adding new property
  }

}

// first instance of the class SportBike
const yamaha = new SportBike('Yamaha', 'X5', 2022, 250, 300);
console.log(yamaha);
yamaha.showInfo();

// static methods in classes

class Car {
  static test = true; // static property
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  static showClassName(name) {
    console.log(name);
  }
}

const audi = new Car('Audi', 'X5', 2022);
console.log(audi);
console.log(audi.test); // undefined because static property
//console.log(audi.showClassName('Car')); // Error because static method

console.log(Car.test); // true
Car.showClassName('Car'); // Car


// JS docs in classes
// JS docs
// write /** */ before the function and then click tab to open docs
// in the first string of the docs you can write description of the function
// in the second string you can write parameters of the function and their types and some coment
// in the third string you can write return, type that the function will return and coment
// example with complex properties and (splited) parameters in the constructor

class Person {
  /**
   * @param {string} name - in format firstname lastname
   * @param {string} birthday - in format dd.mm.yyyy
   * @param {string[]} phones - array of phone numbers
   * @param {string} address - in format city, street, house, flat
   */
  constructor(firstname,lastname, birthday, phones, address) {
    // setting  simpleproperties
    this.firstname = firstname;
    this.lastname = lastname;
    // setting complex properties as an object
    let date = birthday.split('.');
    this.date = {};
    this.date.d = +date[0];
    this.date.m = +date[1];
    this.date.y = +date[2];
    // setting complex properties as an array
   let phoneNumbers = phones.split(',');
    this.phones = [];
    for (let i = 0; i < phoneNumbers.length; i++) {
      this.phones.push(phoneNumbers[i].trim());
    }
    // setting complex properties as an object
    let addressParts = address.split(', ');
    this.address = {};
    this.address.city = addressParts[0];
    this.address.street = addressParts[1];
    this.address.house = addressParts[2];
    this.address.flat = addressParts[3];

  }
  static months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; // static property belongs to the class

  /**
   * Method gets name in format lastname firstname
   * @return {string}
   */
  getFullName() {
    return `Person's full name: ${this.firstname} ${this.lastname}`
  }

  /**
   * Method gets birthday in format dd.month.yyyy
   * @return {string}
   */
  getBirthday() {
    return `Person's birthday: ${this.date.d} ${Person.months[this.date.m - 1]} ${this.date.y}` 
    // using static property Person.months from the class instad of months array
    // Person.months[this.date.m - 1] - -1 because months array starts from 0
  }
}

const user = new Person('Andrew', 'Dreamer', '01.01.1990', '+38123456789, +38987654321', 'Kharkiv, Saburovskaya, 45, 2');
console.log(user);
console.log(user.phones); // [+38123456789, +38987654321]
console.log(user.address); // {city: 'Kharkiv', street: 'Saburovskaya', house: '45', flat: '2'}
console.log(user.getFullName()); // Dreamer Andrew
console.log(user.getBirthday()); // 01.Jan.1990



// setter and getter are methods of classes and objects for working with private properties
// property writen with get are read only
// we use getter when we need a property that can't be changed and we want to give some logic to the property
// we use setter when we need a property that can be changed
// getter - binds object's property to the method. When we call property we call the method


class Rect {

  // open field can be used without constructor and without declaration in instance
  // can be changed in instance
  bgColor = 'red'; // public


  constructor(width, height) {
    this._width = width; // private
    this.height = height;
  }

  // getter binds property to the method
  // in console we will see 'get width' and value of this._width
  // method that decrared with getter is named as a parameter in constructor

  get width() {
    console.log('get width');
    return this._width
  }

  // setter binds property to the method. Setter is calling when we change the property
  // in console we will see 'set width' and value of this._width
  // method that decrared with setteris named as a parameter in constructor

  set width(value) {
    console.log('set width');
    this._width = value
  }

  static getName(className) {
   console.log(className);
  }
  
}

const rect = new Rect(300, 200);
console.log(rect);
console.log(rect.width);
rect.width = 500; // because of setter we can change the property
console.log(rect.width);
console.log(rect.bgColor); // red
rect.bgColor = 'blue'; // changing value of public property
console.log(rect.bgColor); // blue
Rect.getName('Rect');








