//date input - parsing dates
//Date.parse() returns the number of milliseconds between the date and January, 1 1970:
let msec = Date.parse("March 21, 2012");
console.log(msec); //1332262800000

//you can then use the number of milliseconds to convert it to a date object:
let msec2 = Date.parse("March 21, 2012");
const d = new Date(msec2);
console.log(d); //Wed Mar 21 2012 00:00:00 GMT+0700 (Western Indonesia Time)