// The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) {continue;}
    text += "The number is " + i + "\n";
}

console.log(text);
/**
 * The number is 0
 * The number is 1
 * The number is 2
 * The number is 3
 * The number is 4
 * The number is 5
 * The number is 6
 * The number is 7
 * The number is 8
 * The number is 9
 */
