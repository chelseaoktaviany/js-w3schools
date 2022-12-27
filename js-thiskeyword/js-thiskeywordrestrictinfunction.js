"use strict";
console.log(myFunction()); // undefined

function myFunction() {
    return this;
}