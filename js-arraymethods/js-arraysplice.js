//the splice() method can be used to add new items to an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits); //[ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

//the splice() method returns an array with the deleted items:
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits2); //[ 'Banana', 'Orange', 'Lemon', 'Kiwi']

//with clever parameter setting, you can use splice() to remove elements without leaving 'holes' in the array
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.splice(0, 1);
console.log(fruits3); //['Orange', 'Apple', 'Mango'] //