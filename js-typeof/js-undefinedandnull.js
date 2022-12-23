// undefined and null are equal in value but different in type:

console.log(typeof undefined);  // returns undefined
console.log(typeof null);       // returns object

console.log((null === undefined));  // returns false
console.log((null == undefined));   // returns true