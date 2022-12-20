//new Date(milliseconds) creates a new date object as milliseconds plus zero time:

//01 January 1970 plus 100 000 000 000 milliseconds is:
const d = new Date(100000000000);
console.log(d); //Sat Mar 03 1973 16:46:40 GMT+0700 (Western Indonesia Time)

//January 01 1970 minus 100 000 000 000 milliseconds is:
const d2 = new Date(-100000000000);
console.log(d2); //Mon Oct 31 1966 21:13:20 GMT+0700 (Western Indonesia Time)

//January 01 1970 plus 24 hours is:
const d3 = new Date(86400000);
console.log(d3); //Fri Jan 02 1970 07:00:00 GMT+0700 (Western Indonesia Time)

//01 January 1970 plus 0 milliseconds is:
const d4 = new Date(0);
console.log(d4); //Thu Jan 01 1970
