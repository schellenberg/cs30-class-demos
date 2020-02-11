// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let fish;

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
  image(fish, mouseX, mouseY);
}
