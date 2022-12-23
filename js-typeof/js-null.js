// in javascript null is "nothing". it is supposed to be something that doesn't exist

// you can empty an object by setting it to null:
let person = {firstName: "John", lastName: "Doe", age:50, eyeColor: "blue"};
person = null;

console.log(typeof person); // object

// you can also empty an object by setting it to undefined
let person2 = {firstName: "John", lastName: "Doe", age:50, eyeColor: "blue"};
person2 = undefined;

console.log(typeof person2) // undefined (now both value and type is undefined)