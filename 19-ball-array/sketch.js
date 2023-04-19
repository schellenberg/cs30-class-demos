// Ball Array OOP

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.radius = random(10, 40);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.alpha = random(100, 255);
  }

  display() {
    noStroke();
    fill(this.r, this.g, this.b, this.alpha);
    circle(this.x, this.y, this.radius*2);
  }

  update() {
    //move
    this.x += this.dx;
    this.y += this.dy;

    //bounce off walls if required
    //left and right walls
    if (this.x - this.radius <= 0 || this.x + this.radius >= width) {
      this.dx *= -1;
    }
    //top and bottom walls
    if (this.y - this.radius <= 0 || this.y + this.radius >= height) {
      this.dy *= -1;
    }
  }

  collisionCheck(otherBall) {
    let distanceApart = dist(this.x, this.y, otherBall.x, otherBall.y);
    let radiiSum = this.radius + otherBall.radius;

    if (distanceApart < radiiSum) {
      //collision!!!
      // this.r = 255;
      // this.g = 0;
      // this.b = 0;

      //method 1
      // this.dx *= -1;
      // this.dy *= -1;

      //method 2
      let tempX = this.dx;
      let tempY = this.dy;
      this.dx = otherBall.dx;
      this.dy = otherBall.dy;
      otherBall.dx = tempX;
      otherBall.dy = tempY;
    }
  }
}

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("white");
  for (let someBall of ballArray) {
    someBall.update();
    for (let otherBall of ballArray) {
      if (someBall !== otherBall) {
        someBall.collisionCheck(otherBall);
      }
    }
    someBall.display();
  }
}

function mousePressed() {
  let theBall = new Ball(mouseX, mouseY);
  ballArray.push(theBall);
}