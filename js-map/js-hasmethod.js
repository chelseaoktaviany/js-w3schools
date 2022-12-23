// the has() method returns true if a key exists in a Map
const fruits = new Map();

// set fruits
fruits.set("apples", 300);
fruits.set("bananas", 400);
fruits.set("grapes", 600);

console.log(fruits);

// has method
console.log(fruits.has("apples")); // true

// deleting apples from the fruits map
fruits.delete("apples");

console.log(fruits.has("apples"));  // false