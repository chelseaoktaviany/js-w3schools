function Car(brand, model, year, color) {
    this.carBrand = brand;
    this.carModel = model;
    this.carYear = year;
    this.carColor = color;
}

// create two cars objects
const myCar1 = new Car("Nissan", "180sx", 1994, "Black");
const myCar2 = new Car("Mitsubishi", "Lance Evo VIII", 2005, "White");

console.log("My main car color is " + myCar1.carColor + " and my second car color is " + myCar2.carColor); // my main car color is black and my second car color is white