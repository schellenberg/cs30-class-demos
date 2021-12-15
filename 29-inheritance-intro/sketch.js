// OOP Inheritance Demo

let car;

function setup() {
  createCanvas(windowWidth, windowHeight);
  car = new Car("Civic");
}

class Vehicle {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }
}

class Car extends Vehicle {
  constructor(name) {
    super(name, "car");
  }

  getName() {
    return "This car is a " + super.getName();
  }
}