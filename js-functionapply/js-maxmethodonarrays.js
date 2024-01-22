// this example returns the highest number in a list of number arguments"
console.log(Math.max(1,2,3)); // 3

// since js arrays do not have a max() method, you can apply the math.max() method instead
console.log(Math.max.apply(null, [1,2,3])); // 3


// the first argument null does not matter. it's not used in this example.


// these examples will give the same result:
console.log(Math.max.apply(Math, [1,2,3])); // 3

//example
console.log(Math.max.apply(" ", [1,2,3])); // 3

// example
console.log(Math.max.apply(0, [1,2,3])); // 3