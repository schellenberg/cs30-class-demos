// Connected Nodes OOP Demo

let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  //draw the lines first
  for (let point of points) {
    point.update();
    point.connectTo(points);
  }

  //draw the circles after, to keep the lines underneath
  for (let point of points) {
    point.display();
  }
}

function mousePressed() {
  let thePoint = new MovingPoint(mouseX, mouseY);
  points.push(thePoint);
}

class MovingPoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = color(random(255), random(255), random(255));
    this.radius = 15;
    this.xTime = random(1000);
    this.yTime = random(1000);
    this.deltaTime = 0.01;
    this.reach = 150;
  }

  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.radius*2);
  }

  update() {
    //move point
    let dx = noise(this.xTime);
    this.dx = map(dx, 0, 1, -5, 5);
    let dy = noise(this.yTime);
    this.dy = map(dy, 0, 1, -5, 5);

    this.x += this.dx;
    this.y += this.dy;

    this.xTime += this.deltaTime;
    this.yTime += this.deltaTime;

    //wrap around screen
    if (this.x < 0) {
      this.x += width;
    }
    if (this.x > width) {
      this.x -= width;
    }
    if (this.y < 0) {
      this.y += height;
    }
    if (this.y > height) {
      this.y -= height;
    }

    //adjust size based on mouse
    let mouseDistance = dist(this.x, this.y, mouseX, mouseY);
    if (mouseDistance < this.reach) {
      //make circle bigger
      let theSize = map(mouseDistance, 0, this.reach, 30, 15);
      this.radius = theSize;
    }
    else {
      //set circle to regular size
      this.radius = 15;
    }
  }

  connectTo(pointsArray) {
    for (let otherPoint of pointsArray) {
      if (this !== otherPoint) {
        if (dist(this.x, this.y, otherPoint.x, otherPoint.y) <
             this.reach) {
          stroke(this.color);
          line(this.x, this.y, otherPoint.x, otherPoint.y);
        }
      }
    }
  }
}