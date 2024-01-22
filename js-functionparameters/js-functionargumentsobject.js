// this way you can simply use a function to find (for instance) the highest value in a list of numbers:
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(x); // 500

// or create a function to sum all input values
x2 = sumAll(1, 123, 500, 115, 44, 88);
function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}