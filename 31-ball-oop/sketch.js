// Ball OOP demo


let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  ballArray.push(new Ball(width/2, height/2, random(-15, 15), random(-15, 15), 25));
}

function draw() {
  background(255);
  for (let i = 0; i < ballArray.length; i++) {
    ballArray[i].move();

    //collision check
    for (let j = 0; j <ballArray.length; j++) {
      if (i !== j && ballArray[i].checkForCollision(ballArray[j]) ) {
        // ballArray[i].fillColor = color(255, 0, 0);
        // ballArray[j].fillColor = color(255, 0, 0);
        
        let tempDx = ballArray[i].dx;
        let tempDy = ballArray[i].dy;
        ballArray[i].dx = ballArray[j].dx;
        ballArray[i].dy = ballArray[j].dy;
        ballArray[j].dx = tempDx;
        ballArray[j].dy = tempDy;
      }
    }

    ballArray[i].display();
  }
}

function keyPressed() {
  if (key === " ") {
    ballArray.push(new Ball(mouseX, mouseY, random(-15, 15), random(-15, 15), 25));
  }
}

function windowResized() {
  setup();
}

class Ball {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.fillColor = color(0);
  }

  move() {
    // move
    this.x += this.dx;
    this.y += this.dy;

    // bounce if needed
    if (this.x > width - this.radius/2 || this.x < 0 + this.radius/2) {
      this.dx *= -1;
    }
  
    if (this.y > height - this.radius/2 || this.y < 0 + this.radius/2) {
      this.dy *= -1;
    }
  }

  display() {
    fill(this.fillColor);
    circle(this.x, this.y, this.radius * 2);
  }

  checkForCollision(anotherBall) {
    let distanceBetweenCenters = dist(this.x, this.y, anotherBall.x, anotherBall.y);
    let sumOfRadii = this.radius + anotherBall.radius;
    if (distanceBetweenCenters < sumOfRadii) {
      return true;
    }
    else {
      return false;
    }
  }
}