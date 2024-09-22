// ARRAYS
// simple arrays     string 33
// nested arrays     string 50
// push() pop()      string 73
// unshift() shift() string 112
// splice()          string 126
// slice()           string 134
// concat()          string 149
// indexOf()         string 171
// includes()        string 208
// map()             string 250
// filter            string 299
// reduce()          string 337
// isArray()         string 420
// every()           string 432
// some()            string 462
// find()            string 475
// findIndex()       string 507
// lastIndexOf()    string 538
// split()           string 550
// join()            string 570
// flat()            string 590
// fill()            string 608
// keys()            string 616
// values()          string 638
// for()             string 663
// for(of)           string 681
// forEach()         string 701 
// spread            string 719
// this              string 785


// SIMPLE ARRAYS

// first method to create an array
const carBrands = ["mazda", "mersedes", "BMW", "opel", "toyota"];

console.log(carBrands);
console.log(carBrands.length);
console.log(carBrands[2]);
console.log(carBrands[0]);
console.log(carBrands[1]);

const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];

console.log(numbers);
console.log(numbers.length);
console.log(numbers[2]);
console.log(numbers[0]);
console.log(numbers[8]);

// second method to create an array

const carBrands1 = new Array("mazda", "mersedes", "BMW", "opel", "toyota");
console.log(carBrands1);

// NESTED ARRAYS

const numColection = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [10, 20, 30, 40, 50, 60, 70, 80, 90],
  [100, 200, 300, 400, 500, 600, 700, 800, 900],
];

console.log(numColection);

console.log(numColection[0]);
console.log(numColection[1]);
console.log(numColection[2]);

console.log(numColection[0][2]);
console.log(numColection[1][7]);
console.log(numColection[2][8]);

console.log(numColection[2].length);
console.log(numColection[1].length + numColection[0].length);

//  ARRAY'S METHODS

// push()  pop()  unshift()  shift()  splise()  slise()  concat()

const fruits = ["apple", "orange", "plum", "grapes", "chery"];

console.log(fruits);

fruits.push("banana"); // adds one element to the end
console.log(fruits);

fruits.push('strawberry', 'blueberry', 'melon'); // adds several elements to the end
console.log(fruits);

// instead of push we can write:
const arr2 = [1, 2, 3, 4];
console.log(arr2);
arr2[arr2.length] = 5;
console.log(arr2);

// removes one element from the end of array and return it
fruits.pop();
console.log(fruits);
console.log(fruits.pop());

// example pop() with for()
const arr3 = [1, 2, 3, 4, 5, 6];

for (let i = arr3.length; i > 0; i--) {
  arr3.pop();
  console.log(arr3);
  if (i === 0) {
    break
  }
}

// push()  and  pop()  functions

let goodsId = [];

const addButton = document.querySelector('.add-index-btn');
const removeBtn = document.querySelector('.remove-index-btn');
console.log(goodsId)

addButton.addEventListener('click', () => {
  let input = +document.querySelector('.index-input').value;
  if (!goodsId.includes(input)) {
    goodsId.push(input);
  }
  console.log(goodsId);
})

removeBtn.addEventListener('click', () => {
  let input = +document.querySelector('.index-input').value;
  let newGoodsId = goodsId.pop();
  console.log(goodsId);
  console.log(`goods id ${ newGoodsId} was removed`);
})

// example with push()
const arr10 = [1, 2, 3];
const arr11 = [10, 20, 30];
const arr13 = [];

for (let i = 0; i < arr10.length; i++) {
  arr13.push(arr10[i]);
  arr13.push(arr11[i]);
}
console.log(arr13)

// unshift()
fruits.unshift("banana"); // adds one element to the beginning
console.log(fruits);

fruits.unshift('watermelon', 'blueberry', 'melon'); // adds several elements to the beginning
console.log(fruits);

// shift()

fruits.shift(); //remove one element from the beginning and returns it
console.log(fruits);
console.log(fruits.shift());
console.log(fruits);


// splice() does not create new array.Just changes the existing one

fruits.splice(2, 2); //removes 2 elements in array from position 2
console.log(fruits);

fruits.splice(1, 0, "banana", "plum", "grapes"); // adds 3 elements from position 1
console.log(fruits);

// toSpliced() Copies items which indexes are in brackets and creates new array from them
// Does not change the source array



//  slice() Copies items which indexes are in brackets and creates new array from them
// Does not change the source array

const someArray = [3, 4, 5, 8, 5, 0, 7, 6];
console.log(someArray);

const newSomeArray = someArray.slice(3); // removes 3 items from 3 position
console.log(newSomeArray);

const newSomeArray2 = someArray.slice(4, 6); // if slice has 2 parameters - the first is start position,second is finish
console.log(newSomeArray2);

const anyText = 'hello'; // slice can be applied to string
const newAnyText = anyText.slice(3, 5);
console.log(newAnyText);

// concat()  concats 2 or more arrays. Creates new array.Don't changes the previous one

const someArray3 = [1, 2, 3, 4, 5];
console.log(someArray3);

const someArray4 = [10, 20, 30, 40, 50];
console.log(someArray4);

const someArray5 = [101, 202, 303, 404, 505];
console.log(someArray5);

const newSomeArray3 = someArray3.concat(someArray4); // concat 2 arrays
console.log(newSomeArray3);

const newSomeArray4 = someArray3.concat(someArray4, someArray5); // concat 3 arrays
console.log(newSomeArray4);

const newSomeArray5 = someArray5.concat(someArray4, someArray3); // concat 3 arrays
console.log(newSomeArray5);

// concat with strings

const str1 = 'Good';
const str2 = 'Bye';
const str3 = str1.concat(str2);
console.log(str3)



// INDEXOF()

const counter = [2, 5, 1, 5, 6];

console.log(counter.indexOf(6));
console.log(counter.indexOf(4)); // if the element is missing returns -1
console.log(counter.indexOf(5)); // found only the first 5
console.log(counter.indexOf(5, 2)); // the second parameter is the index from which starts searching (found only the second 5)

// how to check if an element is in an array (if the element is missing returns -1)

if (counter.indexOf(3) !== -1) {
  console.log("counter has this element");
} else {
  console.log("counter does not have this element");
}

//  indexOf method emulation

function indexOfEmulation(array, item, from = 0) {
  for (let i = from; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
  return -1;
}

console.log(indexOfEmulation(counter, 1)); // emulation
console.log(counter.indexOf(1)); // method indexOf

console.log(indexOfEmulation(counter, 5, 2)); // emulation
console.log(counter.indexOf(5, 2)); // method indexOf

console.log(indexOfEmulation(counter, 4)); // emulation
console.log(counter.indexOf(4)); // method indexOf

// INCLUDES()

const teenCounter = [40, 10, 30, 60, 80];
const names = ["Andrew", "Irina", "Milana", "Anastasia", "Philip"];

const newTeenCounter = teenCounter.includes(12);
console.log(newTeenCounter); // shows in console true or false

const newTeenCounter2 = teenCounter.includes(40, 3); // the second parameter is an index of search start
console.log(newTeenCounter2); // shows in console true or false

function showIncludesResalt(item, array) {
  if (array.includes(item)) {
    console.log(`Yes,there is ${item} in this array`);
  } else {
    console.log(`No,there is'nt ${item} in this array`);
  }
}
showIncludesResalt(10, teenCounter);
showIncludesResalt("Anastasia", names);
showIncludesResalt("Polina", names);

//  includes for objects in arrays

const peopleInfo = [{
    name: "Andrew",
    age: 45
  },
  {
    name: "Irina",
    age: 48
  },
  {
    name: "Milana",
    age: 18
  },
  {
    name: "Anastasia",
    age: 28
  },
  {
    name: "Philip",
    age: 30
  },
];
console.log(peopleInfo);

const lookforName = peopleInfo.filter((item) => {
  return item.name.includes("ri"); // example with explicit return
});
console.log(lookforName);

const lookforName2 = peopleInfo.filter((item) => item.name.includes("na"));
console.log(lookforName2);


// MAP()   returns new array with some changes which length == previous array's length

const peopleCount = [1, 2, 3, 4, 5, 6];
console.log(peopleCount);

const newPeopleCount = peopleCount.map((item, index) => {
  return `new item - ${index} = ${ item * 2}`; // example with explicit return
});
console.log(newPeopleCount);

//---------------------------------

const foodCount = [2, 5, 8, 9];
console.log(foodCount);

const newFoodCount = foodCount.map((item) => item * 2);
console.log(newFoodCount);

//---------------------------------

const foodList = ["potato", "tomato", "oil", "apple", "carrot"];
console.log(foodList);

const newFoodList = foodList.map((item, index) => `item-${index}: ${item}`);
console.log(newFoodList);

//  map() for objects in arrays

const namesInfo = [{
    name: "AndRew  ",
    age: 45
  },
  {
    name: "irina",
    age: 48
  },
  {
    name: "  MilaNa",
    age: 18
  },
  {
    name: "anastasia",
    age: 28
  },
  {
    name: "  Philip",
    age: 30
  },
];
console.log(namesInfo);

const newNamesInfo = namesInfo.map((item) => {
  item.name = item.name.trim().toLowerCase();
  return item;
});
console.log(newNamesInfo);

const newNamesInfo2 = newNamesInfo.map((item) => {
  item.age = item.age - 5;
  return item;
})
console.log(newNamesInfo2);

// FILTER()   returns new array with true or false.does not change the origin array
// Returns a new array which consists of elements of the old array that have been filtered

const moneyCount = [2, 7, 4, 9, 1, 5, 9, 0];
console.log(moneyCount);

const newMoneyCount = moneyCount.filter((item) => {
  if (item > 5) {
    return true; // example with explicit return
  }
});
console.log(newMoneyCount);

const newMoneyCount2 = moneyCount.filter((item) => item < 5);
console.log(newMoneyCount2);

const newMoneyCount3 = moneyCount.filter((item) => item % 2 === 0);
console.log(newMoneyCount3);

const newMoneyCount4 = moneyCount.filter((item, index) => index > 3); //works with index
console.log(newMoneyCount4);

// how to remove NaN from array fith filter
const someAr = [1, 2, NaN, 3, 4, NaN];
console.log(someAr);
let filteredSomAr = someAr.filter((item) => {
  return !Number.isNaN(item);
} );
console.log(filteredSomAr); // [1, 2, 3, 4]
console.log(someAr); // [1, 2, NaN, 3, 4, NaN]

//  filter() for objects in arrays

const salaryInfo = [{
    name: "andrew",
    age: 45,
    salary: 2000
  },
  {
    name: "irina",
    age: 48,
    salary: 12000
  },
  {
    name: "milana",
    age: 18,
    salary: 26000
  },
  {
    name: "anastasia",
    age: 28,
    salary: 8000
  },
  {
    name: "philip",
    age: 30,
    salary: 15000
  },
];
console.log(salaryInfo);

const bigSalary = salaryInfo.filter((item) => item.salary > 2000);
console.log(bigSalary);

const youngerAge = salaryInfo.filter(item => item.age < 30);
console.log(youngerAge);

// filter with sort
const sortedBigSalary = salaryInfo.filter((item) => item.salary > 2000).sort((a, b) => b.salary - a.salary);
console.log(sortedBigSalary);


// REDUCE()  returns summ of all elements of the array

const someNumbers = [2, 5, 3, 8, 9, 5];
console.log(someNumbers);

const newSomeNumbers = someNumbers.reduce((accum, item) => {
  return accum + item;
})
console.log(newSomeNumbers);

const newSomeNumbers2 = someNumbers.reduce((accum, item) => {
  return accum + ' ' + item;
})
console.log(newSomeNumbers2);

//----------------------------------

const someText = ['text-1', 'text-2', 'text-3', 'text-4'];
console.log(someText);

const newSomeText = someText.reduce((accum, item) => {
  // return accum + ' / ' +  item;
  return `${accum} = ${item}`;
});
console.log(newSomeText);

//-------------------

const someNumbers3 = [3, 5, -7, 2, -5, -8];
console.log(someNumbers3);

const newSomeNumbers3 = someNumbers3.reduce((accum, item) => {
  if (item > 0) {
    accum += item
  }
  return accum;
})
console.log(newSomeNumbers3)

//---------------------------------

const mixArray = ['text1', 2, 'text2', 3, 5, 'text3'];
console.log(mixArray);

const newMixArray = mixArray.reduce((accum, item) => {
  if (typeof item === 'number') {
    accum += item;
  }
  return accum
}, 0) // sets the initial value of accum
console.log(newMixArray);

// find the biggest number in array

const someNumbers4 = [-5, 6, 0, 56, -3, 2, 9, 34];

const newSomeNumbers4 = someNumbers4.reduce((accum, item) => {
  if (item > accum) {
    accum = item;
  }
  return accum;
})
console.log(newSomeNumbers4);

// creating new array with reduce()

const idInfo = [{
    id: 123,
    name: "andrew",
    age: 45,
    salary: 2000
  },
  {
    id: 124,
    name: "irina",
    age: 48,
    salary: 12000
  },
  {
    id: 125,
    name: "milana",
    age: 18,
    salary: 2000
  },
  {
    id: 126,
    name: "anastasia",
    age: 28,
    salary: 8000
  },
  {
    id: 127,
    name: "philip",
    age: 30,
    salary: 10000
  },
];
console.log(idInfo);

const newIdInfo = idInfo.reduce((accum, item) => {
  accum.push(item.id);
  return accum;
}, []) // sets an empty array as initial value of accum

console.log(newIdInfo);


// ISARRAY  method isArray defines array or not array.Returns true or false

const value1 = 10;
console.log(Array.isArray(value1));

const value2 = [1, 2, 3, 4, 5];
console.log(Array.isArray(value2));

const value3 = 'text';
console.log(Array.isArray(value3));


// EVERY  every() check an array and return true or false. return true if all the items are true

const sensorData = [2, 13, 6, 10, 18, 3, 9, 34];
console.log(sensorData);

const sensorCheck = sensorData.every((item) => {
  if (item > 0 && item < 20) {
    return true
  }
})
console.log(sensorCheck);

//---------------------------

const clientsInfo = [{
    id: 123,
    name: "andrew",
    age: 45,
    salary: 2000
  },
  {
    id: 124,
    name: "irina",
    age: 48,
    salary: 12000
  },
  {
    id: 125,
    name: "milana",
    age: 18,
    salary: 2000
  },
  {
    id: 126,
    name: "anastasia",
    age: 28,
    salary: 8000
  },
  {
    id: 127,
    name: "philip",
    age: 30,
    salary: 10000
  },
];
console.log(clientsInfo);

const clientsCheck = clientsInfo.every((item) => {
  if (item.age < 50) {
    return true
  }
});
console.log(clientsCheck);

// SOME() some() checks the array and returns true if at least only one item true

const dataGroup = [0, 4, 60, 3, 56, 9];
console.log(dataGroup);

const checkDataGroup = dataGroup.some((item) => {
  if (item > 50) {
    return true
  }
})
console.log(checkDataGroup)


// FIND()  find() look for the first item in array with true and return the first true item.If item is not found return underfind

const anyNumber = [3, 5, 67, 43, 2, 90, 6, 98, 34, 6];
console.log(anyNumber);

const checkAnyNumber = anyNumber.find((item) => {
  if (item > 20 && item < 40) {
    return true
  }
})
console.log(checkAnyNumber);

//------------------------

const salaryInfo2 = [{
    id: 123,
    name: "andrew",
    age: 45,
    salary: 2000
  },
  {
    id: 124,
    name: "irina",
    age: 48,
    salary: 12000
  },
  {
    id: 125,
    name: "milana",
    age: 18,
    salary: 2000
  },
  {
    id: 126,
    name: "anastasia",
    age: 28,
    salary: 8000
  },
  {
    id: 127,
    name: "philip",
    age: 30,
    salary: 10000
  },
];
console.log(salaryInfo2);

const checksalaryInfo2 = salaryInfo2.find((item) => {
  if (item.salary >= 10000) {
    return true;
  }

})
console.log(checksalaryInfo2);


// FINDINDEX  findIndex() look for an item with true and return index of the first true item.If item is not found return -1

const anyNumber2 = [3, 5, 67, 43, 2, 90, 6, 98, 34, 6];
console.log(anyNumber2);

const checkAnyNumber2 = anyNumber.findIndex((item) => {
  if (item > 20 && item < 40) {
    return true
  }
})
console.log(checkAnyNumber2);

//-------------------------

const salaryInfo3 = [{
    id: 123,
    name: "andrew",
    age: 45,
    salary: 2000
  },
  {
    id: 124,
    name: "irina",
    age: 48,
    salary: 12000
  },
  {
    id: 125,
    name: "milana",
    age: 18,
    salary: 2000
  },
  {
    id: 126,
    name: "anastasia",
    age: 28,
    salary: 8000
  },
  {
    id: 127,
    name: "philip",
    age: 30,
    salary: 10000
  },
];
console.log(salaryInfo3);

const checksalaryInfo3 = salaryInfo2.findIndex((item) => {
  if (item.salary === 8000) {
    return true;
  }

})
console.log(checksalaryInfo3);

// LASTINDEXOF() lastIndexOf() returns index of last item with the same parameters

const someString = 'hello,people';
const someNum = [10, 40, 30, 40, 50, 60];

const stringResalt = someString.lastIndexOf('l');
console.log(stringResalt);

const someNumResalt = someNum.lastIndexOf(40);
console.log(someNumResalt);


// SPLIT() lets to split a string into an array 
// can use as a parameter a regular expression

const someWords = 'that summer was very hot';
console.log(someWords);

const newSomeWords = someWords.split(); // returns array with 1 item
console.log(newSomeWords);

const newSomeWords2 = someWords.split(','); // returns array with 1 item
console.log(newSomeWords2);

const newSomeWords3 = someWords.split(''); // returns array with each letter as an item
console.log(newSomeWords3);

const newSomeWords4 = someWords.split(' '); // returns array with each word as an item
console.log(newSomeWords4);

const newSomeWords5 = someWords.split('', 7); // returns array with each letter as an item and  with pointed amount of items
console.log(newSomeWords5);

// JOIN() lets to join items of an array into a string

const someLettersArray = ['a', 'n', 'd', 'r', 'e', 'w'];
const someWordsArray = ['hello', 'and', 'goodbye'];

const newSomeString = someLettersArray.join(''); // joins letters into one word
console.log(newSomeString);

const newSomeString1 = someLettersArray.join(); // creates a string with comma between letters
console.log(newSomeString1);

const newSomeString2 = someLettersArray.join(' '); // creates a string with space between letters
console.log(newSomeString2);

const newSomeString3 = someLettersArray.join(' : '); // creates a string with colon between letters
console.log(newSomeString3);

const newSomeWordsArray = someWordsArray.join(' '); // creates a string with space between words
console.log(newSomeWordsArray);

// FLAT() flat() converts a many-dimensional array to a one-dimensional array
// Does not change the sourse array

// two-dimensional array

const dimArray = [2, 3, [78, 89, 0], 56];
console.log(dimArray);

const flatArray = dimArray.flat(1); // in the brackets there is a depth of penetration into the array 
console.log(flatArray);

// three-dimensional array

const dimArray2 = [2, 3, [78, 89, 0, [334, -78]], 56];
console.log(dimArray2);

const flatArray2 = dimArray2.flat(2); // in the brackets there is a depth of penetration into the array
console.log(flatArray2);

// FILL() replaces the values of the elements in the original array  fill(item,from,to)
// Fill changes the source array

const originalAr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(originalAr);

const replacedAr = originalAr.fill('number', 4, 7);
console.log(replacedAr);
console.log(originalAr);

// REVERSE()
// reverses new array and changes the source array

const simpleArray = [1, 2, 3, 4, 5, 6, 7];
console.log(simpleArray);

const revArray = simpleArray.reverse();
console.log(revArray);

const textArr = ['text-1', 'text-2', 'text-3', 'text-4', 'text-5', ]
console.log(textArr);

const revTextArr = textArr.reverse();
console.log(revTextArr);
console.log(textArr); // the source array was also reversed

// Method toReversed()
// reverses new array and does not change the source array

 const textArr1 = ['text-1', 'text-2', 'text-3', 'text-4', 'text-5', ]
  console.log(textArr1);

  const revTextArr1 = textArr1.toReversed();
  console.log(revTextArr1);
  console.log(textArr1); // the source array was not changed

// SORT()
// sorts new array and changes the source array
//  can be used without parameters if you sort words or letters

const unsortedArray = [2, 34, 67, 6, 98, 56, 3, 13];

const sortedArray = unsortedArray.sort((a, b) => {
  //return a - b; // ordinary Array
  return b - a; // reversed Array
});

console.log(sortedArray);

// Method toSorted() sorts new array and does not change the source array
const letters = ['c', 'b', 'a'];
const sortedLetters = letters.toSorted();
console.log(letters);
console.log(sortedLetters);


// Method  with() returns new array and does not change the source array

const sourceNumbers = [10,20,30,40,50];
console.log(sourceNumbers );
const newNumbers = sourceNumbers.with(2, 'thirty');
console.log(sourceNumbers );
console.log(newNumbers);


// KEYS() Object.keys can get the keys of object in array

const simpleArr = [45, true, 67, 'fox', 34];
console.log(simpleArr);

const keysSimpleArr = Object.keys(simpleArr);
console.log(keysSimpleArr);

//---------------------------

const keysInfo = [{
    id: 123,
    name: "andrew",
    age: 45,
    salary: 2000
  },
  {
    id: 124,
    name: "irina",
    age: 48,
    salary: 12000
  },
  {
    id: 125,
    name: "milana",
    age: 18,
    salary: 2000
  },
  {
    id: 126,
    name: "anastasia",
    age: 28,
    salary: 8000
  },
  {
    id: 127,
    name: "philip",
    age: 30,
    salary: 10000
  },
];
console.log(keysInfo);

const keysArray = Object.keys(keysInfo[0]);
console.log(keysArray);

// VALUES() Object.values can get the value of object in array

const simpleArr2 = [45, true, 67, 'fox', 34];
console.log(simpleArr2);

const valueSimpleArr = Object.values(simpleArr2);
console.log(valueSimpleArr);

//-------------------------------------

const valueInfo = [{
    id: 123,
    name: "andrew",
    age: 45,
    salary: 2000
  },
  {
    id: 124,
    name: "irina",
    age: 48,
    salary: 12000
  },
  {
    id: 125,
    name: "milana",
    age: 18,
    salary: 2000
  },
  {
    id: 126,
    name: "anastasia",
    age: 28,
    salary: 8000
  },
  {
    id: 127,
    name: "philip",
    age: 30,
    salary: 10000
  },
];
console.log(valueInfo);

const valueArray = Object.values(valueInfo[3]);
console.log(valueArray);

valueArray.push('kharkiv');
console.log(valueArray);

// CYCLE FOR  for iterates through an array

const someCount = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < someCount.length; i++) {
  console.log(someCount[i]);
}

for (let i = someCount.length; i >= 0; i--) {
  console.log(someCount[i]);
}

const list = document.querySelectorAll('.list');

for (let i = 0; i < list.length; i++) {
  console.log(list[i])
}

// CYCLE FOR OF  for of iterates through an array

const someCount2 = [10, 20, 37, 40, 50, 63, 70, 80, 91];

for (let item of someCount2) {
  console.log(item);
}

for (let item of someCount2) {
  if (item % 2 === 0) {
    console.log(item);
  }
}

const list2 = document.querySelectorAll('.list');

for (let item of list2) {
  console.log(item);
}

// CYCLE FOREACH  forEach iterates through an array

const myArray = [34, 56, 21, 76, 39, ];

myArray.forEach((item) => {
  console.log(item)
})

myArray.forEach((item, index) => {
  console.log(`${index} = ${item}`)
})

const list3 = document.querySelectorAll('.list');

list3.forEach((item) => {
  console.log(item.innerHTML)
})

// ...   destructuring operator  (spread) how it works

const arrayOfNum = [1, 2, 3, 4, 5];
const arrayOfStr = ['a', 'b', 'c', 'd'];

// merge

const mergedArr = [...arrayOfNum, ...arrayOfStr];
console.log(mergedArr);

// clone

const cloneArr = [...arrayOfStr]; // does not change original array
console.log(cloneArr);

cloneArr.push('f');
console.log(cloneArr);
console.log(arrayOfStr);

// destruction in arrays

const parrentArr = ['one', 'two', 'three'];
const [numberOne, numberTwo] = parrentArr;
console.log(parrentArr);
console.log(numberOne);
console.log(numberTwo);

// transform string into array

const strArr = [...'string'];
console.log(strArr);

// transform nodeList to array

const someList = document.querySelectorAll('.list');
console.dir(someList);

const newSomeList = [...someList];
console.dir(newSomeList)


// Keyword 'this' for creating a new array's method in Array.prototype

const numbers2 = [3, 7, 4, 9, 1, 4];
const bigNnumbers = [30, 700, 400, 90, 1000, 40];


Array.prototype.devider = function (d) {
  return this.map((item) => {
    return item / d;
  })
}

console.log(numbers2.devider(2));
console.log(bigNnumbers.devider(10));


// prototype inheritance in arrays with __proto__
// array2 inherits array1 and class Array with all their  properties and methods

const array1 = ['eat', 'sleep', 'code'];
const  array2 =['run', 'swim',{__proto__:array1}];
console.log(array1); //  ['eat', 'sleep', 'code']
console.log(array2); //  ['run', 'swim', Array]
console.log(array2[0]); // 'run'
console.log(array2[2][1]); // 'swim'