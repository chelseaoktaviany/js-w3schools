// you could use a global variable, and a function to increase the counter:

// initiate counter
let counter = 0;

// function to increment counter
function add() {
    counter += 1;
}

// call add() 3 times
add();
add();
add();

// the counter should now be 3
console.log("The counter is: " + counter); // the counter is 3


// the counter should be local to the add() function, to prevent other code from changing it:

// initiate counter
let counter2 = 0;

// function to increment counter
function add2() {
    let counter2 = 0;
    counter2 += 1;
}

add2();
add2();
add2();

console.log("The counter2 is: " + counter2); // the counter2 is 0
