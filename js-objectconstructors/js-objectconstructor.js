// adding a new property to an existing object is easy
function Car(brand, model, year, color) {
    this.carBrand = brand;
    this.carModel = model;
    this.carYear = year;
    this.carColor = color;
}

// create 2 cars objects
const myCar1 = new Car("Nissan", "180sx", 1994, "Black");
const myCar2 = new Car("Mitsubishi", "Lance Evo VIII", 2005, "White");

// add transmission to first object
myCar1.transmission = "Automatic";

// display transmission
console.log("My main car transmission: " + myCar1.transmission); // my main car transmission: automatic