// use a case insensitive regular expression to replace microsoft with w3schools in a string
let text = "Visit Microsoft!";
let result = text.replace(/microsoft/i, "W3Schools");

console.log(result);    // Visit W3Schools