// a javascript function can also be defined using an expression

// a function expression can be stored in a variable
// const x = function (a, b) { return a * b };

// after a function expression has been stored in a variable, the variable can be used as a function
const x = function (a, b) { return a * b };
let z = x(4, 3);
console.log(z); // 12