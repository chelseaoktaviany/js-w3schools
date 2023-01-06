// the foreach() method invokes a function for each set element
const letters = new Set(["a", "b", "c"]);

// list all elements
let text = "";
letters.forEach (function(value) {
    text += value + "\n";  
}) 

console.log(text);
/**
 * a
 * b
 * c
 */