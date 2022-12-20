//When you display a date object in HTML, it is automatically converted to a string, with the toString() method.
const d = new Date();
console.log(d.toString()); //Thu Dec 15 2022 13:57:42 GMT+0700 (Western Indonesia Time) 

//The toDateString() method converts a date to a more readable format:
console.log(d.toDateString()); //Thu Dec 15 2022

//The toUTCString() method converts a date to a string using the UTC standard:
console.log(d.toUTCString()); //Thu, 15 Dec 2022 06:58:02 GMT 

//The toISOString() method converts a date to a string using the ISO standard:
console.log(d.toISOString()); //2022-12-15T06:58:10.248Z 