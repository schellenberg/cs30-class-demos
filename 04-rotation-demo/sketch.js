// Rotation Demo

let x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  x = 0;
  y = height;
}

function draw() {
  background(220);

  translate(x, y);
  let theta = atan2(mouseY-y, mouseX-x);
  rotate(theta);
  fill("black");
  rectMode(CENTER);
  rect(0, 0, 200, 50);
}
