/**
 *
 * JavaScript String substr()
 * substr is similar to slice()
 *
 * The difference is that the second parameter specifies the length of the extracted part.
 *
 */

let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);

console.log(part); // the output will be "Banana"

// if you omit the second parameter, substr() will slice out the rest of the string.
let part2 = str.substr(7);

console.log(part2); // the output will be "Banana, Kiwi"

// if the first parameter is negative, the position counts from the end of the string
let part3 = str.substr(-4);

console.log(part3); // the output will be "Kiwi"
