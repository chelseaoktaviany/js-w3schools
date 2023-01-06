// you can use a for..of loop to iterate over the elements of an array:

// create letters
const letters = ["a", "b", "c"];

// list all elements
let text = "";
for (const x of letters) {
    text += x + "\n";
}

// display the output
console.log(text);