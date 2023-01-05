// to add a new property to a constructor, you must add it to the constructor function:
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
}

// create 2 person objects
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

// display nationality
console.log("My father is " + myFather.nationality + " and my mother is " + myMother.nationality); // my father is English and my mother is English