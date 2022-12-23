// the unary + operator can be used to convert a variable to a number:
let y = "5";
let x = + y;

console.log(typeof y + "\n" + typeof x);
/**
 * y is string
 * x is number
 */

// if the variable cannot be converted, it will still become a number, but with the value NaN (Not a Number):
let y2 = "John";
let x2 = + y;

console.log(typeof y2 + "\n" + typeof x2);
/**
 * y2 is string
 * x2 is number (NaN)
 */