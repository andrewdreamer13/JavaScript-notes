'use strict';

// importing functions from file 
import { showResultOne, showResultTwo as renamedFunction, showResultThree}  from './export.js'; // 'as' used for variable renaming

showResultOne();
renamedFunction();
showResultThree();

// importing all functions from file with operator *
// in this case allFunctions is an object that contains functions as methods

import showResultFour, * as allFunctions from "./export.js"; // import a default function separately from other functions

showResultFour();

console.log(allFunctions); // shows an object with its methods in console
allFunctions.showResultOne(); // calling the functions as object's methods
allFunctions.showResultThree(); // calling the functions as object's methods


// example with re-export
//export {func} from './export.js';

// import from object

import { myWalking } from './export.js';

myWalking();