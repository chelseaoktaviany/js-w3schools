// entries() returns an iterator with [value,value] pairs from a set

// create a set
const letters = new Set(["a","b","c"]);

// list all entries
const iterator = letters.entries();

let text = "";
for (const entry of iterator) {
    text += entry + "\n";
}

console.log(text);
/**
 * a,a
 * b,b
 * c,c
 */