// using an object constructor
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "English";
}

// adding 2 persons
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

// display nationality
console.log("The nationality of my father is " + myFather.nationality + ". The nationality of my mother is " + myMother.nationality); // the nationality of my father is english. the nationality of my mother is english