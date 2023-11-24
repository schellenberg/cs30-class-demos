// Inheritance OOP Demo

let theParticle;
let someConfetti;

function setup() {
  createCanvas(windowWidth, windowHeight);
  theParticle = new Particle(width/2, height/2);
  someConfetti = new Confetti(width/2, height/2);
}

function draw() {
  background("black");
  theParticle.update();
  theParticle.display();
  someConfetti.update();
  someConfetti.display();
}


class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 30;
  }

  update() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  display() {
    circle(this.x, this.y, this.size);
  }
}

class Confetti extends Particle {
  constructor(x, y) {
    super(x, y);
  }

  update() {
    super.update();
    this.size += random(-3, 3);
  }

  display() {
    square(this.x, this.y, this.size);
  }
}