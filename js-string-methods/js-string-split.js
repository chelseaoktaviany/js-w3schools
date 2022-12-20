/**
 *
 * JavaScript String split()
 * A string can be converted to an array with the split() method
 *
 */

let text = "a,b,c,d,e,f";

text.split(","); // split on commas
text.split(" "); // split on spaces
text.split("|"); // split on pipe

const myArray = text.split(","); //split on commas

// If the separator is omitted, the returned array will contain the whole string in index [0].
console.log(myArray[0]); //the output will be a

// if the separator is "", the returned array will be an array of single characters
let text2 = "Hello";
const myArr = text2.split("");

text2 = "";
for (let i = 0; i < myArr.length; i++) {
  text2 += myArr[i] + "\n";
}

console.log(text2);

/**
 *
 * the output will be
 *
 * H
 * e
 * l
 * l
 * o
 *
 */
