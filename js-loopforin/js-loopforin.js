// the javascript for in statement loops through the properties of an object:

//example
const person = {fname: "John", lname: "Doe", age: 25};

let text = "";
for (let x in person) {
    text += person[x] + " ";
}

console.log(text);  //John Doe 25