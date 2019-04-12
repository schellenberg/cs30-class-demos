// Walker OOP Demo

class Walker {
  constructor(x, y, someColor, someSpeed) {
    this.x = x;
    this.y = y;
    this.color = someColor;
    this.speed = someSpeed;
  }

  display() {
    fill(this.color);
    stroke(this.color);
    ellipse(this.x, this.y, 2, 2);
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

let theWalkers = [];
// let andrew;
// let kenny;
// let alina;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0; i<500; i++) {
    let someWalker = new Walker(random(width), random(height), color(random(255), random(255), random(255)), 5);
    theWalkers.push(someWalker);
  }
  // andrew = new Walker(width/2, height/2, "purple", 5);
  // kenny = new Walker(100, 100, "black", 5);
  // alina = new Walker(500, 400, "red", 10);
}

function draw() {
  for (let i=0; i<theWalkers.length; i++) {
    theWalkers[i].move();
    theWalkers[i].display();
  }

  // andrew.move();
  // kenny.move();
  // alina.move();

  // andrew.display();
  // kenny.display();
  // alina.display();
}
