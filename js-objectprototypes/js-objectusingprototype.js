// the prototype property allows you to add new methods to objects constructors:
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

Person.prototype.nationality = "English";

const myFather = new Person("John", "Doe", 50, "blue");
console.log("The nationality of my father is " + myFather.nationality); // the nationality of my father is english