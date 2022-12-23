// the forEach() method calls a function (a callback function) once for each array element.

//example
// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//     txt += value;
// }

// console.log(txt);   // 45491625


// the example above uses only the value parameter. it can be rewritten to:
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
    txt += value;
}

console.log(txt);   // 45491625