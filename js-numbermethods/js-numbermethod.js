/**
 * The Number() Method
 * The Number() method can be used to convert JavaScript variables to numbers:
 */
console.log(Number(true));      //1
console.log(Number(false));     //0
console.log(Number("10"));      //10
console.log(Number("  10"));    //10
console.log(Number("10  "));    //10
console.log(Number("10.33"));   //10.33
console.log(Number("10,33"));   //NaN
console.log(Number("10 33"));   //NaN
console.log(Number("John"));    //NaN

//converting Number() method used on dates
console.log(Number(new Date("1970-01-01"))); //0

//the number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000
console.log(Number(new Date("1970-01-02"))); //86400000 ms

console.log(Number(new Date("2017-09-30"))); //1506729600000 ms