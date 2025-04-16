// Translate/Rotate Demo

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(220);

  push(); //save the transformation matrix
  translate(width/2, height/2);
  rotate(mouseX);
  fill("red");
  rect(0, 0, 200, 75);
  pop(); //reset to the last pushed settings of the matrix

  fill("green");
  rect(200, height-100, width*2, 200);
}
