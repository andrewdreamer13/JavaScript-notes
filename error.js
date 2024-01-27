

// mistakes

// method try catch shows error in console and message. Allows to continue the code after error
// put in try  only code that can throw an error
// put in catch code that can handle error
// throw new Error() - shows error in console
// Error object - shows error in console
// TypeError - shows  error in console
// RangeError - shows error in console


// example with try catch

function splitHourAndMinute(time) {
  try {
    let hour = +time.split(':')[0];
    let minute = +time.split(':')[1];
    if( !(hour >= 0 && hour <= 23) || !(minute >= 0 && minute <= 59)) {
      throw new Error('Wrong time format'); // shows error in console
    }
    return `hour: ${hour}, minute: ${minute}`;
  } catch(error) {
    console.error(error); // shows error in console. parameter error = text in string 'throw new Error('Wrong time format')'
    console.log(error.message); // shows message with error in console
  }
 
}

console.log(splitHourAndMinute('28:48')); //Error: Wrong time format
console.log(splitHourAndMinute('21:48')); // hour: 21, minute: 48

console.log('Continue the code'); // some code after function with error