// access a property with .property:
const person = {
        firstName: "John",
        lastName: "Doe",
        age:50,
        eyeColor: "blue"
};

console.log(person.firstName + " is " + person.age + " years old."); // john is 50 years old.

// or example 2
console.log(person["firstName"] + " is " + person["age"] + " years old.");