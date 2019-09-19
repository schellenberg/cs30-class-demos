// Line Art Demo
// Dan Schellenberg
// Sept 9, 2019

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  line(mouseX, mouseY, pmouseX, pmouseY);
}
