// spaces and line breaks are not important. an object definition can span multiple lines:
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

console.log(person);    

// this example creates an empty js object, then adds 4 properties
const car = {};
car.brand = "Nissan";
car.modelName = "180sx";
car.year = "1994";
car.color = "Black";
car.transmission = "Automatic";

console.log(car);

let text = 
"My dream car is " + car.color + " " + car.brand 
+ " " + car.modelName + " " + car.year + ", with " + car.transmission + " transmission.";

console.log(text);