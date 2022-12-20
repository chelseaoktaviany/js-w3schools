/**
 *
 * JavaScript String includes()
 * The includes() method returns true if a string contains a specified value
 *
 * Otherwise it returns false
 */

//check if a string includes "world":
let text = "Hello world, welcome to the universe";
console.log(text.includes("world")); //true

//check if a string includes "world". start at position 12:
console.log(text.includes("world", 12)); //false
