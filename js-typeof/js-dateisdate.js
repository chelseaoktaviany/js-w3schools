// you can check the constructor property to find out if an object is a Date (contains the word "Date"):
const myDate = new Date();
console.log(isDate(myDate));    // returns true

// function isDate(myDate) {
//     return myDate.constructor.toString().indexOf("Date") > -1;
// }

// or simpler
function isDate(myDate) {
    return myDate.constructor === Date;
}