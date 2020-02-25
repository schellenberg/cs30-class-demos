// WASD Demo
// Dan Schellenberg

let x;
let y;
let dx = 5;
let dy = 5;
let movingUp = false;
let movingDown = false;
let movingLeft = false;
let movingRight = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
}

function draw() {
  background("white");
  
  moveBox();
  displayBox();
}

function keyPressed() {
  if (key === "w") {
    movingUp = true;
  }
  if (key === "a") {
    movingLeft = true;
  }
  if (key === "s") {
    movingDown = true;
  }
  if (key === "d") {
    movingRight = true;
  }
}

function keyReleased() {
  if (key === "w") {
    movingUp = false;
  }
  if (key === "a") {
    movingLeft = false;
  }
  if (key === "s") {
    movingDown = false;
  }
  if (key === "d") {
    movingRight = false;
  }
}


function moveBox() {
  if (movingUp) {
    y -= dy;
  }
  if (movingLeft) {
    x -= dx;
  }
  if (movingDown) {
    y += dy;
  }
  if (movingRight) {
    x += dx;
  }
}

function displayBox() {
  fill("black");
  rect(x, y, 50, 50);
}