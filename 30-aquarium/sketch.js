// Aquarium

let fish;
let clownfishImg;

function preload() {
  clownfishImg = loadImage("assets/clownfish.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fish = new Creature(random(width), random(height), 30);
}

function draw() {
  background(220);
  fish.update();
  fish.display();
}

class Creature {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  update() {
    this.x += 4;
  }

  display() {
    fill("green");
    circle(this.x, this.y, this.size);
  }
}