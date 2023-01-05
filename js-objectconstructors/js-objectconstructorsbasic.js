function Car(brand, model, year, color) {
    this.carBrand = brand;
    this.carModel = model;
    this.carYear = year;
    this.carColor = color;
}

// creates a Car object
const myCar = new Car("Nissan", "180sx", 1994, "black");

// display an object
console.log("My car is " + myCar.carBrand + " " + myCar.carModel + " " + myCar.carYear + " " + myCar.carColor);
