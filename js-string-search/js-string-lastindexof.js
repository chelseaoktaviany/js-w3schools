/**
 *
 * JavaScript string lastIndexOf()
 * The lastIndexOf() method returns the index of the last occurrence of a specified text in a string
 *
 */

let text = "Please locate where 'locate' occurs!";
// text.lastIndexOf("locate");

console.log(text.lastIndexOf("locate")); // the output is 21

// both indexOf() and lastIndexOf() returns -1 if the text is not found:
let text2 = "Please locate where 'locate' occurs!";
console.log(text2.lastIndexOf("John")); // the output is -1

// both methods accept a second parameter as the starting position for the search:
let text3 = "Please locate where 'locate' occurs!";
console.log(text3.indexOf("locate", 15)); // the output is -21

// the lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.
let text4 = "Please locate where 'locate' occurs!";
console.log(text.lastIndexOf("locate", 15));
// the output is 7
