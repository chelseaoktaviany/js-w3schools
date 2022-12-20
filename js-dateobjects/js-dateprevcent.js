//one or two digits years will be interpreted as 19xx
const d = new Date(99, 11, 24);
console.log(d); //Fri Dec 24 1999 00:00:00 GMT+0700 (Western Indonesia Time)

const d2 = new Date(9, 11, 24);
console.log(d2); //Fri Dec 24 1909 00:00:00 GMT+0707 (Western Indonesia Time)