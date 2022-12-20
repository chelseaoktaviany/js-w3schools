//an array declared with const has block scope
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[0]); //Saab
//here cars[0] is saab
{
    const cars = ["Toyota", "Volvo", "BMW"];
    console.log(cars[0]); //Toyota
    //here cars[0] is toyota
}
//here cars[0] is saab