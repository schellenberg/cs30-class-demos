// OOP Button

let bgButton;
let shapeButton;
let backgroundColor = "green";
let isShapeDisplayed = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgButton = new Button(100, 300, 600, 150, "red", "blue");
  shapeButton = new Button(100, 600, 600, 150, "yellow", "orange");
}

function draw() {
  background(backgroundColor);
  bgButton.display();
  shapeButton.display();

  if (isShapeDisplayed) {
    fill("black");
    circle(600, 200, 100);
  }
}

function mousePressed() {
  if (bgButton.isPointInButton(mouseX, mouseY)) {
    backgroundColor = "pink";
  }
  if (shapeButton.isPointInButton(mouseX, mouseY)) {
    isShapeDisplayed = !isShapeDisplayed;
  }
}

class Button {
  constructor(x, y, buttonWidth, buttonHeight, hoverColor, notHoverColor) {
    this.x = x;
    this.y = y;
    this.width = buttonWidth;
    this.height = buttonHeight;
    this.notHoverColor = notHoverColor;
    this.hoverColor = hoverColor;
  }

  display() {
    if (this.isPointInButton(mouseX, mouseY)) {
      fill(this.hoverColor);
    }
    else {
      fill(this.notHoverColor);
    }
    rect(this.x, this.y, this.width, this.height);
  }

  isPointInButton(x, y) {
    return x >= this.x && x <= this.x + this.width &&
           y >= this.y && y <= this.y + this.height;
  }
}