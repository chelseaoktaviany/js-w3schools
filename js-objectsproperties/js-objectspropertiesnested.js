// values in an object can be another object:
myObj = {
    name:"John",
    age:30,
    cars: {
        car1:"Ford",
        car2:"BMW",
        car3:"Fiat"
    }
};

console.log(myObj);

// you can access nested objects using dot notation
console.log(myObj.cars.car2); // bmw

// or
console.log(myObj.cars["car2"]); // bmw

// or
console.log(myObj["cars"]["car2"]); // bmw

// or
let p1 = "cars";
let p2 = "car2";

console.log(myObj[p1][p2]); // bmw