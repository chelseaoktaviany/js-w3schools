// the apply() method is similar to the call() method (previous chapter).

// in this example the fullName method of person is applied on person1
const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const person1 = {
    firstName: "Mary",
    lastName: "Doe"
}

// this will return "Mary Doe":
person.fullName.apply(person1);