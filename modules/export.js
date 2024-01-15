// export methods

const showResultOne = () => {
  console.log('I am an exporting function one');
}

const showResultTwo = () => {
  console.log('I am an exporting function two');
}

// first method
export const showResultThree = () => {
  console.log('I am an exporting function three');
}

// second method
export {
  showResultOne,
  showResultTwo
}

// third method default
const showResultFour = () => {
  console.log('I am an exporting function four');
}
export default showResultFour;

// forth method with default

// export default showResultFifth = () => { // write without const or let
//   console.log('I am an exporting function fifth');
// }


// export from object

const user = {
  name: 'Andrew',
  age: 46,
  walking: () => {
    console.log('I can go fast')
  },
  eating: () => {
    console.log('I can eat fast')
  }
}

export const myWalking = user.walking;
export const myEating = user.eating;

//export{ showResultOne as showResultOnce} // 'as' used for variable renaming
