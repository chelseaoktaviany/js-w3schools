// modifiers can be used to perform case-insensitive more global searches

// i
let text = "Visit W3Schools";
let result = text.match(/w3schools/i);
console.log(result);


// g
let text2 = "is this all there is?";
let result2 = text2.match(/is/g);
console.log(result2);

// m
let text3 = "\nIs th\nis it?";
let result3 = text3.match(/^is/m);

console.log("Result is: " + result3);