// Square Moving Around Edge of Screen

let x = 0;
let y = 0;
let speed = 5;
let size = 50;
let state = "right";

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  move();
  display();
}

function move() {
  if (state === 'right') {
    x += speed;
    if (x >= width - size) {
      state = 'down';
    }
  }
  else if (state === 'down') {
    y += speed;
    if (y >= height - size) {
      state = 'left';
    }
  }
  else if (state === 'left') {
    x -= speed;
    if (x <= 0) {
      state = 'up';
    }
  }
  else if (state === 'up') {
    y -= speed;
    if (y <= 0) {
      state = 'right';
    }
  }
}

function display() {
  fill("black");
  square(x, y, size);
}
