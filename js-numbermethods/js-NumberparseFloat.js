/**
 * the Number.parseFloat() method
 * Number.parseFloat() parses a string and returns a number.
 */

console.log(Number.parseFloat("10"));   //10
console.log(Number.parseFloat("10.33"));    //10.33
console.log(Number.parseFloat("10 20 30")); //10
console.log(Number.parseFloat("10 years")); //10
console.log(Number.parseFloat("years 10")); //NaN