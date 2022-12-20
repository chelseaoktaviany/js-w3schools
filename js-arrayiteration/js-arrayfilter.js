//the filter() method creates a new array with array elements that pass a test.
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

// function myFunction(value, index, array) {
//     return value > 18;
// }

//can be written
function myFunction(value) {
    return value > 18;
}

console.log(over18); //[45, 25]