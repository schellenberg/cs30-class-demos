// OOP Walker Demo

class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-3, 3), random(-3, 3));
    this.color = "red";
    this.speed = 5;
    this.size = 5;
  }

  display() {
    noStroke();
    fill(this.color);
    circle(this.pos.x, this.pos.y, this.size);
  }

  move() {
    this.vel.set(random(-3, 3), random(-3, 3));
    this.pos.add(this.vel);
  }
}

let kevin;
let wasi;

function setup() {
  createCanvas(windowWidth, windowHeight);
  kevin = new Walker(width/2, height/2);
  wasi = new Walker(200, 400);
  wasi.color = "blue";
}

function draw() {
  kevin.move();
  wasi.move();

  kevin.display();
  wasi.display();
}
