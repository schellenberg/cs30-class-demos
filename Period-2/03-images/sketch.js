// Image Demo

let marioImg;

function preload() {
  marioImg = loadImage("mario.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(marioImg, mouseX, mouseY, marioImg.width * 0.10, marioImg.height * 0.10);
}
