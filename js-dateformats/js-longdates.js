//JavaScript long dates
//long dates are most often written with a "MMM DD YYYY" syntax like this:
const d = new Date("Mar 25 2015");
console.log(d); //Wed Mar 25 2015 00:00:00 GMT+0700 (Western Indonesia Time)

//month and day can be in any order:
const d2 = new Date("25 Mar 2015");
console.log(d2); //Wed Mar 25 2015 00:00:00 GMT+0700 (Western Indonesia Time)

//and, month can be written in full (january), or abbreviated (jan):
const d3 = new Date("January 25 2015");
console.log(d3); //Sun Jan 25 2015 00:00:00 GMT+0700 (Western Indonesia Time)

const d32 = new Date("Jan 25 2015");
console.log(d32); //Sun Jan 25 2015 00:00:00 GMT+0700 (Western Indonesia Time)

//commas are ignored, names are case insensitive
const d33 = new Date("JANUARY, 25, 2015");
console.log(d33); //Sun Jan 25 2015 00:00:00 GMT+0700 (Western Indonesia Time)