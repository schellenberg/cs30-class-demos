// Translate/Rotate Demo

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(220);

  push(); //saves the state of the transformation matrix
  translate(300, 300);  //moves the origin
  rotate(mouseX);
  square(0, 0, 200);
  pop();

  rect(600, 100, 100, 100);
}
