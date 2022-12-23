// the forEach() method invokes (calls) a function for each set element

// create a set
const letters = new Set(["a", "b", "c"]);

// list all element
let text = "";
letters.forEach (function(value) {
    text += value + "\n";
});

console.log(text);

/**
 * a
 * b
 * c
 */

// now you can use the iterator object to access the elements:

// list all elements
let text2 = "";
for (const x of letters.values()) {
    text2 += x + "\n";
}

console.log(text2);
/**
 * a
 * b
 * c
 */