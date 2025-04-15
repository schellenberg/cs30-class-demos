// Connected Nodes OOP Demo

let nodes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  let somePoint = new MovingPoint(width/2, height/2);
  nodes.push(somePoint);
}

function draw() {
  background("white");

  for (let node of nodes) {
    node.update();
    node.display();
  }
}

class MovingPoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.radius = 15;
    this.xTime = random(1000);
    this.yTime = random(1000);
    this.deltaTime = 0.01;
    this.color = color(random(255), random(255), random(255));
  }

  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.radius * 2);
  } 

  update() {
    this.move();
  }

  move() {
    //perlin noise movement
    let dx = noise(this.xTime);
    let dy = noise(this.yTime);

    //scale from 0-1 to my movement speed
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