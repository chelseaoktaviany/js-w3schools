// the apply() method accepts arguments in an array:
// const person = {
//     fullName: function(city, country) {
//         return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
// }

// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }

// person.fullName.apply(person1, ["Oslo", "Norway"]);

// compared with the call() method:
const person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

console.log(person.fullName.call(person1, "Oslo", "Norway")); // John Doe, Oslo, Norway