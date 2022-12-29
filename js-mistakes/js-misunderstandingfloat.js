// all programming languages, including JavaScript, have difficulties with precise floating point values:
let x = 0.1;
let y = 0.2;
// let z = x + y;  // the result in z will not be 0.3

// to solve the problem above, it helps to multiply and divide.
let z = (x * 10 + y * 10 ) / 10; // z will be 0.3

console.log(z); // 0.3