// NaN is a JS reserved word indicating that a number is not a legal number.

// trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
let x = 100 / "Apple";
console.log(x); // NaN

// however, if the string contains a numeric value, the result will be a number:
let x2 = 100 / "10";
console.log(x2); // 10

// you can use the global js function isNan() to find out if a value is not a number
let x3 = 100 / "Apple";
console.log(isNaN(x3)); // true

// Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN
let x4 = NaN;
let y4 = 5;
let z4 = x4 + y4;
console.log(x4); // NaN

// or the result might be a concatenation like NaN5
let x5 = NaN;
let y5 = "5";
let z5 = x5 + y5;
console.log(z5); //NaN5

// NaN is a number: typeof NaN returns number
console.log(typeof NaN); // number