// Ball OOP Demo

let theBall;

function setup() {
  createCanvas(windowWidth, windowHeight);
  theBall = new Ball();
}

function draw() {
  background(220);
  
  theBall.move();
  theBall.display();
}

class Ball {
  constructor() {
    this.radius = random(20, 50);
    this.x = random(this.radius, width-this.radius);
    this.y = random(this.radius, height-this.radius);
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


  }
}