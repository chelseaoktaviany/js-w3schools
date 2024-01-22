// this example list the properties of an object

// create an object
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
};

// change property
Object.defineProperty(person, "language", {enumerable:false});

// display properties
console.log(Object.getOwnPropertyNames(person)); // ['firstName', 'lastName', 'language']