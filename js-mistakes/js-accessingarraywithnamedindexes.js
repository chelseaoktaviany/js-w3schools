// in javascript, array use numbered indexes
const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;
person.length;  // person.length will return 3
person[0];      // person[0] will return "John"

// if you use a named index, when accessing an array, javascript will redefine the array to a standard object.
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length;  // person.length will return 0
person[0];  // person[0] will return undefined