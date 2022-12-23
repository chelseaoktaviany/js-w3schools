// use the else if statement to specify a new condition if the first condition is false

//example - if time is less than 10:00, create a "Good morning" greeting, if not, but time is less than 20:00, create a "Good day" greeting, otherwise a "Good evening"

let time = new Date().getHours();
let greeting;
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

console.log(greeting);  //Good morning