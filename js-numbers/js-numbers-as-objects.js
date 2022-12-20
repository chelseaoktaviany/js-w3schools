// normally javascript numbers are primitive values created from literals
let x = 123;

// but numbers can also be defined as objects with the keyword new
let y = new Number(123);

console.log(typeof x); // number
console.log(typeof y); // object

// when using the == operator, x and y are equal
let x2 = 500;
let y2 = new Number(500);
console.log(x2 == y2); // true

// when using the === operator, x and y are not equal
let x3 = 500;
let y3 = new Number(500);
console.log(x3 === y3); // false

// note the difference between (x == y) and (x === y)
let x4 = new Number(500);
let y4 = new Number(500);

// (x == y) true or false?
console.log(x4 == y4);  // false

// (x === y) true or false?
console.log(x4 === y4) // false