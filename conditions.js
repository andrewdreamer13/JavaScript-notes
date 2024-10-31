// conditions
condition();


  // IF
  const digit = 10;

  if (digit <= 10) {
    console.log(true);
  }
  // IF  ELSE
  const names = ["Andrew", "Irina", "Milana", "Anastasia", "Jhon"];
  console.log(names);
  if (names.length < 5) {
    console.log("Add more names");
  } else {
    console.log("Good");
  }

  // if else with objects

  const arr1 = {
    age: 34,
    name: 'irina',
    salary:10000
  }
  
  if(arr1.salary) {
    console.log(arr1.salary)
  } else {
    console.log('no')
  }

  // IF ELSE IF
  const colors = ["red", "green", "blue", "orange", "black", "white"];
  if (colors.length < 5) {
    console.log("Add more colors");
  } else if (colors.length == 5) {
    console.log("Good");
  } else if (colors.length > 5) {
    console.log("remove some of colors");
  }

  // SWITCH CASE
  const cat = "animal";

  switch (cat) {
    case "fish":
      console.log("A cat is a fish");
      break;
    case "bird":
      console.log("A cat is a bird");
      break;
    case "animal":
      console.log("A cat is an animal");
      break;
    default:
      console.log("A cat is an angel");
      break;
  }

  //  TERNARY OPERATOR

  const countOfDogs = 30;
  const countOfCats = 20;

  countOfDogs < countOfCats ? console.log("cats won") : console.log("dogs won");

  //----------------------

  const countOfPeople = 37;

  function LessNum() {
    console.log("Right");
  }

  function biggerNum() {
    console.log("Wrong");
  }
  countOfPeople >= 10 ? LessNum() : biggerNum();

  //-------------------------------

  const time = 15;

  let greeting = time < 12 ? 'Good morning' : 'Good evening'
  console.log(greeting);










