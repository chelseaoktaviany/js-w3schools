// the reduceRight() method runs a function on each array element to produce (reduce it to) a single value.

const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduceRight(myFunction);

// function myFunction(total, value, index, array) {
//     return total + value;
// }

//can be written
function myFunction(total, value) {
    return total + value;
}

console.log(sum); //99