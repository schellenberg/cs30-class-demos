// Dog OOP Demo

class Dog {
  constructor(name, color, breed, age, size) {
    this.name = name;
    this.color = color;
    this.breed = breed;
    this.age = age;
    this.size = size;
  }
  
  bark() {
    console.log("Arf! says " + this.name);
  }
}

let spot = new Dog("Spot", "black", "poodle", 3, "smallish");
let rover = new Dog("Rover", "white", "German Shepherd", 5, "big");

function setup() {
  createCanvas(windowWidth, windowHeight);
  spot.bark();
  rover.bark();
}

function draw() {
  background(220);
}

