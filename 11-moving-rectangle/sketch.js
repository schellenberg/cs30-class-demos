// Moving Rectangle
// State Variables Demo

let x, y;
let squareSize;
let speed;
let state;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = 0;
  y = 0;
  squareSize = 30;
  speed = 5;
  state = 1;
}

function draw() {
  background(220);
  determineState();
  moveAccordingToState();
  displaySquare();
}

function displaySquare() {
  fill(0);
  rect(x, y, squareSize, squareSize);
}

function determineState() {
  if (state === 1 && x >= width - squareSize) {
    state = 2;
    x = width - squareSize; //hug the right hand wall
  }
  else if (state === 2 && y >= height - squareSize) {
    state = 3;
    y = height - squareSize;
  }
  else if (state === 3 && x <= 0) {
    state = 4;
    x = 0;
  }
  else if (state === 4 && y <= 0) {
    state = 1;
    y = 0;
  }
}

function moveAccordingToState() {
  if (state === 1) {
    x += speed;
  }
  else if (state === 2) {
    y += speed;
  }
  else if (state === 3) {
    x -= speed;
  }
  else if (state === 4) {
    y -= speed;
  }
}