/**
 * 
 * The parseInt() Method
 * parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
 * 
 */
console.log(parseInt("-10"));       //-10
console.log(parseInt("-10.33"));    //-10
console.log(parseInt("10"));        //10
console.log(parseInt("10.33"));     //10
console.log(parseInt("10 20 30"));  //10
console.log(parseInt("10 years"));  //10
console.log(parseInt("years 10"));  //NaN