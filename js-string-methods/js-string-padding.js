/**
 *
 * JavaScript String Padding
 * ECMAScript 2017 added two String methods: padStart() and padEnd() to support padding at the beginning and at the end of a string.
 *
 */

// JavaScript String padStart()
// the padStart() method pads a string with another string
let text1 = "5";
let padded1 = text1.padStart(4, "x");

console.log(padded1); //the output will be "xxx5"

let text2 = "5";
let padded2 = text2.padStart(4, "0");

console.log(padded2); //the output will be 0005

// to pad a number, convert the number to a string first
let numb = 5;
let text3 = numb.toString();
let padded3 = text3.padStart(4, "0");

console.log(padded3); //the output will be 0005

// JavaScript String padEnd()
// the padEnd() method pads a string with another string
let text4 = "5";
let padded4 = text4.padEnd(4, "x");

console.log(padded4); //the output will be "5xxx"

let text5 = "5";
let padded5 = text5.padEnd(4, "0");

console.log(padded5); //the output will be 5000

// to pad a number, convert the number to a string first
let numb2 = 5;
let text6 = numb2.toString();
let padded6 = text6.padEnd(4, "0");

console.log(padded6); //the output will be 5000
