// adding methods to an object constructor must be done inside the constructor function
function Person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function(name) {
        this.lastName = name;
    };
}

// create a person object
const myMother = new Person("Sally", "Rally", 48, "green");

// change last name
myMother.changeName("Doe");

// the changename function assigns the value of name to the person's lastname property
console.log("My mother's last name is " + myMother.lastName); // my mother's last name is "Doe"