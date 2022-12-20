/**
 *
 * JavaScript String slice()
 * slice() extracts a part of a string and returns the extracted part in a new string.
 *
 * The method takes 2 parameters: start position, and end position (end not included).
 *
 */

let text = "Apple, Banana, Kiwi";
let part1 = text.slice(7, 13);

console.log(part1); // the output will be "Banana"

// if you omit the second parameter, the method will slice out the rest of the string:
let part2 = text.slice(7);
console.log(part2); // the output will be "Banana, Kiwi"

// if a parameter is negative, the position is counted from the end of the string:
let part3 = text.slice(-12);
console.log(part3); // the output will be "Banana, Kiwi"

// this example slices out a portion of a string from position -12 to position -6
let part4 = text.slice(-12, -6);
console.log(part4); // the output will be "Banana"
