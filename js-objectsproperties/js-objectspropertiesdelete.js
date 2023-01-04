const person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};

//example
// delete person.age;

// example 2
delete person["age"];

console.log(person);