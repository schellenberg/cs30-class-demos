// Images and Sounds Demo

let mario;
let coinSound;
let backgroundSound;
let scalar = 0.5;

function preload() {
  mario = loadImage("mario.png");
  coinSound = loadSound("coin-sound.wav");
  backgroundSound = loadSound("background-sound.mp3");

  backgroundSound.setVolume(0.5);
  coinSound.setVolume(1.0);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);

  image(mario, mouseX, mouseY, mario.width * scalar, mario.height * scalar);
  // circle(mouseX, mouseY, 50);
}

function mousePressed() {
  coinSound.play();

  if (!backgroundSound.isPlaying()) {
    backgroundSound.loop();
  }
}