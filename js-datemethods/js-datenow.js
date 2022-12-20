//Date.now() returns the number of milliseconds since January 1, 1970
let ms = Date.now();
console.log(ms); //randomly


//calculate the number of years since 1970/01/01
const minute = 1000 * 60;
console.log(minute); //60000

const hour = minute * 60;
console.log(hour);   //3600000

const day = hour * 24;
console.log(day);    //86400000

const year = day * 365;
console.log(year);   // 31536000000

let years = Math.round(Date.now() / year);
console.log(years); //53