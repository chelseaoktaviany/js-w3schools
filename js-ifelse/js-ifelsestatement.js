// use the else statement to specify a block of code to be executed if the condition is false

//example - if the hour is less than 18, create a "Good day" greeting, otherwise "Good evening"
let hour = new Date().getHours();
let greeting;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting);  //Good day