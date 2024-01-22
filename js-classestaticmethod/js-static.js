class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!";
  }
}

const myCar = new Car("Ford");

// calling hello on the class
console.log(Car.hello());
