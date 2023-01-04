// the properties of an object can be collected in a loop
const person = {
    name:"John",
    age:30,
    city:"New York",
};

let txt = "";
for (let x in person) {
    txt += person[x] + " ";
};

console.log(txt); // John 30 New York