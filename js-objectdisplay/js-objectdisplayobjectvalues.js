// any javascript object can be converted to an array using object.values()
const person = {
    name:"John",
    age:30,
    city:"New York",
};

const myArray = Object.values(person);

console.log(myArray); // ['John', 30, 'New York']
