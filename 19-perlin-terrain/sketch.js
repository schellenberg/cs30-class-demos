let playerX = 0;
let rectHeight;
let rectWidth;
let time;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectWidth = 1;
}

function draw() {
  background("white");

  movePlayer();
  displayTerrain();
}

function movePlayer() {
  if (keyIsPressed && key === "d") {
    playerX += 0.01;
  }
  if (keyIsPressed && key === "a") {
    playerX -= 0.01;
  }
}

function displayTerrain() {
  time = playerX;
  for (let x = 0; x <= width; x += rectWidth) {
    rectHeight = noise(time) * height;
    fill("black");
    rect(x, height - rectHeight, rectWidth, rectHeight);
    
    time += 0.01;
  }
}

