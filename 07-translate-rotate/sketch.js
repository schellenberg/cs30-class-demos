// Translate/Rotate Demo

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  push(); //save the transformation matrix
  translate(100, 50);
  rotate(mouseY);
  rectMode(CENTER);
  rect(0, 0, 75, 25);
  pop(); //reset to last saved matrix

  rect(50, 200, 25, 200);
}
