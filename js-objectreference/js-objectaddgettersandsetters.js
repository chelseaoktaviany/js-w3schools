// the Object.defineProperty() method can also be used to add getters and setters

// create an object
const person = {firstName:"John", lastName:"Doe"};

// define a getter
Object.defineProperty(person, "fullName", {
    get: function () {return this.firstName + " " + this.lastName;}
})