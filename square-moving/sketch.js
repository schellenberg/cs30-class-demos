// Square Moving Around Screen
// Sept 19, 2024

let x = 0;
let y = 0;
let squareSize = 50;
let speed = 5;
let state = "right";
let gameState = "start";

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (gameState === "start") {
    showStartScreen();
  }
  else if (gameState === "moving square") {
    moveSquare();
    displaySquare();
  }
}

function mousePressed() {
  if (gameState === "start") {
    gameState = "moving square";
  }
}

function showStartScreen() {
  textAlign(CENTER, CENTER);
  textSize(50);
  text("Click to start", width/2, height/2);
}

function moveSquare() {
  if (state === "right") {
    x += speed;
    if (x >= width - squareSize) {
      state = "down";
    }
  }
  else if (state === "down") {
    y += speed;
    if (y >= height - squareSize) {
      state = "left";
    }
  }
  else if (state === "left") {
    x -= speed;
    if (x <= 0) {
      state = "up";
    }
  }
  else if (state === "up") {
    y -= speed;
    if (y <= 0) {
      state = "right";
    }
  }
}

function displaySquare() {
  fill("red");
  square(x, y, squareSize);
}