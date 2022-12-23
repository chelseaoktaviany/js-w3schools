let x = 123;

console.log(String(x) + "\n");      // 123
console.log(String(123) + "\n");    // 123
console.log(String(100 + 23));      // 123

// the number method toString() does the same.
console.log(x.toString());          // 123
console.log((123).toString())       // 123
console.log((100 + 23).toString())  // 123