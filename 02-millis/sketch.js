let isRed = false;
let lastTimeSwitched = 0;
let pup;

function preload() {
  pup = loadImage("assets/puppy.png");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (isRed) {
    background("red");
  }
  else {
    background("black");
  }
  image(pup, 0, 0, width, height);
  
  if (millis() > lastTimeSwitched + 2000) {
    lastTimeSwitched = millis();
    isRed = !isRed;
  }
  console.log(millis());
}