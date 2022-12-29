// in regular comparison, data type does not matter. this if statement returns true
let x = 10;
let y = "10";

console.log((x == y)); // true

// in strict comparison, data type does matter. this if statement returns false
console.log((x === y)) // false

// it's a common mistake to forget that switch statements use strict comparison:
// this case switch will display an alert:
// switch(x) {
//     case 10: alert("Hello");
// }

// this case switch will not display an alert:
// switch(x) {
//     case "10": alert("Hello");
// }