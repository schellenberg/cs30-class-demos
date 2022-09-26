// Square Around Edge
// Schellenberg
// Sept 26, 2022

let x, y, squareSize, speed, state;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = 0;
  squareSize = 150;
  speed = 10;
  state = "right";
}

function draw() {
  background(220);
  moveSquare();
  drawSquare();
}

function moveSquare() {
  if (state === "right") {
    x += speed;
    if (x + squareSize >= width) {
      x = width - squareSize; //don't fall off edge
      state = "down";
    }
  }

  if (state === "down") {
    y += speed;
    if (y + squareSize >= height) {
      y = height - squareSize; //don't fall off edge
      state = "left";
    }
  }

  if (state === "left") {
    x -= speed;
    if (x <= 0) {
      x = 0; //don't fall off edge
      state = "up";
    }
  }

  if (state === "up") {
    y -= speed;
    if (y <= 0) {
      y = 0; //don't fall off edge
      state = "right";
    }
  }
}

function drawSquare() {
  fill("black");
  square(x, y, squareSize);
}