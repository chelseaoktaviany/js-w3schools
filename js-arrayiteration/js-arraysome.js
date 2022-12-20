//the some() method checks if some array values pass a test.

//this example checks if some array values are larger than 18
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}

console.log(someOver18); //some over 18 is true