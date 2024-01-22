// you don't need the function keyword, the return keyword, and the curly brackets.

// es5
var x = function(x, y) {
    return x * y;
}
console.log(x);

// es6
const x2 = (x2, y2) => x2 * y2;
console.log(x2);

// you can only omit the return keyword and the curly brackets if the function is a single statement. because of this, it might be a good habit to always keep them:
const x3 = (x3, y3) => {
    return x3 * y3;
}
console.log(x3);