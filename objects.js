// OBJECTS
// 1  simple objects 
// 2  add item
// 3  change item
// 4  delete item 
// 5  function as a method of object
// 6  function as a method of object whritten out of object
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15

//GLOBAL OBJECTS

// global object in browser -  Window
// global object in Node.js - Global
// new notation of global object in both browser and Node is - globalThis

// JSON

// JSON.stringify()  - convert object into an string
// JSON.parse() - convert string into an object

const cities = {
  1: 'Kharkiv',
  2: 'Kyiv',
  3: 'Lviv'
}
const listOfCities = JSON.stringify(cities); // gets a string
console.log(listOfCities); 
console.log(JSON.parse(listOfCities)); // gets an object

//  OBJECTS CREATING

// first method to create an object

const person = {
  userName: 'Andrew',
  birthDay: 1977,
  profession: 'js developer',
  salary: 3000,
 'Task to do': 'You must win' // keys containing several words are written in quotation marks
}

console.log(person);
console.log(person["Task to do"]);  // keys containing several words are declared in square brackets

// If object's property is a number you have to write [] instead of .(dot) to read the property's meaning

const obj1 = {
  1: 'one',
  2: 'two',
  3: 'three',
  four: 'four'
}
console.log(obj1);
console.log(obj1[1])
console.log(obj1.four)

// Creating new object property(key:value) by constant from outside
const myCountry = 'country'; 
person[myCountry] = 'Ukraine';// are declared in square brackets
console.log(person);

// second method to create an object with Object.assign()

const newObj = Object.assign({
  five: 'text3',
  six: 'text4',
  seven: 300
})
console.log(newObj);

// third method to create an object  with new Object()

const thirdObject = new Object ({
  key1: 'text3',
  key2: 'text4',
  key3: 300
});

console.log(thirdObject);

// fourth method -- creating an object with a function

function createUser(name,age,address) {
  return {
    name: name,
    age: age,
    address: address
  }
}

const user1 = createUser('Andrew',46,'Kharkiv');
const user2 = createUser('Milana',18,'Melitopol')

console.log(user1);
console.log(user2);

// Nested objects

const people = {
  planet: 'Earth',
  person : {
    userName: 'Andrew',
    birthDay: 1977,
    profession: 'js developer',
    salary: 3000,
  }
};

// shows nested object properties with operator .(dot)
console.log(people);
console.log(people.planet);
console.log(people.person);
console.log(people.person.userName);

// delete for nested objects
delete people.person.salary;
console.log(people.person);


// variables as object property
const userName = 'Mathew';
const age = 68;

const personData = {
  userName: userName,
  age: age,
  birthDay: 1977,
  profession: 'js developer',
  salary: 3000,
}
console.log(personData)

// variables as object property.short notation
const userName1 = 'Dominic';
const age1 = 45;

const personData1 = {
  userName1,
  age1,
  birthDay: 1977,
  profession: 'js developer',
  salary: 3000,
}
console.log(personData1)

// OBJECTS'S METHODS

// add item  first method

const person2 = {
  userName: 'Andrew',
  birthDay: 1977,
  profession: 'js developer',
  salary: 3000
}

console.log(person2);

person2.isMarried = false;
console.log(person2);

// add item second method  with Object.assign()

const newObj3 = Object.assign({
  five: 'text3',
  six: 'text4',
  seven: 300
})
console.log(newObj3);

Object.assign(newObj3,{
  eight:'text5',
  nine: true
})
console.log(newObj3);

// change item

const person3 = {
  userName: 'Andrew',
  birthDay: 1977,
  profession: 'js developer',
  salary: 3000
}
console.log(person3);

person3.salary = 3500;
console.log(person3);

// change item second method  with Object.assign()

Object.assign(person3,{
  eight:'text5',
  nine:222
})
console.log(person3);

// delete item (remove item)

const person4 = {
  userName: 'Andrew',
  birthDay: 1977,
  profession: 'js developer',
  salary: 3000
}
console.log(person4);

delete person4.birthDay;
console.log(person4);

// Method 'in'  to check the presence or absence a key in object . returns true or false

const checkArray = {
  model: 'toyota',
  color: 'black',
  width:2.2,
  length: 4.5,
}

console.log('model' in checkArray); // true
console.log('height' in checkArray); // false


// function as a method of object

 const car = {
  model: 'toyota',
  color: 'black',
  width:2.2,
  length: 4.5,
  power: 150,
  isGo: function () {
    console.log('Go!!!');
  },
  isStop() {    // short version of writing function in objects
    console.log('Stop!!!')
  }
 }

console.log(car);
 car.isGo(); // how to call isGo
 car.isStop();

// function as a method of object written out of object

function carGo() {
  console.log('Go faster!!!!!')
}

const car2 = {
  model: 'nissan',
  color: 'red',
  width:2,
  length: 4.3,
  power: 140,
  isGo: carGo
}
console.log(car2);
carGo(); // declaration of function carGo 
car2.isGo(); // declaration of function carGo as a object method isGo

// COPYING OBJECTS

// creating another object containing the same link

const someObject = {
  model: 'chevrolet',
  color: 'yellow',
  width:2,
  length: 4.3,
  power: 140,
  speed: 230,
}
console.log(someObject);

const newSomeObject = someObject; // does not create a new object.Just new link to the origin object
console.log(newSomeObject);
console.log(newSomeObject === someObject); // true

newSomeObject.fuelType = 'petrol';

console.log(someObject);

// Method   Object.assign()   can create a new object from multiple original objects

const cars5 = {
  model: 'chevrolet',
  color: 'yellow',
  width:2,
  length: 4.3,
  power: 140,
  speed: 230,
}
console.log(cars5);

const carDriver = {
  driverName: 'Denis',
  age: 39
}
  
const newSomeObject1 = Object.assign({},cars5); // creates a new object from one origin object
console.log(newSomeObject1);
console.log(newSomeObject1 === someObject); // false

delete newSomeObject1.power;
console.log(newSomeObject1);
console.log(someObject);

const newSomeObject2 = Object.assign({},cars5,carDriver); // creates a new object from multiple origin objects
console.log(newSomeObject2);

const newSomeObject3 = Object.assign(cars5,{  // creates a new object from one origin object and adds new keys
  driver: true,
  engine: 2500
});
console.log(newSomeObject3);

console.log(Object.keys(cars5));
console.log(Object.keys(newSomeObject3));


// Method SPREAD  can create a new object from multiple original objects

const vegetables = {
  carrot: 'orange',
  cucumber: 'green',
  tomato: 'red'
}
console.log(vegetables);

const fruits = {
  apple: 'red',
  lemon: 'yellow',
  plum: 'blue'
}
console.log(fruits);

const plants = {...vegetables, ...fruits};
console.log(plants);

//  creating a new object with cycle for in

const building = {
  walls: true,
  floor: 'laminate',
  stage: 23
}

const copyBuilding = {};

for(let key in building) {
  copyBuilding[key] = building[key];
}

copyBuilding.window = 'glass';

console.log(building);
console.log(copyBuilding);
console.log(building == copyBuilding);


// Method of deep coping with JSON.stringify() and JSON.parse()

const house = {
  window: {
    one: 'glass',
    two: 'plastic'
  },
  door: 'wooden',
  floor: 'laminate'
}

const newHouse = JSON.parse(JSON.stringify(house));
console.log(newHouse);
console.log(newHouse.window === house.window); // false

newHouse.window.color = 'white';
console.log(newHouse);

// Deep copying of objects with new method of JS 'structuredClone()' the best way for now

const user = {
  userName: 'Andrew',
  userAge: 47,
  birthday: new Date('1977-01-28').toLocaleDateString(),
  isMarried: false,
  children: {
    daughterOne: {
      daughterOneName: 'Milana',
      daughterOneBirthday: new Date('2003-08-19')//.toLocaleDateString()
    },
    daughterTwo: {
      daughterTwoName: 'Polina',
      daughterTwoBirthday: new Date('2007-04-20')//.toLocaleDateString()
    },
  },
  hasLover: undefined
}

console.log(user);

const user3 = structuredClone(user);
console.log(user3);
console.log(user3 === user); //false
console.log(user3.children.daughterOne === user.children.daughterOne); //false
console.log(user3.children.daughterOne === user.children.daughterOne); //false




// Method of deep copying with recursive function

function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  
  if (Array.isArray(obj)) {
    let arrCopy = [];
    obj.forEach((item, i) => {
      arrCopy[i] = deepCopy(item);
    });
    return arrCopy;
  }
  
  let copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

let original = { 
  name: 'Alice', 
  details: { age: 30, address: { city: 'Wonderland' } } 
};

let deepCopyObj = deepCopy(original);
console.log(deepCopyObj); // Outputs: { name: 'Alice', details: { age: 30, address: { city: 'Wonderland' } } }
console.log(deepCopyObj.details === original.details); // false
console.log(deepCopyObj.details.city === original.details.city); // true

// Method of deep copying with recursive function that includes handling  Date, Map, Set, and RegExp 

function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') return obj;

  if (Array.isArray(obj)) {
    let arrCopy = [];
    obj.forEach((item, i) => {
      arrCopy[i] = deepCopy(item);
    });
    return arrCopy;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (obj instanceof Map) {
    return new Map(Array.from(obj.entries()).map(([key, value]) => [deepCopy(key), deepCopy(value)]));
  }

  if (obj instanceof Set) {
    return new Set(Array.from(obj).map(value => deepCopy(value)));
  }

  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }

  let copy = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

// Example Usage
let original = { 
  name: 'Alice', 
  details: { age: 30, address: { city: 'Wonderland' } },
  birthdate: new Date(),
  scores: new Map([['math', 90], ['science', 85]]),
  favoriteColors: new Set(['red', 'blue'])
};

let deepCopyObj = deepCopy(original);
console.log(deepCopyObj);

// Test to verify deep copy
console.log(original.details === deepCopyObj.details); // Outputs: false
console.log(original.birthdate === deepCopyObj.birthdate); // Outputs: false
console.log(original.scores === deepCopyObj.scores); // Outputs: false
console.log(original.favoriteColors === deepCopyObj.favoriteColors); // Outputs: false


// object destructuring . Assigning object's properties to variables

const userData = {
  userName: 'Andrew',
  userAge: 47,
  birthday: new Date('1977-01-28').toLocaleDateString(),
  isMarried: false,
  daughters: {
    daughterOne: 'Milana',
    daughterTwo: 'Polina'
  },
  childrenCount: 2,
  profession: 'builder',
  hasLover: true,
  // hasPet: false
}

console.log(userData);


// destructuring
const {userName,userAge} = userData;
console.log(userName,userAge);

// destructuring with variables that were declared before
let birthday;
let isMarried;

({birthday, isMarried} = userData);// does'nt work without round brackets
console.log(birthday, isMarried);

//  destructuring with default property

const {hasLover, hasPet = true} = userData;
console.log(hasLover, hasPet);

//  destructuring with renaming

const {childrenCount, profession: prof} = userData;
console.log(childrenCount, prof);

//  destructuring with nested object

const {daughters: {daughterOne, daughterTwo}} = userData;
console.log(daughterOne, daughterTwo);

// destructuring as a function parameter

function showUser({userName, childrenCount}) {
  console.log(`${userName} has ${childrenCount} daughters`);
  
}
showUser(userData);

// Methods Object.keys()  and  Object.values() 

const myFamily = {
  wife: 'irina',
  oldDaughter: 'milana',
  youngDaughter: 'polina'
}
console.log(myFamily);

const familyKeys = Object.keys(myFamily);  // Creates an array from keys
console.log(familyKeys);

const familyValues = Object.values(myFamily);  // Creates an array from values(meaning) 
console.log(familyValues);

// Cycle forEach()  for objects

familyKeys.forEach((key) => {
  console.log(key + ' = ' + myFamily[key]);
})

familyValues.forEach((value) => {
  console.log(value);
})

const week = {
  one: "monday",
  two: "tuesday",
  three: "wednesday",
  four: "Thursday",
  five: "friday",
  six: "saturday",
  seven: "sunday",
};

Object.keys(week).forEach((key) => {
  // Object.keys(object)
  console.log(key + " : " + week[key]);
});

Object.values(week).forEach((value) => {
  // Object.values(object)
  console.log(value);
});

// Method  Object.entries() creates array which consists of arrays which consist of two items - key and value

const week2 = {
  one: "monday",
  two: "tuesday",
  three: "wednesday",
  four: "Thursday",
  five: "friday",
  six: "saturday",
  seven: "sunday",
};

const weekEntries = Object.entries(week2);
console.log(weekEntries);

// Method  Object.fromEntries() creates new object from arrays which consist of two items - key and value

const weekFromEntr = Object.fromEntries(weekEntries);
console.log(weekFromEntr);

const food =  Object.fromEntries([['plum','blue'], ['apple','red'], ['cherry','red']]);
console.log(food);

// object formating with Object.entries and Object.fromEntries

const userInfo2 = {
  name: 'Andrew',
  age: 48,
  hobbies: ['coding', 'hardware', 'rain'],
  canRun () {console.log(`${this.name} can run`)}
};

console.log(userInfo2); // {name: 'Andrew', age: 48, hobbies: Array(3), canRun: ƒ}

const keyValArr = Object.entries(userInfo2);
console.log(keyValArr);

 const formatedArr = keyValArr.map(([key, value]) => {
  return [key.toUpperCase(), value];
});

console.log(formatedArr);

const formatedObj = Object.fromEntries(formatedArr)
console.log(formatedObj); // {NAME: 'Andrew', AGE: 48, HOBBIES: Array(3), CANRUN: ƒ}



// Method freeze() freezes an object an object cannot be changed

const unChanged = {
  model: 'ford',
  color: 'blue',
  width:2,
}
console.log(unChanged);

Object.freeze(unChanged);
unChanged.width = 3;
console.log(unChanged);

// method Object.defineProperty()

const userData = {
  userName: 'Andrew',
  userAge: 47,
  birthday: new Date('1977-01-28').toLocaleDateString(),
  isMarried: false,
  hasLover: undefined
}

Object.defineProperty(userData, 'passport', {
  value: '34tt58uy',
  enumerable: false // true or false
})

const userDataArr = Object.entries(userData);
console.log(userDataArr);
userDataArr.map(([index, item]) => console.log(index, item))


// Method Object.seal Allows you to change existing properties, but does not allow you to add new ones

const changed = {
  model: 'ford',
  color: 'blue',
  width:2,
}
console.log(changed);

Object.seal(changed);
changed.width = 3;
delete changed.model;

console.log(changed);

// this  keyword in an object method(in function) that refers to the given object

const car3 = {
  model: 'ford',
  color: 'blue',
  width:2,
  length: 4.3,
  power: 140,
  speed: 200,
  carGo: function() {
    console.log(this);
    console.log(`${this.model} goes ${this.speed} km/h`)
  },
  carStop() {   // short version of writing function in objects
    console.log(`${this.model} can stop in 3 seconds`)
  }
 }

console.log(car3);
car3.carGo();
car3.carStop();

// keyword this on click

const lists = document.querySelectorAll('.list');

function changeBg() {
  console.log(this)
  this.style.backgroundColor = 'red';
}

lists.forEach((item) => { // item which is 'onclick' === this
  item.onclick = changeBg;
})

//  Method 'this' in object functions.Arrow function does not have 'this'
const users1 = {
  userNames: ['andrew', 'irina', 'milana', 'polina'],
  userAddres: ['melitipol', 'bahmut', 'melitopol',' melitopol'],
  showNames() {
    this.userNames.forEach((item,index) => {  // arrow function with this inside the object
      console.log(`Hello, my name is ${this.userNames[index]}`)  
    })
  },
  showCities() {
    this.userAddres.forEach((item, index) => {   // arrow function with this inside the object
      console.log(`I am from ${this.userAddres[index]}.It is number-${index} in this list`) 
    })
  },
}

users1.showNames();
users1.showCities();

// cycle for in to iterate over an object

const car4 = {
  model: 'mustang',
  color: 'green',
  width:2,
  length: 4.3,
  power: 180,
  speed: 250,
  carGo: function() {
    console.log(this);
    console.log(`${this.model} goes ${this.speed} km/h`)
  }
 }

console.log(car4);

for(let key in car4) {
  console.log(key);  // shows keys of the object
}

for(let key in car4) {
  console.log(car4[key]);   // shows meaning of the keys in object 
}

//  iterating over an object using recursion. It is needed to iterate over nested objects

const nestedObject = {
  name: "Alice",
  details: {
    age: 30,
    address: {
      street: "123 Main St",
      city: "Wonderland"
    }
  },
  hobbies: ["Reading", "Traveling"]
};

function iterateObject(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      console.log(`Entering ${key}:`);
      iterateObject(obj[key]); // Recursion for nested object
    } else {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

iterateObject(nestedObject);

// Outputs:
// name: Alice
// Entering details:
// age: 30
// Entering address:
// street: 123 Main St
// city: Wonderland
// hobbies: Reading,Traveling


// Optional chain with operator '?.' Сhecks for the presence of a property in an object
// Outputs 'undefined' instead of an 'error'

const firstObject = {
  shape: 'sphere',
  color: 'green',
  inner: {
    one: 'fast',
    two: 'slow',
  }
}

const secondObject = {
  shape: 'sphere',
  color: 'green',
}

function getObjInfo(obj) {
  console.log(obj.inner?.one)
}

getObjInfo(firstObject); // return fast
getObjInfo(secondObject); // return undefine instead of error


// prototype inheritance in objects
// __proto__ - method for inheritance in objects (not in classes In classes we use 'extends' keyword)
// __proto__ is a method of the object(instance)
// object.__proto__ - refers to the prototype of the Object
// object.__proto__ === Object.prototype - true
// null and undefined do not have __proto__

const object = {

  water: true,
  milk: true,
  sugar: true,
  coffee: true,
  cups: true,
}

console.log(object.__proto__ === Object.prototype); // true   Object is a javascript class


const array = [1,2,3,4];
console.log(array.__proto__ === Array.prototype); // true   Array is a javascript class

const someString = "hello";
console.log(someString.__proto__ === String.prototype); // true   String is a javascript class

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

// first example with prototype inheritance (__proto__)

const objA = {
  'text': 'Hello World',
  'color': 'green',
  'fontSize': '25px',
  
}
document.body.append(`${objA.color}, ${objA.fontSize}`) // green, large
console.log(objA);

const obj2 = {
  'textTransform': 'uppercase',
  __proto__: objA
}

console.log(obj2);
console.log(obj2.text);

const string = document.createElement('h2');
string.innerHTML = obj2.text; // inherits from obj1
string.style.cssText = `
  color: ${obj2.color}; 
  font-size: ${obj2.fontSize}; 
  text-transform: ${obj2.textTransform}
  `;
document.body.append(string);


// second example with prototype (__proto__)

const user = {
  'login': '',
  'password': '',
  passwordValidate: function() {
    if (this.password.length < 8) {
      return false
    } else {
      return true
    }
  },
}

user.login = 'dreamer';
user.password = '123456789';
console.log(user);
console.log(user.passwordValidate());


const userProfile = {
  'username': '',
  'userphoto': '',
  'userage': 0,
  __proto__: user
}

// filling the object's properties
userProfile.username = 'andrew';
userProfile.userphoto = 'https://cdn-icons-png.flaticon.com/512/149/149071.png';
userProfile.userage = 46;

console.log(userProfile);
console.log(userProfile.password); // inherits from user

// example with appending cards from object to the page

const goodsList = {
  products : [
   {
     'id': '001',
     'title': 'goods 1',
     'price': 100,
     'image': 'https://picsum.photos/id/238/200/300'
   },
   {
     'id': '002',
     'title': 'goods 2',
     'price': 200,
     'image': 'https://picsum.photos/id/236/200/300'
   },
   {
     'id': '003',
     'title': 'goods 3',
     'price': 300,
     'image': 'https://picsum.photos/id/235/200/300'
   },
   {
     'id': '004',
     'title': 'goods 4',
     'price': 300,
     'image': 'https://picsum.photos/id/233/200/300'
   }
 ],

 render() {
   const goodsContainer = document.querySelector('.goods-container');
   
   for(let item of this.products) {
     const card = document.createElement('div');
     card.classList.add('goods-card');
     card.innerHTML = `
     <h3>${item.title}</h3>
     <img class="goods-img" src="${item.image}" alt="${item.title}">
       <p>${item.price} uah</p>
       <button class="button" id="${item.id}">buy</button>
     `;
     goodsContainer.appendChild(card);
   }
 },

  click() {
    const btns = document.querySelectorAll('.button');
    btns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      console.log(event.target.id);
      btn.closest('.goods-card').style.backgroundColor = 'green';
      const newCard =  btn.closest('.goods-card').cloneNode(true);
      document.body.append(newCard);
    })
    })
}
 
}

goodsList.render();
goodsList.click();


// getters and setters in objects

const person = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  },

   get showInfo() {
    return `${person.name} ${person.age} ${person.address.city} ${person.address.country}`
  },

  set showInfo(value) {
    const info = value.split(' '); 
    this.name = info[0];
    this.age = info[1];
    this.address.city = info[2][0];
    this.address.country = info[3][1];
  }
}

console.log(person.showInfo); // John 30 New York USA
// because of getter and setter we can change the property
const admin = person.showInfo = 'Sara 25 Dalas USA';
console.log(admin); // Sara 25 Dalas USA




// CLASSES and CONSTRUCTOR()

// creating a class with constructor
class Cars {
  constructor(model,color,width,length,power,speed) {
    this.model = model;
    this.color = color;
    this.width = width;
    this.length = length;
    this.power = power;
    this.speed = speed;
  }
  carGo() {
    console.log(`${this.model} goes ${this.speed} km/h`);
  }
}

//creating objects by cars class

const cars1 = new Cars('volvo', 'orange', 1.9, 4.8, 200,230);
const cars2 = new Cars('opel', 'white', 1.8, 4.7, 180,210);

console.log(cars1);
console.log(cars2);

// call method carGo for each object

cars1.carGo();
cars2.carGo();

//  Functions - constructors for creating object templates.  Return an object

class City {
constructor(house,road,park) {
  this.house = house;
  this.road = road;
  this.park = park
}
}

const Kharkiv = new City('stone',true,'green');
console.log(Kharkiv);

const Kiyiv = new City('stone',true,'yellow');
console.log( Kiyiv);

 console.log(Kharkiv == Kiyiv); // false






