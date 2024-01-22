// the example below creates an object with 3 properties, firstName, lastName, fullName.

const person = {
    firstName: 'John',
    lastName: 'Doe',
    fullName: function () {
        return this.firstName + " " + this.lastName; 
    }
}

// this will return "John Doe":
console.log(person.fullName()
); // John Doe