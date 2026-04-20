// Connected Nodes OOP Demo

let nodes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  //draw the lines first
  for (let node of nodes) {
    node.update();
    node.connectTo(nodes);
  }

  //draw the circles overtop of the lines
  for (let node of nodes) {
    node.display();
  }
}

function mousePressed() {
  let somePoint = new MovingPoint(mouseX, mouseY);
  nodes.push(somePoint);
}

class MovingPoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 15;
    this.xTime = random(1000);
    this.yTime = random(1000);
    this.color = color(random(255), random(255), random(255));
    this.speed = 5;
    this.deltaTime = 0.05;
    this.reach = 200;
    this.maxRadius = 50;
    this.minRadius = 15;
  }

  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.radius*2);
  }

  update() { 
    this.move();
    this.wrapAroundScreen();
    this.adjustSizeBasedOnMouse();
  }

  adjustSizeBasedOnMouse() {
    let mouseDistance = dist(mouseX, mouseY, this.x, this.y);
    if (mouseDistance < this.reach) {
      let theSize = map(mouseDistance, 0, this.reach, this.maxRadius, this.minRadius);
      this.radius = theSize;
    }
    else {
      this.radius = this.minRadius;
    }
  }

  connectTo(nodesArray) {
    for (let otherNode of nodesArray) {
      if (this !== otherNode) {
        let distanceApart = dist(this.x, this.y, otherNode.x, otherNode.y);
        if (distanceApart < this.reach) {
          stroke(this.color);
          line(this.x, this.y, otherNode.x, otherNode.y);
        }
      }
    }
  }

  wrapAroundScreen() {
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
  }

  move() {
    let dx = noise(this.xTime);
    let dy = noise(this.yTime);

    //scale from 0-1 to movement speed
    dx = map(dx, 0, 1, -this.speed, this.speed);
    dy = map(dy, 0, 1, -this.speed, this.speed);

    //move point
    this.x += dx;
    this.y += dy;

    //move on time axis
    this.xTime += this.deltaTime;
    this.yTime += this.deltaTime;
  }
}