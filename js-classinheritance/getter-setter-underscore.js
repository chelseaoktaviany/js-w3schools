// you can use the underscore character to separate the getter/setter from the actual property:
class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

const myCar = new Car("ford");
console.log(myCar.carname);
