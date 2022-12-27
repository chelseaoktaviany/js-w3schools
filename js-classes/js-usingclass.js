class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

const myCar = new Car("Ford", 2014);

console.log("My fave car is " + myCar.name + " " + myCar.year); // My fave car is Ford 2014