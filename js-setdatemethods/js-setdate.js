//the setDate() method sets the day of a date object (1-31)
const d = new Date();
d.setDate(15);
console.log(d); //Thu Dec 15 2022 11:12:30 GMT+0700 (Western Indonesia Time)

//the setDate() method can also be used to add days to a date:
d.setDate(d.getDate() + 50);
console.log(d); //Fri Feb 03 2023 11:13:14 GMT+0700 (Western Indonesia Time)