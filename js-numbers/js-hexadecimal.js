// javascript interprets numeric constants as hexadecimal if they are preceded by 0x
let x = 0xFF;
console.log("0xFF = " + x); // 0xFF = 255

// But you can use the toString() method to output numbers from base 2 to base 36.

// Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
let myNumber = 32;
console.log("Hexatrigesimal (base 36): " + myNumber.toString(36)); //w
console.log("Duotrigesimal (base 32): " + myNumber.toString(32)); //10
console.log("Hexadecimal (base 16): " + myNumber.toString(16)); //20
console.log("Duodecimal (base 12): " + myNumber.toString(12)); //28
console.log("Decimal (base 10): " + myNumber.toString(10)); //32
console.log("Octal (base 8): " + myNumber.toString(8)); //40
console.log("Binary (base 2): " + myNumber.toString(2)); //100000


