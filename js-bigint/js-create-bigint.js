// to create a BigInt, append n to the end of an integer or call BigInt()
let x = 9999999999999999;
let y = BigInt("9999999999999999");

console.log(x); // 10000000000000000
console.log(y); // 9999999999999999

let x2 = 123456789012345678901234567890n;
let y2 = BigInt("123456789012345678901234567890");

console.log(x2); // 123456789012345678901234567890
console.log(y2); // 123456789012345678901234567890

// the js typeof a BigInt is "bigint"
let x3 = BigInt(999999999999999);
let type = typeof x3;

console.log(type); //bigint
