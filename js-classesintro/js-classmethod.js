class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}
const myCar2 = new Car("Ford", 2014);

console.log("My car is " + myCar2.age() + " years old");
