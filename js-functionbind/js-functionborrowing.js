// the example below creates 2 objects (person and member).

// the member object borrows the fullname method from the person object
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName: "Hege",
    lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);

console.log(fullName()); // Hege Nilsen