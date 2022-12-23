//the boolean value of 0 (zero) is false
let x = 0;
console.log(Boolean(x));

//the boolean value of -0 (minus zero) is false
let x2 = -0;
console.log(Boolean(x2));

//the boolean value of "" (empty string) is false
let x3 = "";
console.log(Boolean(x3));

//the boolean value of undefined is false
let x4;
console.log(Boolean(x4));

//the boolean value of null is false
let x5 = null;
console.log(Boolean(x5));

//the boolean value of false is (you guessed it) false:
let x6 = false;
console.log(Boolean(x6));

//the boolean value of NaN is false
let x7 = 10 / "Hello";
console.log(Boolean(x7));