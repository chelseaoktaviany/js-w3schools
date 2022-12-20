//the getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time:
const d = new Date();
let diff = d.getTimezoneOffset();
console.log(diff); //-420