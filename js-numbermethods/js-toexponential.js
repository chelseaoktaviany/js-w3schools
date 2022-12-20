/**
 * the toExponential() method
 * 
 * toExponential() returns a string, with a number rounded and written using exponential notation.
 * 
 * A parameter defines the number of characters behind the decimal point:
 * 
 */

let x = 9.656;
console.log(x.toExponential(2)); //9.66e+0
console.log(x.toExponential(4)); //9.6560e+0
console.log(x.toExponential(6)); //9.656000e+0