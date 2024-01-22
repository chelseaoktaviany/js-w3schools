// create a new map
fruits = new Map([
    ['apples', 500],
    ['bananas', 300],
    ['oranges', 200]
]);


// list all entries
let text = "";
for (const x of fruits.entries()) {
    text += x + " ";
}

console.log(text); // apples,500 bananas,300 oranges,200