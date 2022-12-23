// the forEach() method calls a function for each key/value pair in a Map

const fruits = new Map();

// set
fruits.set("apples", 300);
fruits.set("bananas", 400);
fruits.set("grapes", 500)

// list all entries
let text = "";
fruits.forEach (function(value, key) {
    text += key + ' = ' + value + "\n";
})

console.log(text);

/**
 * apples = 300
 * bananas = 400
 * grapes = 500
 */