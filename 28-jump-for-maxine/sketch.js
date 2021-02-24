// Jump Demo for Maxine

let x, y, dx, dy, ax, ay;
let playerSize = 50;
let ground;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ground = height - playerSize;
  x = width/2;
  y = ground;
  dx = 0;
  dy = 0;
  ax = 0;
  ay = 0;
}

function draw() {
  background(220);
  movePlayer();
  displayPlayer();
}

function movePlayer() {
  //acceleration affects velocity
  dx += ax;
  dy += ay;

  //velocity affects location
  x += dx;
  y += dy;

  //gravity, if needed
  if (y < ground) {
    dy += 0.5;
  }
  else {
    y = ground;
    dy = 0;
  }

  //remove thrust from jump
  ay = 0;
}

function displayPlayer() {
  noStroke();
  fill("red");
  ellipse(x, y, playerSize*2, playerSize*2);
}

function keyPressed() {
  ay = -15;
}