// often this is the case when working with arrays
// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// let text = "";
// for (let i = 0; i < cars.length; i++) {
//     text += cars[i] + "\n";
// }
// console.log(text);

/**
 * BMW
 * Volvo
 * Saab
 * Ford
 * Fiat
 * Audi
 */

// the for statement creates a loop with 3 optional expressions
let text2 = "";
for (let i = 0; i < 5; i++) {
    text2 += "The number is " + i + "\n";
}

console.log(text2);

/**
 * The number is 0
 * The number is 1
 * The number is 2
 * The number is 3
 * The number is 4
 */

//expression 1
// for (let i = 0, len = cars.length, text = ""; i < len; i++) {
//     text += cars[i] + "\n";
// }

// console.log(text);

//you can omit expression 1
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let i = 2;
let len = cars.length;
let text = "";
for (; i < len; i++) {
    text += cars[i] + "\n";
}

console.log(text);

/**
 * Saab
 * Ford
 * Fiat
 * Audi
 */

//expression 
for (; i < len; ) {
    text += cars[i] + "\n";
    i++;
}

console.log(text);