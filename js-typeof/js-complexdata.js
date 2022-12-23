// the typeof operator can return one of two complex types: function and object
console.log(typeof {name: 'John', age:34} + "\n");      // returns object
console.log(typeof [1,2,3,4] + "\n");                   // returns object (not "array", see note below)
console.log(typeof null + "\n");                        // returns object
console.log(typeof function myFunc(){});                // returns function