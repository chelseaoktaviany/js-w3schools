// iterating set values

// create a set
const letters = new Set(["a","b","c"]);

// list all elements
let text = "";
for (const x of letters.values()) {
    text += x + "\n";
}

console.log(text);
/**
 * a
 * b
 * c
 */