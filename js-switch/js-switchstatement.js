//use the switch statement to select one of many code blocks to be executed


//example - the getDay() method returns the weekday as a number between 0 and 6.
// sunday = 0, monday = 1, tuesday = 2
let today = new Date().getDay();
let day;

switch(today) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

console.log("Today is " + day); //Today is X