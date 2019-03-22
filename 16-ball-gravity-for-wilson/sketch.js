
let yLocation, yVelocity, yAcceleration;
let x, radius;
let gravity, ground;

function setup() {
  createCanvas(windowWidth, windowHeight);
  radius = 25;
  ground = height - radius;
  x = width/2;
  gravity = 0.1;
  yLocation = ground;
  yVelocity = 0;
  yAcceleration = 0;
}

function draw() {
  background(220);

  // move ball
  yVelocity += yAcceleration;
  yLocation += yVelocity;

  // physics
  yAcceleration = 0;
  yVelocity += gravity;
  if (yLocation > ground) {
    yLocation = ground;
    yVelocity = 0;
  }

  // display ball
  fill(0);
  ellipse(x, yLocation, radius*2, radius*2);
}


function keyPressed() {
  if (key === " ") {
    yAcceleration = -5;
  }
}