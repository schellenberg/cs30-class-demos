// OOP Bullet

let theBullets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  for (let i = 0; i < theBullets.length; i++) {
    theBullets[i].move();
    theBullets[i].display();
  }

  // If you want to spam the screen when holding down the mouse, use this...

  // if (mouseIsPressed) {
  //   let myBullet = new Bullet(mouseX, mouseY, random(-3,3), random(-3, 3), 10);
  //   theBullets.push(myBullet);
  // }

}

function mousePressed() {
  let myBullet = new Bullet(mouseX, mouseY, random(-3,3), random(-3, 3), 10);
  theBullets.push(myBullet);
}

class Bullet {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
  }

  display() {
    fill(0);
    circle(this.x, this.y, this.radius * 2);
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }
}