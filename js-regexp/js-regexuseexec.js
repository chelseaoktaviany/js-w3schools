// the exec() method is a RegExp expression method
const obj = /e/.exec("The best things in life are free!");
console.log("Found " + obj[0] + " is position " + obj.index + " in the text: " + obj.input);

// Found e is position 2 in the text: The best things in life are free! 