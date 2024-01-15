
//  STRINGS

// Property length

const anyString1 = 'hello!';

console.log(anyString1.length);
console.log(anyString1[2]); // Method to find index of character  new version
console.log(anyString1.charAt(5));// Method to find index of character old version
console.log(anyString1[anyString1.length - 1]); // last character in the string

// replace characters in the string

const anyStr = 'hello,people!';
console.log(anyStr);

// anyStr[0] = 'H';
// console.log(anyStr);// does'nt work

const newAnyStr = anyStr.split('');
console.log(newAnyStr);
newAnyStr[0] = 'H';
console.log(newAnyStr);
const anyStr2 = newAnyStr.join('');
console.log(anyStr2);

// Metod /n and the same resalt with ``

const brokenLine = 'I am a broken line.\nI am a broken line.\nI am a broken line.';
console.log(brokenLine);

const brokenLine2 =
 `I am a broken line 2.
I am a broken line 2.
I am a broken line 2.`;
console.log(brokenLine2);

// Method tab stop - \t

const brokenLine3 = 'I am a broken line.\n\tI am a broken line.\n\t\tI am a broken line.';
console.log(brokenLine3);

// Method shielding -  backslash \

const anyString = 'I will remember \'you\'!';
console.log(anyString);

//Method concat

let hello = 'Hello!';
let toWhom = ' Dear Andrew';
console.log(hello + toWhom);

//------------------------------

const userName = 'Andrew';
console.log('hello! ' + userName +  ' How are you?');

// Template strings(interpolation) 

let animal = 'cat';
console.log(`Is this your ${animal} ?`);

//---------------------------------------

const input = document.querySelector('.input-name');
const btn = document.querySelector('#btn');

btn.addEventListener('click',() => {
  const yourName = input.value;
  console.log(`Hello,mister ${yourName} How are you?`);
})

// Method 'codePointAt(index if character)' shows charset of character

const anyString0 = 'Milana loves animals';

console.log(anyString0.codePointAt(0));
console.log(anyString0.codePointAt(10));

console.log('7'.codePointAt(0));// shows charset of character without string

// Method fromCodePoint() -  shows character of charset

console.log(String.fromCodePoint(77)); // M

// localeCompare()  method for string comparison.Return -1, 0 , 1

console.log('Kiyiv'.localeCompare('Kiyivs'));// return -1 , Kiyiv < Kiyivs
console.log('Kiyiv'.localeCompare('Kiyiv')); // returns 0 , Kiyiv = Kiyiv
console.log('Kiyivs'.localeCompare('Kiyiv')); // returns 1 , Kiyivs > Kiyiv


// Method trim() removes spaces from the edges of a string

const trimString = '  Freedom   ';
console.log(trimString.trim());

// Methods toLowerCase() and toUpperCase()

const anyString2 = 'Hello,world!';

console.log(anyString2.toUpperCase());
console.log(anyString2.toLowerCase());

// Metod repeat() copys a string

const originString = 'hello';
const copyString = originString.repeat(3);// copys a string 3 times
console.log(copyString);

const copyArray = originString.split(''); // works with origin string. Does'nt work with copy string
console.log(copyArray)

// Method indexOf('item to look for', 'index from which to start searching') Returns index or -1

const anyString3 = 'Hello,world!Hello,people!Hello,sky!';

console.log(anyString3.indexOf('world'));
console.log(anyString3.indexOf('Hello', 6));

// Cycle while() for searching all the same items

let index = -1;
while(true) {
  index = anyString3.indexOf('Hello',index + 1);
  if(index === -1) {
    break
  }
  console.log('index of Hello = ' + index) // Shows indexes of all searched items
}


// Method lastIndexOf() Returns index or -1

const anyString31 = 'Hello,world!Hello,people!';

console.log(anyString31.lastIndexOf('Hello'));

// Method includes() insted of  Method indexOf() returns true or false

const anyString4 = 'Hello,world!';

console.log(anyString4.includes('Hello'));
console.log(anyString4.includes('Hello', 6));


// Methods startsWith()  endsWith() returns true or false. Shows if the string starts or finishes with the searched item

const anyString5 = 'Hello,world!';

console.log( anyString5.startsWith('Hello')); // true
console.log( anyString5.endsWith('rld!')); // true
console.log( anyString5.startsWith('world!')); // false
console.log( anyString5.endsWith('Hello')); // false


// Method slice()  cuts a piece of string

const anyString6 = 'Hello,world!';

console.log(anyString6.slice(6,11));
console.log(anyString6.slice(0));
console.log(anyString6.slice(-10, -1));

// Method substring()  cuts a piece of string

const anyString7  = 'that summer was very hot';

console.log(anyString7.substring(5, 11));// cuts a piece of string from 5 to 11
console.log(anyString7.substring(11, 5));// cuts a piece of string from 11 to 5(returns from 5 to 11)

// Method substr(index to start,length)  cuts a piece of string (legasy feature)

const anyString8  = 'that summer was very hot';

console.log(anyString8.substr(16, 8));

// SPLIT() lets to split a string into an array 

const someWords = 'that summer was very hot';
console.log(someWords);

const newSomeWords = someWords.split(); // returns array with 1 item
console.log(newSomeWords);

const newSomeWords2 = someWords.split(','); // returns array with 1 item
console.log(newSomeWords2);

const newSomeWords3 = someWords.split(''); // returns array with each letter as an item
console.log(newSomeWords3);

const newSomeWords4 = someWords; // returns array with each word as an item
console.log(newSomeWords4);

const newSomeWords5 = someWords.split('',7); // returns array with each letter as an item and  with pointed amount of items
console.log(newSomeWords5);


// Cycle 'for of ' Eumeration method for strings

const anyString9 = 'Show me everything!';

for(let char of anyString9) {
  console.log(char);
}




