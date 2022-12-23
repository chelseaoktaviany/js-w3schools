// the instanceof operator returns true if an object is an instance of the specified object
const cars = ["Saab", "Volvo", "BMW"];

console.log((cars instanceof Array));   // true
console.log((cars instanceof Object));  // true
console.log((cars instanceof String));  // false
console.log((cars instanceof Number));  // false