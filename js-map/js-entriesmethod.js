// the get() method gets the value of a key in a map
const fruits = new Map();

// set fruits
fruits.set("apples", 300);
fruits.set("bananas", 400);
fruits.set("grapes", 600);

console.log(fruits);

// entries method

// list all entries
let text = "";
for (const x of fruits.entries()) {
    text += x + "\n";
}

console.log(text);

/**
 * apples, 300
 * bananas, 400
 * grapes, 600
 */