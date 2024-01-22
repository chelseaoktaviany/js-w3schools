// the example changes a property value:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "EN"
};

// change a property value
Object.defineProperty(person, 'language', {value: "NO"});

console.log(person.language); // NO