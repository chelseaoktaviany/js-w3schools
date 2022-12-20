/**
 *
 * Replacing String Content
 * The replace() method replaces a specified value with another value in a string:
 *
 */

let text = "Hello World!";
let newText = text.replace("World", "Chelsea");

console.log(newText); //the output will be "Hello Chelsea!"

// by default, the replace() method replaces only the first match:
let text2 = "Please visit me and me!";
let newText2 = text2.replace("me", "my website");

console.log(newText2); //the output will be "Please visit my website and me!"

//to replace case insensitive, use a regular expression with an /i flag (insensitive)
let text3 = "Hello, Chelsea!";
let newText3 = text3.replace(/CHELSEA/i, "CHELCHEL");

console.log(newText3); //the output will be "Hello, CHELCHEL!"

//to replace all matches, use a regular expression with a /g flag (global match)
let text4 = "Please visit CHELCHEL and CHELCHEL!";
let newText4 = text4.replace(/CHELCHEL/g, "Chelsea");

console.log(newText4); //the output will be "Please visit Chelsea and Chelsea!"
