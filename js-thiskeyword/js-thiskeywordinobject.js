// create an object
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    myFunction: function() {
        return this;
    }
};

// display data from the object
console.log(person.myFunction());