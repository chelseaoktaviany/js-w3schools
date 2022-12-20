/**
 *
 * JavaScript String startsWith()
 * The startsWith() method returns true if a string begins with a specified value.
 *
 * Otherwise it returns false:
 *
 */

//returns true
let text = "Hello world, welcome to the universe.";
console.log(text.startsWith("Hello")); //true

//returns false
console.log(text.startsWith("world")); //false

//a start position for the search can be specified
//returns false
console.log(text.startsWith("world", 5));

//returns true
console.log(text.startsWith("world", 6)); //true
