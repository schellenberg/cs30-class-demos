let x, y;
let dx, dy;
let radius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  dx = random(3, 10);
  dy = random(3, 10);
  radius = 25;
}

function draw() {
  background(0);
  moveBall();
  bounceBall();
  displayBall();
}

function moveBall() {
  // move the ball
  x += dx;
  y += dy;
}

function bounceBall() {
  // check for bounce
  if (x + radius >= width || x - radius <= 0) {
    dx = -1 * dx;
  }
  if (y + radius >= height || y - radius <= 0) {
    dy = -1 * dy;
  }
}

function displayBall() {
  // display the ball
  ellipse(x, y, radius*2, radius*2);
}