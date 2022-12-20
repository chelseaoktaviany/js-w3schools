//ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const mango = fruits.includes("Mango");

console.log(mango); //is true