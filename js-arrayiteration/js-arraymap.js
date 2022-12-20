//this example multiplies each array value by 2

//the map() method creates a new array by performing a function on each array element

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

// function myFunction(value, index, array) {
//     return value * 2;
// }

//can be written
function myFunction(value) {
    return value * 2;
}

console.log(numbers2); //[90, 8, 18, 32, 50]