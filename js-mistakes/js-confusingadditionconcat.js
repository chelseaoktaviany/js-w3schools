// because of this, adding a number as a number will produce a different result from adding a number as a string
let x = 10;
x = 10 + 5;  // now x is 15

let y = 10;
y += "5"; // now y is "105"


// when adding two variables it can be difficult to anticipate the result.
let x2 = 10;
let y2 = 5;
let z2 = x2 + y2; // now z is 15

console.log(z2); // 15

let x3 = 10;
let y3 = "5";
let z3 = x3 + y3; // now z is "105"

console.log(z3); // 105