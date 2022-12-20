// Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number
let myNumber = 2;
let txt = "";
// execute until infinity
while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
    txt = txt + myNumber + "\n";
}

console.log(txt);

// division by 2 (zero) also generates Infinity
let x = 2 / 0;
let y = -2 / 0;
console.log(x); // Infinity
console.log(y); // -Infinity

// Infinity is a number: typeof Infinity returns number
console.log(typeof Infinity); // number