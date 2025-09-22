// NUMBERS

// ways to create number

let numb1 = 100;
console.log(numb1); // 100

let numb2 = Number(34);
console.log(numb2); // 34

let numb3 = new Number(50);
console.log(numb3); // object Number {50}
numb3 = numb3.valueOf();
console.log(numb3); // 50


// Method  toString

const num = 255;

console.log(num.toString()); //   calling a method toString() on a variable  (result -  255)
console.log(num.toString(2)); //  calling a method toString() on a variable (result - 11111111)
console.log(num.toString(16)); // calling a method toString() on a variable (result - ff)
console.log(255..toString()) //    calling a method toString() on a number using the 'dot' operator
console.log((255).toString()); // calling a method toString() on a number using rounded braces '()'

// Method Number - makes number from string or we can use operator +

const num4 = 10.456;
console.log(Number(num4.toFixed(1)));
console.log(+num4.toFixed(1));

// Object Math

const num1 = 1.5;

// Math.floor(num) rounding down a number
console.log(Math.floor(num1));

// Math.ceil(num)  rounding up a number
console.log(Math.ceil(num1));

// Math.round(num with fraction) rounding a number to the nearest whole number
console.log(Math.round(3.4));

// Math.trunc  returns a number without fractional part
console.log(Math.trunc(3.6)); // returns 3

// Method toFixed()
const num2 = 23.34567;

console.log(num2.toFixed(1)); // cut the fractional part of a number returns string
console.log(num2.toFixed(2)); // cut the fractional part of a number returns string
console.log(num2.toFixed(4)); // cut the fractional part of a number returns string

console.log(+(0.1 + 0.2).toFixed(1)); // Method how to return number 
console.log(Number((0.1 + 0.2).toFixed(1))); // Method how to return number

// Method toPrecision(2) cuts numbers from beginning. Returns a string

const num6 = 34.5678;
console.log(num6.toPrecision(2)); // 35 (string)
console.log(+num6.toPrecision(2)); // 35 (number)
console.log(Number(num6.toPrecision(2))); // 35 (number)

// Math.random() generates random numbers from zero to one not including one
console.log(Math.random());

// random numbers from 0 to 10

console.log(Math.round(Math.random() * 10));

// a function that returns a random integer in a given range

function getRandomInt(min,max) {
  return Math.round(Math.random() * (max - min) + min);
}
console.log(getRandomInt(100,200))

// random body background color

document.querySelector('body').style.backgroundColor = `rgb(
  ${Math.round(Math.random() * 255)},
  ${Math.round(Math.random() * 255)},
  ${Math.round(Math.random() * 255)})`;

// random body background color using getRandomInt function

document.querySelector('.random-square').addEventListener('mouseenter',() => {
  document.querySelector('.random-square').style.backgroundColor = `rgb(
    ${getRandomInt(0,250)},
    ${getRandomInt(0,250)},
    ${getRandomInt(0,250)}`;
}); 

// Math.max(numbers) chooses the biggest number
console.log(Math.max(1, 5, 0, 6));

// Math.min(numbers) chooses the smallest number
console.log(Math.min(1, 5, 0, 6));


// Math.abs()  convert negative numbers to positive

console.log(Math.abs(-10)); // result 10

// Math.pow(number, exponentiation)
// Another way to exponential with operator **

console.log(Math.pow(5, 2)); // result 25
console.log(5 ** 2); // result 25

//Math.sqrt() takes the square root of a number

console.log(Math.sqrt(64)); // result 8

// function isNaN() - determines if an element is a number  returns true or false

console.log(isNaN(NaN)); // true
console.log(isNaN('hello')); // true
console.log(isNaN(10)); // false

const numStr = "str";
if (isNaN(numStr)) {
  console.log('Not a number');
} else {
  console.log('Number');
}

// how to remove NaN from array
const someAr = [1, 2, NaN, 3, 4, NaN];
console.log(someAr);
let filteredSomAr = someAr.filter((item) => {
  return !Number.isNaN(item);
} );
console.log(filteredSomAr); // [1, 2, 3, 4]
console.log(someAr); // [1, 2, NaN, 3, 4, NaN]


// function isFinite() - determines if a number is finite  returns true or false

console.log(isFinite(100)); // true
console.log(isFinite('100')); //true
console.log(isFinite('hello')); // false
console.log(isFinite(Infinity)); // false

// Method parseInt()  extracts  numbers from a string only if number is the first in the string

const anyString = 'About 120 peoples were killed'; // does not work. returns NaN
const html1 = '200px';
const html2 = '300%';
const html3 = '240vh';

console.log(parseInt(anyString)); // does not work. returns NaN
console.log(parseInt(html1)); // 200
console.log(parseInt(html2)); // 300
console.log(parseInt(html3)); // 240


// Method parseFloat() extracts numbers from a string with a fraction

const html4 = '20.2px';
const html5 = '30.68%';
const html6 = '120.5vh';

console.log(parseFloat(html4));
console.log(parseFloat(html5));
console.log(parseFloat(html6));
console.log(parseInt(html6)); // returns without fraction

//------------------

// in JS 1% = 1/100
// 12% from 100 = 100 * 0.12

console.log(`12% from 100 = ${100 * 0.12} `) // return 12

// converting Celsius and Fahrenheit 

console.log((25 * (9 / 5)) + 32); // from Celsius to Fahrenheit
console.log(25 * 1.8  + 32); // from Celsius to Fahrenheit

console.log((86 -32) * 5 / 9); // from Fahrenheit to Celsius 