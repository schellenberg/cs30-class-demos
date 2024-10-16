// Sound Effects Demo

let bgMusic;
let clickFx;

function preload() {
  bgMusic = loadSound("background-music.mp3");
  clickFx = loadSound("gem.ogg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgMusic.amp(0.3);
  clickFx.amp(1.0);
}

function draw() {
  background(220);
}

function mousePressed() {
  if (!bgMusic.isPlaying()) {
    bgMusic.loop();
  }
}

function keyPressed() {
  clickFx.play();
}