// Ball Jump Demo

let x, y;   //location
let dx, dy; //velocity
let ax, ay; //acceleration
let gravity = 0.1;
let radius = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height - radius;
  dx = 0;
  dy = 0;
  ax = 0;
  ay = 0;
}

function draw() {
  background("white");

  //apply physics
  dy += ay; //add acceleration to velocity
  y += dy;  //add velocity to location
  dy += gravity;

  //reset acceleration
  ay = 0;

  //display ball
  fill(0);
  ellipse(x, y, radius*2, radius*2);
}

function keyPressed() {
  if (key === " ") {
    ay = -5;
  }
}