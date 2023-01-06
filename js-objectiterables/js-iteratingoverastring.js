// you can use a for..of loop to iterate over the elements of a string:
// create a string
const name = "W3Schools";

// list all elements
let text = "";
for (const x of "W3Schools") {
    text += x + "\n";
}

// display output
console.log("Iterate over a string:" + "\n" + text);