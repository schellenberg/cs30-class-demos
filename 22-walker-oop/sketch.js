// Walker OOP Demo

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = "red";
    this.speed = 5;
    this.radius = 1;
  }

  display() {
    stroke(this.color);
    fill(this.color);
    circle(this.x, this.y, this.radius*2);
  }

  move() {
    let choice = random(100);

    if (choice < 25) {
      //up
      this.y -= this.speed;
    }
    else if (choice < 50) {
      //down
      this.y += this.speed;
    }
    else if (choice < 75) {
      //right
      this.x += this.speed;
    }
    else {
      //left
      this.x -= this.speed;
    }

  }
}

let michael;

function setup() {
  createCanvas(windowWidth, windowHeight);
  michael = new Walker(width/2, height/2);
}

function draw() {
  michael.move();
  michael.display();
}
