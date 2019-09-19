let nemo;
let scalar = 1;

function preload() {
  nemo = loadImage("assets/nemo.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  if (keyIsPressed) {
    if (keyCode === UP_ARROW) {
      scalar *= 1.02;
    }
    else if (keyCode === DOWN_ARROW) {
      scalar /= 1.02;
    }
  }

  imageMode(CENTER);
  image(nemo, mouseX, mouseY, nemo.width * scalar, nemo.height * scalar);
}
