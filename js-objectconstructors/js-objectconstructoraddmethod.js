// javascript object constructors - adding method
function Person(name, last, age, eye) {
    this.firstName = name;
    this.lastName = last;
    this.age = age;
    this.eye = eye;
}

// create 2 person objects
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");


// add a name method to first object
myFather.name = function() {
    return this.firstName + " " + this.lastName;
};

// display full name
console.log(myFather.name()); // John Doe