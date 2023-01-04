// converting the function into strings before stringifying
const person = {
    name:"John",
    age: function() {return 30;}
};
person.age = person.age.toString();

let myString = JSON.stringify(person);
console.log(myString);