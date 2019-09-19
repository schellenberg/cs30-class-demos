// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let redAmount = 0;
let redChangeAmount = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  fill(redAmount, 0, 255);
  noStroke();
  ellipse(mouseX, mouseY, 100, 100);

  redAmount += redChangeAmount;

  if (redAmount >= 255) {
    redChangeAmount *= -1;
  }
  if (redAmount <= 0) {
    redChangeAmount *= -1;
  }

  console.log(redAmount);
}
