// this example returns the window object as the value of this:
let x = myFunction() // x will be the window object

function myFunction() {
    return this;
}