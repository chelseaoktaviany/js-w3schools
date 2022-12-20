/**
 * The number.parseInt() Method
 * Number.parseInt() parses a string and returns a whole number.
 */
console.log(Number.parseInt("-10"));    //-10
console.log(Number.parseInt("-10.33")); //-10
console.log(Number.parseInt("10")); //10
console.log(Number.parseInt("10.33")); //10
console.log(Number.parseInt("10 20 30")); //10
console.log(Number.parseInt("10 years")); //10
console.log(Number.parseInt("years 10")); //NaN