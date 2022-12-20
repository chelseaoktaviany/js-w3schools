// local variables
myFunction();

function myFunction() {
  let carName = "Volvo";
  console.log(typeof carName + " " + carName);
} //the output will be string volvo

// the output will be undefined because variable "carName" is assigned outside of the function.
console.log(typeof carName); //the output will be undefined
