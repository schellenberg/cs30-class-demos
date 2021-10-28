// Ball OOP Demo

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0; i<10; i++) {
    let x = random(100, width-100);
    let y = random(100, height-100);
    let theBall = new Ball(x, y);
    ballArray.push(theBall);
  }
}

function draw() {
  background(220);

  // for (let theBall of ballArray) {
  //   theBall.move();
  //   theBall.display();
  // }

  for (let i=0; i<ballArray.length; i++) {
    ballArray[i].move();
    ballArray[i].display();
  }
}

class Ball {
  constructor(x, y) {
    this.radius = random(20, 50);
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.theColor = color(random(255), random(255), random(255), random(255));
  }

  display() {
    noStroke();
    fill(this.theColor);
    circle(this.x, this.y, this.radius*2);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;

    //check if need to bounce
    if (this.x + this.radius >= width || this.x - this.radius <= 0) {
      this.dx *= -1;
    }
    if (this.y + this.radius >= height || this.y - this.radius <= 0) {
      this.dy *= -1;
    }
  }
}