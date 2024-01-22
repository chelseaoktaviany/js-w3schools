// create a map
fruits = new Map([
    ['apples', 500],
    ['bananas', 300],
    ['oranges', 200]
]);

// list all values
let text = "";
for (const x of fruits.values()) {
    text += x + " ";
}

console.log(text); // 500 300 200


// you can use the values() method to sum the values in a map
let total = 0;
for (const x of fruits.values()) {
    total += x;
}

console.log(total); // 1000