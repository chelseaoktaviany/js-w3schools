// the javascript prototype property also allows you to add new methods to object constructor:
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyecolor = eyecolor;
}

Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};

const myFather = new Person("John", "Doe", 50, "blue");
console.log("My father is " + myFather.name()); // John Doe