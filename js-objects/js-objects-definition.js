// defining person as an object
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
// };

// defining person as an object by using function in fullName property
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

//accessing object properties
firstName = person.firstName;
lastName = person.lastName;

//accessing object method
fullName = person.fullName();

//getting the result
console.log("His first name is " + firstName); // the output will be His first name is John

console.log("His last name is " + lastName); // the output will be His last name is Doe

//accessing object method
console.log("His full name is " + fullName); // the output will be His full name is John Doe
