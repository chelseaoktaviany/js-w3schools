// the ?. operator returns undefined if an object is undefined or null (instead of throwing an error).
// create an object
const car = {type: "Fiat", model: "500", color: "white"};
console.log("The car name is " + car?.name); //undefined