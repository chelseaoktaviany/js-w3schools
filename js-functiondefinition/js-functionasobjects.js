// the arguments.length property returns the number of arguments received when the function was invoked:
function myFunction(a, b) {
    return arguments.length;
}

console.log(myFunction(4, 3)); // 2

// the toString() method returns the function as a string:
let text = myFunction.toString();
console.log(text);