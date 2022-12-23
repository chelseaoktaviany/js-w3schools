// when javascript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.
console.log((5 + null) + "\n");     // 5
console.log(("5" + null) + "\n");   // 5null
console.log(("5" + 2) + "\n");      // 52
console.log(("5" - 2) + "\n");      // 3
console.log(("5" * "2") + "\n");    // 10
console.log(("5" / "2") + "\n");    // 2.5