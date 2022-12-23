// the typeof operator returns the type of a variable, object, function or expression:
console.log("'John' is " + typeof "John" + "\n");                   // 'John' is string
console.log("3.14 is " + typeof 3.14 + "\n");                       // 3.14 is number
console.log("NaN is " + typeof NaN + "\n");                         // NaN is number
console.log("false is " + typeof false + "\n");                     // false is boolean
console.log("[1,2,3,4] is " + typeof [1,2,3,4] + "\n");             // [1,2,3,4] is object
console.log("{name: 'John', age:34} is " + typeof {name: 'John', age:34} + "\n");   // {name:'John',age:34} is object
console.log("new Date() is " + typeof new Date() + "\n");           // new Date() is object
console.log("function(){} is " + typeof function() {} + "\n");      // function() {} is function
console.log("myCar is " + typeof myCar + "\n");                     // myCar is undefined
console.log("null is " + typeof null);                              // null is object