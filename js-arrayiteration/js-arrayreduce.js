//the reduce() method runs a function on each array element to produce (reduce it to) a single value.

const numbers = [45, 4, 9, 16, 25];

//method 1
let sum = numbers.reduce(myFunction);

//method 2
let sum2 = numbers.reduce(myFunction, 100);

// function myFunction(total, value, index, array) {
//     return total + value;
// }

//can be written
function myFunction(total, value) {
    return total + value;
}

console.log(sum);  //the sum is 99

console.log(sum2); //the sum is 199