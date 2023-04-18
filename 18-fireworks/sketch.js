// Fireworks OOP

class Spark {
  constructor(x, y, dx, dy, r, g, b) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.g = g;
    this.b = b;
    this.alpha = 255;
    this.size = 5;
    this.gravity = 0.05;
  }

  display() {
    noStroke();
    fill(this.r, this.g, this.b, this.alpha);
    circle(this.x, this.y, this.size);
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    this.alpha--; //fade away
    this.dy += this.gravity;
  }

  isDead() {
    return this.alpha <= 0;
  }
}

let fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background("black");
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].display();

    //remove if needed
    if (fireworks[i].isDead()) {
      fireworks.splice(i, 1);
    }
  }
}

function mousePressed() {
  let howMany = 100;
  let r = random(255);
  let g = random(255);
  let b = random(255);
  let angle = 0;
  for (let i = 0; i < howMany; i++) {
    spawnSpark(r, g, b, angle);
    angle += 360/howMany;
  }
}

function spawnSpark(r, g, b, angle) {
  let theSpark = new Spark(mouseX, mouseY, 
    cos(angle) + random(-0.2, 0.2), sin(angle) + random(-0.2, 0.2),
    r, g, b);
  fireworks.push(theSpark);
}