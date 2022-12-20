/**
 *
 * in programming, data types is an important concept.
 * to be able to operate on variables, it's important to know something about the type.
 * without data types, a computer cannot safely solve this
 *
 */
// let x = 16 + "Volvo";
// console.log(x);

let x = "16" + "Volvo";
console.log(x);

//When adding a number and a string, JavaScript will treat the number as a string.
let y = 16 + "Volvo";
console.log(y);

let z = "Volvo" + 16;
console.log(z);

// JavaScript evaluates expressions from left to right. Different sequences can produce different results:

// In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".
let xy = 16 + 4 + "Volvo";
console.log(xy);

// In the second example, since the first operand is a string, all operands are treated as strings.
let xz = "Volvo" + 16 + 4;
console.log(xz);
