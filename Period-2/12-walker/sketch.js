// Walker OOP Demo

class Walker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 2;
    this.color = "red";
    this.speed = 5;
  }

  display() {
    fill(this.color);
    stroke(this.color);
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



let theWalkers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  for (let someWalker of theWalkers) {
    someWalker.move();
    someWalker.display();
  }
}

function mousePressed() {
  let theGuy = new Walker(mouseX, mouseY);
  theGuy.color = color(random(255), random(255), random(255));
  theWalkers.push(theGuy);
}



//version with only two Walkers

// let tyler;
// let audrey;

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   tyler = new Walker(width/2, height/2);
//   audrey = new Walker(300, 500);
//   audrey.color = "blue";
// }

// function draw() {
//   tyler.move();
//   audrey.move();

//   tyler.display();
//   audrey.display();
// }
