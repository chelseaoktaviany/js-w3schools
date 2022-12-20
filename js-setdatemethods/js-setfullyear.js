//the setFullYear() method sets the year of a date object. in this example to 2020:
const d = new Date();
d.setFullYear(2020);

console.log(d); //Wed Dec 16 2020 11:05:55 GMT+0700 (Western Indonesia Time)

//the setFullYear() method can optionally set month and day
d.setFullYear(2020, 11, 3);
console.log(d); //Thu Dec 03 2020 11:06:59 GMT+0700 (Western Indonesia Time)