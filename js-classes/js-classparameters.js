// you can send parameters to Class methods
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(x) {
        return x - this.year;
    }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);
console.log("My car is " + myCar.age(year) + " years old.");    // my car is 8 years old