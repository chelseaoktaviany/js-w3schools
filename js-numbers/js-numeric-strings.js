// javascript strings can have numeric content
let x = 100;    // number
let y = "100";  // string

// javascript will try to convert strings to numbers in all numeric operations
let x2 = "100";
let y2 = "10";
let z2 = x2 / y2;
console.log(z2); // 10

// this will also work
let z3 = x2 * y2;
console.log(z3); // 1000

// this will work
let z4 = x2 - y2;
console.log(z4); //90