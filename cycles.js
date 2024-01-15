//cycles

// for

const numbers = [10,25,53,47,599,64,73,8,92];
for(let i = 0; i < numbers.length; i++) {
 // console.log(i)
 console.log(numbers[i])
}

// for of - for arrays

const numbers2 = [100,253,532,470,599,64,73,8,925];
for(let item of numbers2) {
 console.log(item)
}

// function random number and cycle for of

function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

for (let item of items) {
  item.style.background = `rgb(
    ${getRandomInt(0, 250)},
    ${getRandomInt(0, 250)},
    ${getRandomInt(0, 250)}`;
}

// for of - for strings

const str1 = 'Some people are strong';

  for(let letter of str1) {
    console.log(letter)
  }

// forEach   for arrays

const strArr = ['a', 'b', 'c', 'd'];
strArr.forEach((item,index,array) => {
 item += 'r';
 console.log(`${item} has ${index}`)
})


// for in   for objects
// key - object's property,  object[key] - property value

const userData = {
 userName: 'andrew',
 userAge: 46,
 userSalary: 2000,
}

for(let key in userData) {
 console.log(`key ${key} has info = ${userData[key]}`)
}


// while

let counter = 0;
while (counter <= 10) {
 console.log( `counter = ${counter}`);
 counter++;
 if(counter == 7){
   console.log('stop counter');
   break;
 }
}

// do while

let a = 0;
do {
  console.log(a);
  a++;
} while (a < 5);

// if condition is false works one time
let i = 10;
do {
  console.log(i);
  i++;
} while (i < 5);


 