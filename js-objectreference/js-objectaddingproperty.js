// this example adds a new property to an object:

// create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
};

// add a property
Object.defineProperty(person, "year", {value:"2008"});

console.log(person.year);