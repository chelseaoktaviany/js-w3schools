// the while loops through a block of code as long as a specified condition is true.

// example - in the following example, the code in the loop will run, over and over again, as long as a variable (i) is less than 10:
let i = 0;
let text = "";
while (i < 10) {
    text += "The number is " + i + "\n";
    i++;
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