// a function can access variables defined inside the function:
console.log(myFunction()); // 16

function myFunction() {
    let a = 4;
    return a * a;
}

// but a function can also access variables defined outside the function, like this:
let a2 = 4;
console.log(myFunction2()); //16

function myFunction2() {
    return a2 * a2;
}

// variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.
myFunction3();
console.log(a3 * a3); // 16

function myFunction3() {
    a3 = 4;
}