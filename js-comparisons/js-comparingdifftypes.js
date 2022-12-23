//comparing data of different types may give unexpected results
console.log(2 < 12);        //true
console.log(2 < "12");      //true
console.log(2 < "John");    //false
console.log(2 > "John");    //false
console.log(2 == "John");   //false
console.log("2" < "12");    //false
console.log("2" > "12");    //true
console.log("2" == "12");   //false

//to secure a proper result, variables should be converted to the proper type before comparison:
let voteable;
let age = 20;
age = Number(age);
if (isNaN(age)) {
    voteable = "Input is not a number";
} else {
    voteable = (age < 18) ? "Too young" : "Old enough";
}

console.log(voteable); //old enough