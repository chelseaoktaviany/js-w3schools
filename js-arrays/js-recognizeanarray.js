//how to recognize an array
//a common question is: how do i know if a variable is an array?

//the problem is that the javascript operator typeof returns object
const fruits = ["Banana", "Orange", "Apple"];
let type = typeof fruits;

//solution1 - to solve this problem ecmascript5 (js 2009) defined a new method Array.isArray()
console.log(Array.isArray(fruits)); //true

//solution2 - the instanceof operator returns true if an object is created by a given constructor
const fruits2 = ["Banana", "Orange", "Apple"];
console.log(fruits2 instanceof Array); //true