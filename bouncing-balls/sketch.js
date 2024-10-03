// Bouncing Balls Demo
// Oct 3, 2024

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  for (let theBall of ballArray) {
    //move ball
    theBall.x += theBall.dx;
    theBall.y += theBall.dy;
  
    //bounce if needed
    if (theBall.x > width - theBall.radius || theBall.x < 0 + theBall.radius) {
      theBall.dx *= -1;
    }
    if (theBall.y > height - theBall.radius || theBall.y < 0 + theBall.radius) {
      theBall.dy *= -1;
    }
  
    //show ball
    noStroke();
    fill(theBall.red, theBall.green, theBall.blue);
    circle(theBall.x, theBall.y, theBall.radius*2);
  }
}

function mousePressed() {
  spawnBall(mouseX, mouseY);
}

function spawnBall(theX, theY) {
  let theBall = {
    x: theX,
    y: theY,
    radius: random(30, 60),
    dx: random(-5, 5),
    dy: random(-5, 5),
    red: random(255),
    green: random(255),
    blue: random(255),
  };

  ballArray.push(theBall);
}