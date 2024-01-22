// this example list only the enumerable properties of an object
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
};

Object.defineProperty(person, "langugae", {enumerable: false});

// returns an array of enumerable property
console.log(Object.keys(person)); // ['firstName', 'lastName', 'language']