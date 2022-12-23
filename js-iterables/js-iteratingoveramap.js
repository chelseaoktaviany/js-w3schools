// you can use a for..of loop to iterate over the elements of a map
const fruits = new Map([
    ['apples', 500],
    ['bananas', 300],
    ['oranges', 200]
])

let text = "";
for (const x of fruits) {
    text += x + "\n";
}

console.log(text);
/**
 * apples, 500
 * bananas, 300
 * oranges, 200
 */