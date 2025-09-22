// CONTENT
// 1
// 2
// 3
// 4
// 5
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20

// FUNCTIONS

// FUNCTION DECLARATION

function sayHi() { // function declaration
  console.log('Hi,everybody!');
}
sayHi(); // function call


// FUNCTION EXPRESSION

// Cannot be called before it is declared..
// Can be used to avoid issues with dynamic typing because of const

const sayHello = function () {
  console.log('Hello,everybody!');
}
sayHello();

//  FUNCTION PARAMETERS  AND  FUNCTION ARGUMENTS

function multiplier(a, b) { // parameters
  console.log(a * b);
}
multiplier(2, 10); // arguments
multiplier(20, 5); // arguments

//-----------------------------

function showSum(elem, a, b) { // parameters
  document.querySelector(elem).addEventListener('click', function () {
    document.querySelector(elem).textContent = a + b;
  })

}

showSum('.circle', 10, 30); // arguments
showSum('.circle2', 50, 30); // arguments


//------------------------------------------

const writeText = function (text) {
  console.log(`Our story is ${text} .`)
}
writeText('a blue sea');
writeText('the long roads');

//  DEFAULT PARAMETERS

function plusNum(a, b = 10) {
  console.log(a + b);
}
plusNum(20, 30);
plusNum(50);

//-------------------------------------

function showsum2(a, b, elem = ('.circle3')) { // correct order of default parameters
  document.querySelector(elem).addEventListener('click', function () {
    document.querySelector(elem).textContent = a + b;
  })

}

showsum2(60, 30); // incomplete arguments
showsum2(50, 30, '.circle4'); // comlete arguments

// Array of arguments  --- arguments.  Arguments are not Array it is an Object

function arrOfArg(a, b, elem) {
  console.log(arguments);
  console.log(Object.values(arguments)); // Shows an array of arguments
}

arrOfArg(10, 20, '.circle5');

// Method rest instead of arguments. Creates an array from arguments

function showsum3(...args) {
  console.log(args);
  let sum = args.reduce((accum, item) => accum += item);
  console.log(sum);
  let change = args.map((item) => item * 2);
  console.log(change);
}

showsum3(10, 20, 30, 40, 50);
showsum3(10, 20, 30, 40, 50, 60);

// function as an argument in another function

function showResalt(resalt) {
  console.log(resalt * 2);
}

function getResalt(num, func) {
  func(num);
}

getResalt(100, showResalt);
getResalt(122, showResalt);

// function as an argument in another function with rest parameter

function showResalt2(resalt) {
  console.log(resalt);
  document.querySelector('.resalt').innerHTML += resalt + '<br>';
}

function getResalt2(func, ...num) { // correct order of rest parameters
  func(num);
}

getResalt2(showResalt2, 30, 40, 10);
getResalt2(showResalt2, 5, 6, 78);
getResalt2(showResalt2, 50, 66, 79, 900);



// RETURN  AND  UNDEFINED

// undefined
function plusNum2(x, y) {
  console.log(x + y); // returns undefined
}
plusNum2(10, 25);

let resalt = plusNum2(25, 65);
console.log(resalt) // returns undefined

// return 
function plusNum3(x, y) {
  return x + y; //  returns sum of x, y
}

let resalt3 = plusNum3(13, 65);
console.log(resalt3);

// wrap to another line with brackets

function getSum(a, b) {
  const sum = a + b;
  // first method to return
   return sum;
  // second method to return with brackets
  return (
    sum
  );
  // the wrong way to return
  return 
    sum
}
console.log(getSum(5, 10))

// function returns deferent results

function filter(a, b) {
  if (a < b) {
    return console.log('wrong way');
  }
  return console.log(a - b);
}

filter(10, 5);
filter(5, 10);

// Return object from parameters

// not explicit return using brackets () => ({});
const newPost1 = (post, postDate = Date().slice(0,21)) => ({
  ...post,
  postDate: postDate

});

// explicit return using return inside function body
const newPost2 = (post, postDate = Date().slice(0,21)) => {
  return {...post, postDate: postDate}
};

const myPost = {
  id: 1,
  autor: 'Andrew'
}

console.log(newPost1(myPost));
console.log(newPost2(myPost));

//  CALLBACK FUNCTIONS

function showTime(func) {
  console.log(func);
}

showTime(getTime());

function getTime() {
  let date = Date()
  return date;
}
//---------------------------

function showTime2() {
  getTime2()
}
showTime2();

function getTime2() {
  return console.log(Date());
}

// SELF-CALLING FUNCTION

(function () {
  console.log('Self-calling function')
})();

//----------------------------

(function (a, b) {
  console.log(a + b);
})(10, 20);

//--------------------------------

(() => {
  console.log('arrow self-calling function');
})();

//  ARROW FUNCTIONS  do not have 'this', do not have 'arguments'
// arrow function does not has a constructor
// Arrow function does not have 'this'

const arrowFunc = () => {
  return console.log('Hello,I am an arrow function!'); // explicit return
}
arrowFunc();

//--------------------------------

const arrowFunc2 = () => console.log('Hello,I am an arrow function-2!'); // not explicit return
arrowFunc2();

//--------------------------

const arrowFunc3 = g => console.log(g * 2); // not explicit return and parameter without brackets
arrowFunc3(100);

//------------------------------

const multiply2 = (value, multiplier = 10) => {  // default parameter value
  return value * multiplier; //  explicit return
};
console.log(multiply2(7, 10));
console.log(multiply2(6));

//---------------------------------

const multiply3 = (value, multiplier = 10) => value * multiplier; // not explicit return and default parameter value
console.log(multiply3(8, 10));
console.log(multiply3(7));

//  Method 'this' in object's functions.Arrow function does not have 'this'

const users1 = {
  userNames: ['andrew', 'irina', 'milana', 'polina'],
  userAddres: ['melitipol', 'bahmut', 'melitopol', ' melitopol'],
  showNames() {
    this.userNames.forEach((item, index) => { // arrow function with this inside the object
      console.log(`Hello, my name is ${this.userNames[index]}`)
    })
  },
  showCities() {
    this.userAddres.forEach((item, index) => { // arrow function with this inside the object
      console.log(`I am from ${this.userAddres[index]}.It is number-${index} in this list`)
    })
  },
}

users1.showNames();
users1.showCities();

// Keyword 'this' for creating a new array's function(method) in Array.prototype

const numbers = [3, 7, 4, 9, 1, 4];
const bigNnumbers = [30, 700, 400, 90, 1000, 40];


Array.prototype.devider = function (d) {
  return this.map((item) => {
    return item / d;
  })
}

console.log(numbers.devider(2));
console.log(bigNnumbers.devider(10));


// arrow functions do not have Method 'arguments'

// ordinary function

function arg() {
  console.log(arguments);
}
arg(1, 2, 4, 6, 9);

// does not work

const anonymous = () => {
  //  console.log(arguments); // error
}
anonymous(10, 30, 50, 34)

// Method spread insted of 'arguments'

const anonymous2 = (...args) => {
  console.log(args); // returns an array
}
anonymous2(10, 30, 50, 34)


//  Callback functions  function which is calling as argument inside another function

const joinArr = [30, 40, 50, 60];

function multi(item) { // callback function
  return item * 2;
}

const joinStr = joinArr.map(multi);
console.log(joinStr);

//   another example of callback function

const nameBtn = document.querySelector('#button-1');
const nameInput = document.querySelector('#input-1');
const nameOut = document.querySelector('.out-block')

nameBtn.addEventListener('click', () => {
  enterName(trimFnc); // callback function
});

function enterName(fnc) {
  const userName = nameInput.value;
  nameOut.innerHTML = fnc(userName);
  console.log(fnc(userName));
}

function trimFnc(str) { // callback function
  return str.trim().toLowerCase();
}

//  Functions - constructors for creating object templates.  Return an object

function City(house, road, park) {
  this.house = house;
  this.road = road;
  this.park = park
}

const Kharkiv = new City('stone', true, 'green');
console.log(Kharkiv);

const Kiyiv = new City('stone', true, 'yellow');
console.log(Kiyiv);

console.log(Kharkiv == Kiyiv); // false


// Context replacement  Methods of functions -- call()  bind()  apply()
// THIS - this is a link to the object that is calling the code at this moment

function showThis() { // function does not have 'this'
  console.log(this);
}
showThis() // shows window

// Method call()

const citizen = { //create an object
  planet: 'Earth',
  country: 'Ukraine',
  city: 'Kharkiv',
}

function callFnc() { //create a function with this
  console.log(this);
}
callFnc.call(citizen); // calling the function with method 'call'
callFnc.call(citizen.planet); // calling the function with method 'call'
callFnc.call(citizen.city); // calling the function with method 'call'

// example with call and button

const btn2 = document.querySelector('#this2');
const textContainer = document.querySelector('.text-container');

const userList1 = [
  {userName: 'andrew', userAge: 46},
  {userName: 'ira', userAge: 49},
  {userName: 'nastya', userAge: 29},
  {userName: 'philip', userAge: 31},
  {userName: 'andrew', userAge: 46},
]

const userList2 = [
  {userName: 'matwey', userAge: 46},
  {userName: 'jon', userAge: 49},
  {userName: 'nina', userAge: 29},
  {userName: 'donald', userAge: 31},
  {userName: 'anton', userAge: 46},
]

function showInfo () {
   this.forEach((item) => {  // in the function showInfo THIS == any array with objects as items and properties userName ( userList1,  userList2)
    textContainer.textContent += item.userName + ' ' ;
  })
  console.log(this)
}

btn2.addEventListener('click', () => {
  // showInfo.call(userList1);
  showInfo.call(userList2);
});

// Method 'call' and parameters in function

function callFnc(text1, text2) { //create a function with this
  console.log(text1 + this.planet + text2 + this.country);
}
callFnc.call(citizen, 'I live on ', ' My country is '); // arguments in method 'call'

// Metod 'apply'  is like a method 'call'. But it has an array in arguments 

callFnc.apply(citizen, ['I live on ', ' My country is ']); // arguments in method 'apply' are in an array

// Method 'bind'  with bind we can create a variable in wich some function and some object(this) will be binded

const newfnc = callFnc.bind(citizen, 'I live on ', ' My country is '); // assign a value to a variable with 'bind'

newfnc();

// 'bind' can split parameters

const newfnc2 = callFnc.bind(citizen, 'I live on ');
newfnc2(' My country is ');
newfnc2(' My country is not ');

// Method 'bind' without 'this' in a function

function multy(a, b) {
  console.log(a * b);
}

const multyRes1 = multy.bind(null, 2, 10); // write 'null' insted of 'this' in the first argument 
multyRes1();

const multyRes2 = multy.bind(null, 10); // write 'null' insted of 'this' in the first argument
multyRes2(4);

// bind - pulling a method from an object ------------------

// object with methods
const employeesList = {
  frontEnd:{
    name: 'andrew',
    createFront() {
      console.log(this)
      console.log('Some frontend code');
    }
  },
  backEnd:{
    name: 'anton',
    createBack() {
      console.log(this)
      console.log('Some backend code');
    }
  },
}
// call the method createFront()
employeesList.frontEnd.createFront();

// object without methods
const newEmployee = {
  trainee: {
    name: 'polina'
  }
}
// call the method createFront() for another object with bind
const newCreateFront = employeesList.frontEnd.createFront.bind(newEmployee);
newCreateFront();

const newCreateBack = employeesList.backEnd.createBack.bind(newEmployee);
newCreateBack();

// Examples with method 'bind'  ------------------------

// first example with 'bind'

const myAuto = {
  model: 'Tesla',
  color: 'red',
  price: 10000,
  drive() {
    console.log(this)
    console.log(`Let's start our ${this.model}`)
  },
}
myAuto.drive();

// const newMyAuto = myAuto.drive; // wrong way to assign function to the new const
// newMyAuto()

const newMyAuto = myAuto.drive.bind(myAuto); // right way to assign function to the new const with method 'bind'
newMyAuto();

// create new object without function 'drive'.It will take it from myAuto

const motoBike = {
  model: 'Suzuki',
  color: 'red',
  price: 70000,
}

const motoDrive = myAuto.drive.bind(motoBike);
motoDrive();

// second example with bind

//const outers = document.querySelectorAll('.out-block');
const out1 = document.querySelector('#out-1');
const out2 = document.querySelector('#out-2');
const out3 = document.querySelector('#out-3');
const input = document.querySelector('#input-2');
const valButton = document.querySelector('#button-2');

function showVal(val) {
  // this.forEach(item => {
  //   item.innerHTML = val.value;
  // });
  this.innerHTML = val.value;
}

// const showVal1 = showVal.bind(outers,input);
const showVal2 = showVal.bind(out2, input);
// const showVal3 = showVal.bind(out3,input);


valButton.addEventListener('click', showVal2);
valButton.addEventListener('click',showVal2);
valButton.addEventListener('click',showVal3);

// another example with bind
const goods = {
  title: 'phone',
  price: 120,
  count: 3,
  calcPrice() {
    console.log(this.count * this.price);
    console.log( this);
    
  }
}
goods.calcPrice(); // calling calcPrice for its parent object

const goods2 = {
  title: 'phone',
  price: 100,
  count: 3,
}

const calculatePrice = goods.calcPrice.bind(goods2);
 calculatePrice(); // calling calcPrice for another object


// example with call()  apply()  bind()  // calling function calculate inside function detailing

const bill = {
  tips: 0.1,
  calculate(total) {
    return total + total * this.tips;
  },
  detailing(dish1, dish2, sum) {
    return `Your dinner (${dish1},${dish2}) costs (${this.calculate(sum)})`;
  }
}

console.log(bill.calculate(800)); // calling function calculate
console.log(bill.detailing('pizza', 'salad', 1200)); // calling function calculate inside function detailing

const newBill = bill.detailing.call(bill, 'big mak', 'salad', 600);
console.log(newBill);

const newBill2 = bill.detailing.apply(bill, ['big tasty', 'cola', 700]);
console.log(newBill2);

const newBill3 = bill.detailing.bind(bill, 'hot dog', 'free', 800);
console.log(newBill3());



// recursion  - calling a function on itself

let t = 0;

function sd() {
  t++;
  console.log(t)
  if (t === 10) return;
   anim()
}

function anim() {
  setTimeout(() => {
    sd();
  }, 200);
}
anim();

// example with recursion moving an item
const item = document.querySelector('.anim');
let count = 0;
function moveItem() {
  count = count + 10;
  setTimeout(() => {
    // item.style.left = count + 'px';
    item.style.transform = `translateX(${count}px)`
    moveItem()
  }, 100);
  if(count === 250) {
    // return false;
    count = 0;
  }
}
   moveItem();

// example with recursion How to get all parents from object
const parentTree = {
  'isaev': {
    age: 46,
    parents: {
      'isaeva': {
        age: 65,
        parents: {
          'lidia': {
            age: 85,
            parents: {}
          },
          'ivan': {
            age: 87,
            parents: {}
          }
        }
      },
      'alexandr': {
        age: 60,
        parents: {}
      }
    }
  },
  'chumakov': {
    age: 36,
    parents: {
      'nina': {
        age: 65,
        parents: {
          'oxana': {
            age: 75,
            parents: {}
          },
          'petr': {
            age: 87,
            parents: {}
          }
        }
      },
      'alexey': {
        age: 60,
        parents: {}
      }
    }
  }
}
console.log(parentTree);

function getParents(obj) {
  if(obj.parents !== undefined) {
    for(let key in obj.parents) {
      console.log(key);
      getParents(obj.parents[key])
    }
  }
}

// calling getParent function in a loop
for(let key in parentTree) {
  getParents(parentTree[key])
}

 // Function to enumerate DOM elements recursively
 function enumerateDOM(element, depth = 0) {
  // Print the current element's tag name with indentation based on depth
  console.log(`${' '.repeat(depth * 2)}${element.tagName}`);
  
  // Iterate over the child elements and call the function recursively
  Array.from(element.children).forEach(child => {
    enumerateDOM(child, depth + 1);
  });
}

// Usage example: Enumerate all elements within the document body
enumerateDOM(document.querySelector('body'));


// closures

function wrapper() {

  let counter = 0;

  function plus() {
    console.log(counter);
    counter++;
  }

  plus();
  plus()
  plus()

}
wrapper();

// closures with anonym function

(function () {

  let counter = 0;
  function plus() {
    console.log(counter);
    counter = counter + 5;
  }

  plus();
  plus()
  plus()

})();

// closures with return
function wrapper2() {

  let counter = 0;
  return function () {
    console.log(counter);
    counter++;
  }

}

let newWrapper = wrapper2();
newWrapper();
newWrapper();
newWrapper();

// example with changing balance

function changeBalance() {
  let balance = 0;
  return function (sum) {
    balance += sum;
    console.log(`Balance is ${balance}`);
  }
}

const newBalance = changeBalance();
newBalance(100);
newBalance(200);
newBalance(-100);

const newBalance2 = changeBalance();
newBalance2(1000);
newBalance2(200);
newBalance2(-500);

// closures with parameter

function makeCounter(count) {
  return function () {
  return  count++;
  }
 }

 const newCounter =  makeCounter(0)
 console.log(newCounter()); // 0
 console.log(newCounter()); // 1
 console.log(newCounter()); // 2
 
 const newCounter1 =  makeCounter(10);
 console.log(newCounter1()); // 10
 console.log(newCounter1()); // 11
 console.log(newCounter1()); // 12


// recursion in closures

function cl() {

  let count = 0;
  return function sd() {
    count++;
    console.log(count)
    if (count === 10) return;
    sd()
  }

}
let callFunc = cl();
callFunc();

let callFunc2 = cl();
callFunc2();

// closures with object

function createCounter() {
  let count = 0;
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // Outputs: 1
console.log(counter.decrement()); // Outputs: 0

// function multiplier with closures

function createMultiplier(multiplier) {
  return function(value) {
    return value * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5)); // Outputs: 10
console.log(triple(5)); // Outputs: 15

// counter for button's clicks
function addClickCounter(button) {
  let count = 0;
  button.addEventListener('click', function () {
    count++;
    console.log(`${this.textContent} clicked ${count} times`);
  });
}

const button = document.querySelector('#btn-1');
addClickCounter(button);

const button2 = document.querySelector('#btn-2');
addClickCounter(button2);


// Destructuring function parameters

// some object
const userData = {
  userName: 'Andrew',
  userAge: 46,
  userCity: 'Kharkiv'
}

// function witch creates new variables from object's properties
const userInfo = ({userName, userCity}) => {
  return `${userName}, ${userCity}`;
}
console.log(userInfo(userData)); // object as argument


// Decorator function  takes another function as a parameter and changes its behavior

//  learn later...

// async callback functions 

//  learn later...