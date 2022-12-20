//JavaScript ISO Dates
/**
 * ISO 8601 is the international standard for the representation of dates and times
 * 
 *  The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format
 */
const d = new Date("2015-03-25");
console.log(d); //Wed Mar 25 2015 07:00:00 GMT+0700 (Western Indonesia Time)


//ISO Dates (Year and Month)
//ISO dates can be written without specifying the day (YYYY-MM)
const d2 = new Date("2015-03");
console.log(d2); //Sun Mar 01 2015 07:00:00 GMT+0700 (Western Indonesia Time)

//ISO Dates (Only Year)
//ISO dates can be written without month and day (YYYY):
const d3 = new Date("2015");
console.log(d3); //Thu Jan 01 2015 07:00:00 GMT+0700 (Western Indonesia Time)

//ISO Dates (Date-Time)
//ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ)
const d4 = new Date("2015-03-25T12:00:00Z");
console.log(d4); //Wed Mar 25 2015 19:00:00 GMT+0700 (Western Indonesia Time)

//if you want to modify the time relative to UTC, remove the Z and add +HH::MM or -HH:MM instead:
const d5 = new Date("2015-03-25T12:00:00-06:30");
console.log(d5); //Thu Mar 26 2015 01:30:00 GMT+0700 (Western Indonesia Time)