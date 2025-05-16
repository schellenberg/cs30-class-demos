// OOP Inheritance Demo

let theShapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 10; i++) {
    let someColor = color(random(255), random(255), random(255));
    let x = random(width);
    let y = random(height);

    let choice = random(100);
    if (choice < 25) {
      let someShape = new Shape(x, y, someColor);
      theShapes.push(someShape);
    }
    else if (choice < 50) {
      let radius = random(20, 50);
      let someCircle = new Circle(x, y, someColor, radius);
      theShapes.push(someCircle);
    }
    else if (choice < 75) {
      let size = random(20, 50);
      let someSquare = new Square(x, y, someColor, size);
      theShapes.push(someSquare);
    }
    else {
      let radius = random(20, 50);
      let speed = random(2, 10);
      let someCircle = new MovingCircle(x, y, someColor, radius, speed);
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

class Square extends Shape {
  constructor(x, y, color, size) {
    super(x, y, color);
    this.size = size;
  }

  display() { 
    noStroke();
    fill(this.color);
    rectMode(CENTER);
    rect(this.x, this.y, this.size, this.size);
  }
}

class MovingCircle extends Circle {
  constructor(x, y, color, radius, speed) {
    super(x, y, color, radius);
    this.speed = speed;
  }

  update() {
    this.x += this.speed;

    //teleport back to left side
    if (this.x > width) {
      this.x = -this.radius;
    }
  }

  display() {
    this.update();
    super.display();
  }
}