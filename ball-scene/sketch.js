// Ball Scene

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let index = 0; index < 30; index++) {
    let newBall = {
      x: random(width),
      y: random(height),
      radius: random(10, 30),
      ballColor: color(random(255), random(255), random(255), random(255)),
      dx: random(5, 10),
      dy: random(5, 10),
    };
    ballArray.push(newBall);    
  }
}

function draw() {
  background(220);

  moveBall();
  displayBall();
}

function moveBall() {
  for (let theBall of ballArray) {
    theBall.x += theBall.dx;
    theBall.y += theBall.dy;
    theBall.dx = random(-5, 5);
    theBall.dy = random(-5, 5); 
  }
}

function displayBall() {
  for (let ball of ballArray) {
    noStroke();
    fill(ball.ballColor);
    circle(ball.x, ball.y, ball.radius*2);
  }
}
