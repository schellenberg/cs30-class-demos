let x = 200;
let y = 200;

let movingUp = false;
let movingDown = false;
let movingLeft = false;
let movingRight = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  moveEllipse();
  fill(0);
  ellipse(x, y, 25, 25);
}

function moveEllipse() {
  if (movingUp) {
    y -= 3;
  }
  if (movingDown) {
    y += 3;
  }
  if (movingLeft) {
    x -=3;
  }
  if (movingRight) {
    x +=3;
  }
}

function keyPressed() {
  if (key === "w") {
    movingUp = true;
  }
  if (key === "s") {
    movingDown = true;
  }
  if (key === "a") {
    movingLeft = true;
  }
  if (key === "d") {
    movingRight = true;
  }
}

function keyReleased() {
  if (key === "w") {
    movingUp = false;
  }
  if (key === "s") {
    movingDown = false;
  }
  if (key === "a") {
    movingLeft = false;
  }
  if (key === "d") {
    movingRight = false;
  }
}