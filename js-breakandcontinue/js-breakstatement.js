//The break statement can also be used to jump out of a loop

let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) {break;}
    text += "The number is " + i + "\n";
}

console.log(text);

/**
 * The number is 0
 * The number is 1
 * The number is 2
 */
