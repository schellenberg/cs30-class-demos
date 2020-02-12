// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let fish;
let scalar = 0.25;

function preload() {
  fish = loadImage("assets/gear.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill("red");
  // rect(mouseX, mouseY, 75, 75);
  image(fish, mouseX, mouseY, scalar*fish.width, scalar*fish.height);
}

function mouseWheel(event) {
  if (event.delta > 0) {
    scalar *= 1.1;
  }
  else {
    scalar *= 0.9;
  }
}