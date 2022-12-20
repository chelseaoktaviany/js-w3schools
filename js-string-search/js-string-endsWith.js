/***
 *
 * JavaScript String endsWith()
 * The endsWith() method returns true if a string ends with a specified value
 *
 * Otherwise it returns false
 */

//check if a string ends with "Doe":
let text = "John Doe";
console.log(text.endsWith("Doe")); //true

//check if the 11 first characters of a string ends with "world":
console.log(text.endsWith("world", 11)); //false
