// Moving Square with States

let state = "right";
let x = 0;
let y = 0;
let speed = 15;
let rectSize = 75;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  moveBox();
  displayBox();
}

function moveBox() {
  if (state === "right") {
    x += speed;
    if (x >= width - rectSize) {
      state = "down";
      x = width - rectSize;
    }
  }
  else if (state === "down") {
    y += speed;
    if (y >= height - rectSize) {
      state = "left";
      y = height - rectSize;
    }
  }
  else if (state === "left") {
    x -= speed;
    if (x <= 0) {
      state = "up";
      x = 0;
    }
  }
  else if (state === "up") {
    y -= speed;
    if (y <= 0) {
      state = "right";
      y = 0;
    }
  }
}

function displayBox() {
  fill("black");
  rect(x, y, rectSize, rectSize);
}