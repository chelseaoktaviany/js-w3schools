// a javascript set is a collection of unique values
// each value can only occur once in a Set

// create a set
const letters = new Set();

// create variables
const a = "a";
const b = "b";
const c = "c";

// add variables to the set
letters.add(a);
letters.add(b);
letters.add(c);

console.log(letters); // Set {'a', 'b', 'c'}

console.log("The size of set is " + letters.size);  // the size of set is 3