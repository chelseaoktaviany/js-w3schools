//the easiest way to add a new element to an array is using the push() method
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");
console.log(fruits); //['Banana', 'Orange', 'Apple', 'Lemon']

//new element can also be added to an array using the length property
const fruits2 = ["Banana", "Orange", "Apple"];
fruits2[fruits2.length] = "Lemon";
console.log(fruits2); //['Banana', 'Orange', 'Apple', 'Lemon']