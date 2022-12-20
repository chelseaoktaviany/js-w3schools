/**
 * The Number.isSafeInteger() Method
 * A safe integer is an integer that can be exactly represented as a double precision number.
 */

//The Number.isSafeInteger() method returns true if the argument is a safe integer.

console.log(Number.isSafeInteger(10)); //true
console.log(Number.isSafeInteger(12345678901234567890)); //false