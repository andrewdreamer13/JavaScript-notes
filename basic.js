
// Console's methods:
// console.log();
// console.dir();
// console.table();

// VARIABLES

// Variables's  naming style:
// PascalCase - naming style for Types and Classes
// camelCase - naming style for all varriables
// CAPITAL_CASE - naming for not changed constants(for example - passwords)

// Declaration of varriables:
// var - old declaration method
// let - declaration for variables
// const - declaration for constants

let myText; // variable value = undefined 
myText = "Goodbye everybody"; // variable value = Goodbye everybody

let text = "Hello everybody"; // declaring a variable and assigning a value in one line

const birthDay = 1977; // declaring a constant and assigning a value only in one line

// DATA TYPES(variables types)

// 1 string - primitive type
// 2 number - primitive type
// 3 undefined(undefined) - primitive type
// 4 null(null) - primitive type
// 5 boolean(true or false) - primitive type
// 6 simbol - primitive type
// 7 object(objects or arrays) - link type
// 8 BigInt - type for a very big numbers

// TYPEOF operator -  shows type of element 
// JavaScript is a dynamic typing language
// to avoid issues with variable typing use const instead of let

let string = "text";
console.log(string);
console.log(typeof string); // string

string = 120;
console.log(string);
console.log(typeof string); // number

//-----------------------------
let number = 100;
console.log(number);
console.log(typeof number); // number

number = true;
console.log(number);
console.log(typeof number); // bulean

//------------------------------
let unknown = undefined;
console.log(unknown);
console.log(typeof unknown); // undefined

unknown = "unknown";
console.log(unknown);
console.log(typeof unknown); // string

//-------------------------
let empty = null;
console.log(empty);
console.log(typeof empty); // null

empty = 0;
console.log(empty);
console.log(typeof empty); // number

//---------------------------
let logic = true;
console.log(logic);
console.log(typeof logic); // bulean

logic = {
  key1: "food",
  key2: true,
  key3: 50,
};
console.log(logic);
console.log(typeof logic); // object

//----------------------------
let myObject = {
  one: "string",
  two: "number",
  three: false,
};
console.log(myObject);
console.log(typeof myObject); // object

myObject = null;
console.log(myObject);
console.log(typeof myObject); // null

//  does'nt change const
const count = 100;
console.log(count);
console.log(typeof count); // number
// count = 'hello'; // This doesn't work

const food = {
  one: "meat",
  two: "fish",
  three: "fruit",
};
console.log(food);
console.log(typeof food); // object

//food = 10; // This doesn't work

//   OPERATORS

//  =     assign
//  +=    increases variable value and assigns new value to this variable
//  ==    not strict equals
//  ===   strict equals
//  !     not  Always true or false in results
//  !!    not not
//  !=    not a strict inequality
//  !==   a strict inequality
//  >     more
//  <     less
//  >=    more-or-equals
//  <=    less-or-equals
//  +     plus or string concatenation
//  ++    increases number by 1
//  -     minus
//  --    decreases number by 1
//  *     multiply
//  **     exponentiation (2 ** 2 or 2 ** 3)
//  /     divide
//  %     reduce division to zero
//  &&    and  (Always returns value from one of operands)
//  ||    or  (Always returns value from one of operands)
//  ,     comma
//  .     access to methods
//  ...   destructuring operator  (spread operator) Separates object and array into properties
//  ? :   ternary operator  => example =>  (condition) ? (condition true) : (condition false) 
//  ()    expression
//  []    array
//  {}    object  
//  /n    line break character
//  ${}   template string 

//  typeof  - shows type of element 
//  instanceof - shows belonging to class
//  delete - deletes properties(keys) in objects 
//  new - creates a new instance of an object (let instance = new Object())


//  function Boolean(value) - shows true or false
//  false values :
//  false ,
//  0 ,
//  '' ,
//  undefined ,
//  null


// JS docs
// write /** */ before the function and then click tab to open docs
// in the first string of the docs you can write description of the function
// in the second string you can write parameters of the function and their types and some coment
// in the third string you can write return, type that the function will return and coment

/**
 * Function that transforms time to minutes
 * @param {string} time string in format hh:mm
 * @returns {number}  integer value of time in minutes
 */

function getTimeToMinute(time) {
  let timeArr = time.split(':');
  return +timeArr[0] * 60 + +timeArr[1];
}

console.log(getTimeToMinute('03:00')); // 180
