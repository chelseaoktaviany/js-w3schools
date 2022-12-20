//new Date(year, month, ...) creates a date object with a specified date and time.

const d = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d); //Mon Dec 24 2018 10:33:30 GMT+0700 (Western Indonesia Time)

//using 6, 4, 3, or 2 numbers

//6 numbers
const d2 = new Date(2018, 11, 24, 10, 33, 30);
console.log(d2); //Mon Dec 24 2018 10:33:30 GMT+0700 (Western Indonesia Time)

//5 numbers
const d3 = new Date(2018, 11, 24, 10, 33);
console.log(d3); //Mon Dec 24 2018 10:33:30 GMT+0700

//4 numbers
const d4 = new Date(2018, 11, 24, 10);
console.log(d4); //Mon Dec 24 2018 10:00:00 GMT+0700 (Western Indonesia Time)

//3 numbers
const d5 = new Date(2018, 11, 24);
console.log(d5); //Mon Dec 24 2018 00:00:00 GMT+0700 (Western Indonesia Time)

//2 numbers
const d6 = new Date(2018, 11);
console.log(d6); //Sat Dec 01 2018 00:00:00 GMT+0700 (Western Indonesia Time)

//1 numbers as milliseconds
const d7 = new Date(2018);
console.log(d7); //Thu Jan 01 1970 07:00:02 GMT+0700 (Western Indonesia Time)