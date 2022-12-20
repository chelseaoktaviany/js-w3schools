/**
 * the parseFloat() method
 * parseFloat() parses a string and returns a number. spaces are allowed. only the first number is returned
 */

console.log(parseFloat("10"));      //10
console.log(parseFloat("10.33"));   //10.33
console.log(parseFloat("10 20 30"));    //10
console.log(parseFloat("10 years"));    //10
console.log(parseFloat("years 10"));    //NaN