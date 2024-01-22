// you can send it as a parameter
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello " + x.name;
  }
}

const myCar = new Car("Ford");
console.log(Car.hello(myCar));
