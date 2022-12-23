// use the if statement to specify a block of JavaScript code to be executed if a condition is true

//example - make a "Good day" greeting if the hour is less than 18:00
let hour = new Date().getHours();
let greeting;
if (hour < 18) {
    greeting = "Good day";
}

console.log(greeting);  //good day


