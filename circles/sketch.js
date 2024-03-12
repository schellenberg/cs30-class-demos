// Arrays and Object Notation
// Circles demo

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  spawnBall(width/2, height/2);
}

function draw() {
  background(220);
  moveBalls();
  displayBalls();
}

function mousePressed() {
  spawnBall(mouseX, mouseY);
}

function moveBalls() {
  for (let ball of ballArray) {
    ball.x += ball.dx;
    ball.y += ball.dy;
  
    //teleport across screen if needed...
    if (ball.x < 0) {
      ball.x = width;
    }
    else if (ball.x > width) {
      ball.x = 0;
    }
  
    if (ball.y < 0) {
      ball.y = height;
    }
    else if (ball.y > height) {
      ball.y = 0;
    }
  }
}

function displayBalls() {
  for (let ball of ballArray) {
    fill(ball.color);
    circle(ball.x, ball.y, ball.radius * 2);
  }
}

function spawnBall(initialX, initialY) {
  let ball = {
    x: initialX,
    y: initialY,
    radius: random(15, 30),
    color: color(random(255), random(255), random(255)),
    dx: random(-5, 5),
    dy: random(-5, 5),
  };
  ballArray.push(ball);
}