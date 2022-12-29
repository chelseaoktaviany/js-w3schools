// because of this, these two examples will return the same result:
// function myFunction(x) {
//     let power = 10
//     return a * power
// }

// example 2
function myFunction(a) {
    let power = 10;
    return a * power;
}

// example 3
// because of this, example 3 will also return the same result:
function myFunction(a) {
    let
    power = 10;
    return a * power;
}

// but what will happen if you break the return statement in two lines like this:
// function myFunction(a) {
//     let
//     power = 10;
//     return
//     a * power;
// }

// the function will return undefined
function myFunction(a) {
    let
    power = 10;
    return;
    a * power;
}