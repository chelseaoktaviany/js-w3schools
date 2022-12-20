//The slice() method slices out a piece of an array into a new array.

//This example slices out a part of an array starting from array element 1 ("Orange"):
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(citrus); [ 'Orange', 'Apple', 'Mango' ]

//This example slices out a part of an array starting from array element 3 ("Apple"):
const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus2 = fruits2.slice(3);
console.log(fruits2); //[ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]

//The slice() method can take two arguments like slice(1, 3).

//The method then selects elements from the start argument, and up to (but not including) the end argument.
const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus3 = fruits3.slice(1, 3);
console.log(citrus3); //["Orange", "Lemon"]

//If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.
const fruits4 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus4 = fruits4.slice(2);
console.log(citrus4); //[ 'Lemon', 'Apple', 'Mango' ]