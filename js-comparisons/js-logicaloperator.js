let x = 6;
let y = 3;

// && and operator
console.log((x < 10 && y > 1)); // true
console.log((x < 10 && y < 1)); // false

// || or operator
console.log((x == 5 || y == 5)); // false
console.log((x == 6 || y == 0)); // true
console.log((x == 0 || y == 3)); // true
console.log((x == 6 || y == 3)); // true

// ! not operator
console.log(!(x === y));    // true
console.log(!(x > y));      // false