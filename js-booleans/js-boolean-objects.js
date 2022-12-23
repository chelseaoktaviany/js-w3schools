//normally javascript booleans are primitive values created from literals
let x = false;

//but booleans can also be defined as objects with the keyword new
let y = new Boolean(false);

//when using the == operator, x and y are equal
console.log((x == y));  //true

//when using the === operator, x and y are not equal
console.log((x === y)); //false


//another example
let x2 = new Boolean(false);
let y2 = new Boolean(false);

//(x == y) true or false?
console.log((x2 == y2))     // false

//(x === y) true or false?
console.log((x2 === y));    // false