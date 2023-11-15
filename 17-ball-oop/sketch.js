// Ball OOP Demo

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = random(15, 30);
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;

    //check top/bottom for bounce
    if (this.y - this.radius < 0 || 
        this.y + this.radius > height) {
      this.dy *= -1;
    }

    //check left/right for bounce
    if (this.x - this.radius < 0 ||
        this.x + this.radius > width) {
      this.dx *= -1;
    }

  }

  display() {
    fill(this.r, this.g, this.b);
    circle(this.x, this.y, this.radius*2);
  }
}

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  let theBall = new Ball(width/2, height/2);
  ballArray.push(theBall);
}

function draw() {
  background(220);
  for (let someBall of ballArray) {
    someBall.move();
    someBall.display();
  }
}

function mousePressed() {
  let theBall = new Ball(mouseX, mouseY);
  ballArray.push(theBall);
}
