// unlike function, and other JS declarations, class declarations are not hoisted.
// that means that you must declare a class before you can use it:
class Car {
  constructor(brand) {
    this.carname = brand;
  }
}

// now you can use the class:
const myCar = new Car("ford");
