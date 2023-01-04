const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
};

person.name = function() {
    return (this.firstName + " " + this.lastName).toUpperCase();
}

console.log("My father is " + person.name()); // My father is JOHN DOE