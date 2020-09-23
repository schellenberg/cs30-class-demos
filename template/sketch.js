// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let shouldIShowTheEllipse = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  let something = true;
  
  if (shouldIShowTheEllipse) {
    fill("red");
    ellipse(mouseX, mouseY, 250, 250);
  }
}

function mousePressed() {
  shouldIShowTheEllipse = true;
}