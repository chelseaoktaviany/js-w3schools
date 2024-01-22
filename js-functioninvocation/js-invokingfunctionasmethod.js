// const myObject = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }

// will return "John Doe"
// console.log(myObject.fullName()); 

// change the fullName method to return the value of this:
const myObject = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this;
    }
}

// this will return [object Object] (the owner object)
console.log(myObject.fullName());