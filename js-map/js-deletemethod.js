// the delete() method removes a map element
const fruits = new Map();

// set fruits
fruits.set("apples", 300);
fruits.set("bananas", 400);
fruits.set("grapes", 600);

console.log(fruits);

// delete method
fruits.delete("apples");
console.log(fruits);  // Map {'bananas' => 400, 'grapes' => 600}