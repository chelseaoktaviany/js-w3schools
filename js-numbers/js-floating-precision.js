// floating precision

// floating point arithmetic is not always 100% accurate:
let x = 0.2 + 0.1;

console.log(x); //0.30000000000000004

// to solve the problem above, it helps to multiply and divide:
let y = (0.2 * 10 + 0.1 * 10) / 10;

console.log(y); // 0.3