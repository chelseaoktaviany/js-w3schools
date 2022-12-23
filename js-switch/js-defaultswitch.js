//the default keyword specifies the code to run if there is no case match:

//example - the getDay() method returns the weekday as a number between 0 and 6
let today = new Date().getDay();
let text;
switch (today) {
    case 6:
        text = "Today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
        break;
    default:
        text = "Looking forward to the Weekend";
}

console.log(text);  //looking forward to the weekend