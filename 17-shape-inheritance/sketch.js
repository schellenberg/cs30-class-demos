// Shape Inheritance OOP

let shapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 100; i++) {
    let choice = random(100);
    if (choice < 50) {
      let theColor = color(random(255), random(255), random(255));
      let aShape = new Circle(random(width), random(height), theColor, random(20, 50));
      shapes.push(aShape);
    }
    else {
      let theColor = color(random(255), random(255), random(255));
      let aShape = new Square(random(width), random(height), theColor, random(20, 50));
      shapes.push(aShape);
    }
  }
}

function draw() {
  background(220);

  for (let shape of shapes) {
    shape.move();
    shape.display();
  }
}

class Shape {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  display() {
    fill(this.color);
    noStroke();
  }

  move() {
    this.x += random(-2, 2);
    this.y += random(-2, 2);
  }
}

class Circle extends Shape {
  constructor(x, y, color, radius) {
    super(x, y, color);
    this.radius = radius;
  }

  display() {
    super.display();
    circle(this.x, this.y, this.radius*2);
  }
}

class Square extends Shape {
  constructor(x, y, color, size) {
    super(x, y, color);
    this.size = size;
  }

  display() {
    super.display();
    rectMode(CENTER);
    square(this.x, this.y, this.size);
  }
}