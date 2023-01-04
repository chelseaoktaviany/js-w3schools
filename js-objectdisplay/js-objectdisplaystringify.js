// any javascript object can be stringified (converted to a string) with the js function JSON.stringify()

const person = {
    name:"John",
    age:30,
    city:"New York",
};

let myString = JSON.stringify(person);
console.log(myString); // {"name":"John","age":30,"city":"New York"}