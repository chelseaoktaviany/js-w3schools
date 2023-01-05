// example 1 - access fullName as a function: person.fullName()
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

//display data from the object using a method:
console.log(person.fullName()); // John Doe

// example 2 - access fullName as a property: person.fullName
console.log(person.fullName); //[fullName]
