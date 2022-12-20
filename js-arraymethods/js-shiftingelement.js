//the shift() method removes the first array element and "shifts" all other elements to a lower index.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

console.log(fruits); //[ 'Orange', 'Apple', 'Mango']

//the shift() method returns the value that was "shifted out"
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits2.shift();
console.log(fruits2); //['Orange', 'Apple', 'Mango']