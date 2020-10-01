// Image Loading Demo

let luigi;

function preload() {
  luigi = loadImage("assets/luigi.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(luigi, mouseX, mouseY);
}
