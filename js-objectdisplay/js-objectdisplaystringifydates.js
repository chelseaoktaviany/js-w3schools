// JSON.stringify converts dates into strings:
const person = {
    name: "John",
    today: new Date()
};

let myString = JSON.stringify(person);
console.log(myString);