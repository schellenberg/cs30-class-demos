// OOP Button

let bgButton;

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgButton = new Button(100, 300, 600, 150);
}

function draw() {
  background(220);
  bgButton.display();
}

class Button {
  constructor(x, y, buttonWidth, buttonHeight) {
    this.x = x;
    this.y = y;
    this.width = buttonWidth;
    this.height = buttonHeight;
  }

  display() {
    rect(this.x, this.y, this.width, this.height);
  }
}