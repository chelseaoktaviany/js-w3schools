//the getTime() method returns the number of milliseconds since January 1, 1970
const d = new Date("1970-01-01");
let time = d.getTime();
console.log(time); //0


const d2 = new Date("2021-03-25");
let time2 = d2.getTime();
console.log(time2); //1616630400000

const d3 = new Date();
let time3 = d3.getTime();
console.log(time3); //randomly