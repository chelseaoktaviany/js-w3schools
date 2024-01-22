// the function above does not belong to any object. but in javascript there is always a default global object.
function myFunction(a, b) {
    return a * b;
}

console.log(myFunction(10, 2));  // will return 20