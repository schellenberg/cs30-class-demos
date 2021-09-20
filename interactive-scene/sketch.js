// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let theWidthOfSomeRectangle = 35;
let y = height/2;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  rect(mouseX, mouseY, theWidthOfSomeRectangle, 50);
  ellipse(100, y, 10, 10);
}
