// normally, js strings are primitive values, created from literals:
let x = "John"; // x is a string
let y = new String("John"); // y is an object

console.log(y);

//using operator ==
console.log(x == y); // true

//using operator ===
console.log(x === y); // false

// you should not create strings as objects
