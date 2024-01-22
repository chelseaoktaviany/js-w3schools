// create a map
fruits = new Map([
    ['apples', 500],
    ['bananas', 300],
    ['oranges', 200]
]);

// using map forEach()
let text = "";
fruits.forEach(function(value, key) {
    text += key + " = " + value + "\n"
})

console.log(text);

/**
 * apples = 500
 * bananas = 300
 * oranges = 200
 */