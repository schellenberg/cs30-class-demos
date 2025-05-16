// OOP Inheritance Demo

let theShapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 10; i++) {
    let someColor = color(random(255), random(255), random(255));
    let x = random(width);
    let y = random(height);

    let choice = random(100);
    if (choice < 50) {
      let someShape = new Shape(x, y, someColor);
      theShapes.push(someShape);
    }
    else {
      let radius = random(20, 50);
      let someCircle = new Circle(x, y, someColor, radius);
      theShapes.push(someCircle);
    }
  }
}

function draw() {
  background(220);
  for (let theShape of theShapes) {
    theShape.display();
  }
}

class Shape {
  constructor(x, y, color) {
    this.x = x;
    this.y = y; 
    this.color = color;
  }

  display() {
    //placeholder display function
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, 30, 60);
  }
}

class Circle extends Shape {
  constructor(x, y, color, radius) {
    super(x, y, color);
    this.radius = radius;
  }

  display() {
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.radius * 2);
  }
}

