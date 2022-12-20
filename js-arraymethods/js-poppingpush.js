//the pop() method removes the last element from an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop()); //Mango
console.log(fruits); //['Banana', 'Orange', 'Apple']

//the push() method adds a new element to an array (at the end)
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.push("Kiwi");
console.log(fruits2); //['Banana', 'Orange', 'Apple', 'Mango', "Kiwi"]

//the push() method returns the new array length
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits3.push("Kiwi");

console.log(fruits3); //['Banana', 'Orange', 'Apple', 'Mango', 'Kiwi']