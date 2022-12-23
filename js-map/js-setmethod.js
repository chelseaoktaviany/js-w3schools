// you can add elements to a map with the set() method
const fruits = new Map();

// set map values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

console.log(fruits.get("bananas")); // 300

// the set() method can also be used to change existing map values
fruits.set("apples", 200);

console.log(fruits.get("apples")); // 200