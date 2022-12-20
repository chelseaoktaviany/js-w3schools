// a bigint cannot have decimals
let x = 5n;
let y = Number(x) / 2;
console.log(y); // 2.5