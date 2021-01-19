// Bouncing Balls
// Array demo

let theBouncingBalls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  moveBall();
  displayBall();
}

function mousePressed() {
  let ball = {
    x: mouseX,
    y: mouseY,
    diameter: random(25, 100),
    dx: random(-5, 5),
    dy: random(-5, 5),
    theColor: color(random(255), random(255), random(255), random(255)),
  };
  theBouncingBalls.push(ball);
}

function moveBall() {
  for (let ball of theBouncingBalls) {
    ball.x += ball.dx;
    ball.y += ball.dy;
  
    //check for bounce
    if (ball.x + ball.diameter/2 >= width ||
        ball.x - ball.diameter/2 <= 0) {
      ball.dx *= -1;
    }
    if (ball.y + ball.diameter/2 >= height ||
       ball.y - ball.diameter/2 <= 0) {
      ball.dy *= -1;
    }
  }
}

function displayBall() {
  for (let i=0; i<theBouncingBalls.length; i++) {
    noStroke();
    fill(theBouncingBalls[i].theColor);
    ellipse(theBouncingBalls[i].x, theBouncingBalls[i].y, 
      theBouncingBalls[i].diameter, theBouncingBalls[i].diameter);
  }
}