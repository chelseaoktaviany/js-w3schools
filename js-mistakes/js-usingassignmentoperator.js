// this if statement returns false (as expected) because x is not equal to 10:
let x = 0;
// if (x == 10)
console.log((x == 10)); // false

// this if statement returns true (maybe not as expected), because 10 is true
// if (x = 10)
console.log((x = 10)) // 10

// this if statement returns false (maybe not as expected), because 0 is false:
// if (x = 0)
console.log((x = 0)) // 0