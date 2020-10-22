// Objects interacting demo for Josh

let theBox;

function setup() {
  createCanvas(windowWidth, windowHeight);
  theBox = new Tower(100, 400, 100, 50);
}

function draw() {
  background(220);
  theBox.update();
  theBox.display();
}

function mousePressed() {
  theBox.checkIfClicked();
}

function mouseReleased() {
  theBox.endClick();
}

class Tower {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.selected = false;
  }

  display() { 
    fill("red");
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }

  update() {
    if (this.selected) {
      this.x = mouseX - this.w/2;
      this.y = mouseY - this.h/2;
    }
  }

  checkIfClicked() {
    if (mouseX > this.x && mouseX < this.x + this.w &&
        mouseY > this.y && mouseY < this.y + this.h) {
          this.selected = true;
        }
  }

  endClick() {
    this.selected = false;
  }
}