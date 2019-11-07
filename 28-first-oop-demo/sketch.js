// OOP Walker Demo

let george;
let jenna;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  george = new Walker(width/2, height/2);
  jenna = new Walker(300, 200);
}

function draw() {
  george.move();
  jenna.move();

  george.display();
  jenna.display();
}

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.fillColor = color(random(255), random(255), random(255));
    this.stepSize = 6;
    this.radius = 3;
  }

  display() {
    fill(this.fillColor);
    noStroke();
    circle(this.x, this.y, this.radius * 2);
  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      //up
      this.y -= this.stepSize;
    }
    else if (choice < 50) {
      //down
      this.y += this.stepSize;
    }
    else if (choice < 75) {
      //left
      this.x -= this.stepSize;
    }
    else {
      //right
      this.x += this.stepSize;
    }
  }
}