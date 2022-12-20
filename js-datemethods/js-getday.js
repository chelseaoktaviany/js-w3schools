//the getDay() method returns the weekday of a date as a number (0-6)
const d = new Date("2021-03-25");
console.log(d.getDay()); //4 as thursday

const d2 = new Date();
console.log(d2.getDay()); //5 as friday


//you can use an array of names, and getDay() to return weekday as a name:
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = days[d.getDay()];
console.log(day); //Thursday

let day2 = days[d2.getDay()];
console.log(day2); //Friday