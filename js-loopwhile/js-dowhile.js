// The do while loop is a variant of the while loop. This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true.

// example - The example below uses a do while loop. The loop will always be executed at least once, even if the condition is false, because the code block is executed before the condition is tested:
let i = 0;
let text = "";
do {
    text += "\n The number is " + i;
    i++;
}
while (i < 10);

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