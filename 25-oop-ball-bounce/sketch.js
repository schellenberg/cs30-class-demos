// OOP Colliding Circles

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = random(25, 100);
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.theColor = color(random(255), random(255), random(255), random(255));
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;

    //left-right edges
    if (this.x + this.radius > width ||
      this.x - this.radius < 0) {
      this.dx *= -1;
    }

    //top-bottom edges
    if (this.y + this.radius > height || 
      this.y - this.radius < 0) {
      this.dy *= -1;
    }
  }

  display() {
    fill(this.theColor);
    noStroke();
    circle(this.x, this.y, this.radius*2);
  }

  collisionCheck(other) {
    let distanceBetween = dist(this.x, this.y, other.x, other.y);
    let radiiSum = this.radius + other.radius;
    if (distanceBetween < radiiSum) {
      //swap the speeds
      let tempDx = this.dx;
      let tempDy = this.dy;
      this.dx = other.dx;
      this.dy = other.dy;
      other.dx = tempDx;
      other.dy = tempDy;
    }
  }
}


let theCircles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  theCircles.push(spawnBall(100, 100));
}

function draw() {
  background(220);

}
  

function mousePressed() {
  theCircles.push(spawnBall(mouseX, mouseY));
}
