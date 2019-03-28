// Array of Bouncing Balls Demo

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  for (let i = 0; i < ballArray.length; i++) {
    // move ball
    ballArray[i].x += ballArray[i].dx;
    ballArray[i].y += ballArray[i].dy;

    // display ball
    fill(ballArray[i].color);
    noStroke();
    ellipse(ballArray[i].x, ballArray[i].y, ballArray[i].radius*2, ballArray[i].radius*2);
  }
}

function mousePressed() {
  for (let i = 0; i < 100; i++) {
    let newBall = {
      x: mouseX,
      y: mouseY,
      dx: random(-5, 5),
      dy: random(-5, 5),
      radius: random(10, 50),
      color: color(random(255), random(255), random(255), random(255)),
    };
    ballArray.push(newBall);
  }
}