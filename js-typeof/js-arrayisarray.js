// you can check the constructor property to find out if an object is an array
const fruits = ["Banana", "Orange", "Apple"];
console.log(isArray(fruits));   // returns true

// function isArray(myArray) {
//     return myArray.constructor.toString().indexOf("Array") > 1;
// }

// or even simpler
function isArray(myArray) {
    return myArray.constructor === Array;
}