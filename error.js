

// mistakes

// method try catch

const errorFunction = () => {
  throw new Error('Some error')
}

try {
  errorFunction();  // function with issue
} catch (error) {
  console.error(error); // shows error in console
  console.log(error.message); // shows message with error in console
  
}

console.log('Continue the code'); // some code after function with error