// Bullet class demo

let player;

function setup() {
  createCanvas(windowWidth, windowHeight);
  player = new Character(width/2, height-50);
}

function draw() {
  background(220);

  player.update();
  player.display();
}

function keyPressed() {
  if (key === " ") {
    player.spawnBullet();
  }
  if (key === "a" || key === "d") {
    player.handleKeys();
  } 
}


class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 25;
    this.bulletArray = [];
  }

  display() {
    fill("black");
    rect(this.x, this.y, this.size, this.size);
  }

  update() {
    //player movement

    //bullet movement
    for (let i=0; i<this.bulletArray.length; i++) {
      this.bulletArray[i].move();
      this.bulletArray[i].display();
    }
  }

  spawnBullet() {
    this.bulletArray.push(new Bullet(this.x + this.size/2, this.y));
  }

  handleKeys() {
    if (key === "a") {
      this.x -= 10;
    }
    if (key === "d") {
      this.x += 10;
    }
  }

}

class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dy = -5;
  }

  move() {
    this.y += this.dy;
  }

  display() {
    fill("red");
    noStroke();
    circle(this.x, this.y, 5);
  }
}