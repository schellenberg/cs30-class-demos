// Button OOP

class Button {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = "black";
    this.hoverColor = "gray";
  }

  display() {
    if (this.isInside(mouseX, mouseY)) {
      fill(this.hoverColor);
    }
    else {
      fill(this.color);
    }
    rect(this.x, this.y, this.width, this.height);
  }

  isInside(x, y) {
    let leftSide = this.x;
    let rightSide = this.x + this.width;
    let topSide = this.y;
    let bottomSide = this.y + this.height;

    return x > leftSide && x < rightSide &&
           y > topSide && y < bottomSide;
  }
}

let buttonOne = new Button(200, 300, 150, 75);
let buttonTwo = new Button(200, 600, 150, 75);
let backgroundColor = "lightgrey";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(backgroundColor);
  buttonOne.display();
  buttonTwo.display();
}

function mousePressed() {
  if (buttonOne.isInside(mouseX, mouseY)) {
    backgroundColor = "red";
  }
  if (buttonTwo.isInside(mouseX, mouseY)) {
    backgroundColor = "blue";
  }
}