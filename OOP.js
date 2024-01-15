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

const firstComent = new Comment("First comment");
console.log(firstComent);
firstComent.upVote(); // Calling a method of the class 'Comment' in object 'firstComent'
firstComent.upVote();
console.log(firstComent);
firstComent.downVote(); // Calling a method of the class 'Comment' in object 'firstComent'
console.log(firstComent);

// prototype chaining :
// a class inherits from another class:
// 'firstComent' inherits from 'Comment', and 'Comment' inherits from 'Object'

// operator instanceof :
// to check if an object is an instance of a class, use the 'instanceof' operator

console.log(firstComent instanceof Comment); // true
console.log(firstComent instanceof Object); // true

// Method hasOwnProperty() - checks if an object has a property

console.log(firstComent.hasOwnProperty("text")); // true
console.log(Comment.hasOwnProperty("text")); // false
console.log(firstComent.hasOwnProperty("votesQuantity")); // true
console.log(firstComent.hasOwnProperty("upVote")); // false
console.log(firstComent.hasOwnProperty("downVote")); // false
console.log(firstComent.hasOwnProperty("hasOwnProperty")); // false

// Creating another instance of the class

const secondComent = new Comment("Second comment");
console.log(secondComent);
secondComent.upVote();
console.log(secondComent);

console.log(secondComent instanceof Comment); // true
console.log(secondComent instanceof Object); // true

console.log(secondComent.hasOwnProperty("text")); // true
console.log(secondComent.hasOwnProperty("votesQuantity")); // true

// static method in class
// static method can be called without creating an instance of the class
// static method belongs to the class and not the instance

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
// prototype inheritance in objects
// __proto__ - method for inheritance in objects (not in classes In classes we use 'extends' keyword)

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

// second example with prototipe (__proto__)

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
