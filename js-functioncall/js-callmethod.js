// with call(), an object can use a method belonging to another object


// this example calls the fullName method of person, using it on person1
// const person = {
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// }

// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }

// const person2 = {
//     firstName: "Mary",
//     lastName: "Doe"
// }


// this will return "John Doe"
// console.log(person.fullName.call(person1)); // John Doe


// this example calls the fullName method of person, using it on person2
const person  = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

const person2 = {
    firstName: "Mary",
    lastName: "Doe"
}

// this will return "Mary Doe"
console.log(person.fullName.call(person2)); // Mary Doe