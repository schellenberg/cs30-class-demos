// basic gravity jumping demo for Donovan
// Dan Schellenberg
// Oct 17, 2019

let x, y;
let radius;
let xVelocity, yVelocity;
let xAcceleration, yAcceration;
let gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  radius = 50;
  x = width/2;
  y = height - radius;
  yAcceration = 0;
  yVelocity = 0;
  gravity = 0.5;
}

function draw() {
  background(255);

  // move ball
  yVelocity += yAcceration;
  yVelocity += gravity;
  y += yVelocity;

  yAcceration = 0;

  // handle hitting the ground
  if (y + radius >= height) {
    y = height - radius - 1; //just above the ground
    yVelocity = 0;
  }

  //display ball
  ellipse(x, y, radius*2, radius*2);
}

function keyPressed() {
  yAcceration = -20;
}
