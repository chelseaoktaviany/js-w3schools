//javascript new array()
/**
 * JavaScript has a built-in array constructor new Array()
 * But you can safely use [] instead
 *
 * these two different statement both create a new empty array named points: 
 */

const points = new Array(40, 100, 1, 5, 25, 10);
const points2 = [40, 100, 1, 5, 25, 10];

console.log(points); //[40, 100, 1, 5, 25, 10]
console.log(points2); //[40, 100, 1, 5, 25, 10]