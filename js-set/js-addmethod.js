// a javascript set is a collection of unique values
// each value can only occur once in a Set

// create a set
const letters = new Set(["a", "b", "c"]);

// add variables to the set
letters.add("d");
letters.add("e");

console.log(letters); // Set {'a', 'b', 'c', 'd', 'e'}

console.log("The size of set is " + letters.size);  // the size of set is 5

// if you add equal elements, only the first will be saved:
const letters2 = new Set();

letters2.add("a");
letters2.add("b");
letters2.add("c");
letters2.add("c");
letters2.add("c");
letters2.add("c");
letters2.add("c");
letters2.add("c");

console.log("The size of set is " + letters2.size); // the size of set is 3