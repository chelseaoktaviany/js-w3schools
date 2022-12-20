//the getMonth() method returns the month of a date as a number (0-11)
const d = new Date("2021-03-25");
console.log(d.getMonth()); //2 = march

const d2 = new Date();
console.log(d2.getMonth()); //11 = december

//you can use an array of names to return the month as a name:
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


let month = months[d.getMonth()];
console.log(month); //March

let month2 = months[d2.getMonth()];
console.log(month2); //December