// Walker OOP Demo

class Walker {
  constructor(x, y, theColor) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.diameter = 5;
    this.color = theColor;
  }

  display() {
    fill(this.color);
    circle(this.x, this.y, this.diameter);
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
      //left
      this.x -= this.speed;
    }
    else {
      //right
      this.x += this.speed;
    }
  }
}

// let newell;
// let theo;
let theWalkers = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
  // newell = new Walker(width/2, height/2);
  // theo = new Walker(300, 400);
  // theo.color = "blue";
  noStroke();
}

function draw() {
  // newell.move();
  // theo.move();

  // newell.display();
  // theo.display();

  for (let theWalker of theWalkers) {
    theWalker.move();
    theWalker.display();
  }
}

function mousePressed() {
  let theColor = color(random(255), random(255), random(255));
  let someWalker = new Walker(mouseX, mouseY, theColor);
  theWalkers.push(someWalker);
}
