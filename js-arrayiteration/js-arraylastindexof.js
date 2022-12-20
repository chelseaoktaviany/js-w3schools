//Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

//search an array for the item "Apple":
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;

console.log(position); //the "Apple" is found in the position 3