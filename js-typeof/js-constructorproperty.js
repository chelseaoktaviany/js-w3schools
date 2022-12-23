// the constructor property returns the constructor function for all javascript variables
console.log("John".constructor + "\n");                 // returns function String() {[native code]}
console.log((3.14).constructor + "\n");                 // returns function Number() {[native code]}
console.log(false.constructor + "\n");                  // returns function Boolean() {[native code]}
console.log([1,2,3,4].constructor + "\n");              // returns function Array() {[native code]}
console.log({name:'John',age:34}.constructor + "\n");   // returns function Object() {[native code]} 
console.log(new Date().constructor + "\n");             // returns function Date() {[native code]}
console.log(function () {}.constructor + "\n");         // returns function Function() {[native code]}