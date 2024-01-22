// it looks like you create a new function, but since javascript functions are objects you actually create a new object:

// this is a function constructor:
function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName = arg2;
}

// this creates a new object
const myObj = new myFunction("John", "Doe");

// this will return "john"
console.log(myObj.firstName); // John