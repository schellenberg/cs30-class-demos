// Fireworks OOP Demo

const PARTICLES_PER_CLICK = 100;

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
    this.diameter = 5;
    this.r = 255;
    this.g = 0;
    this.b = 0;
    this.opacity = 255; //255 is opaque, 0 is transparent
  }

  display() {
    noStroke();
    fill(this.r, this.g, this.b, this.opacity);
    circle(this.x, this.y, this.diameter);
  }

  update() {
    //move
    this.x += this.dx;
    this.y += this.dy;

    //fade away
    this.opacity--;
  }

  isDead() {
    return this.opacity <= 0;
  }
}

let theFireworks = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background('black');

  for (let firework of theFireworks) {
    if (firework.isDead()) {
      //remove it
      let index = theFireworks.indexOf(firework);
      theFireworks.splice(index, 1);
    }
    else {
      firework.update();
      firework.display();
    }
  }
}

function mousePressed() {
  for (let i = 0; i < PARTICLES_PER_CLICK; i++) {
    let someFirework = new Particle(mouseX, mouseY);
    theFireworks.push(someFirework);
  }
}