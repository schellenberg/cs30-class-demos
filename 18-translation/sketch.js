// Translation and Rotation Demo

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(220);
  angleMode(DEGREES);
  
  push();
  translate(150, 150);
  rotate(mouseX);
  rectMode(CENTER);
  rect(0, 0, 50, 50);
  pop();
  
  ellipse(200, 75, 100, 50);
}