// Fade for Caleb

let blueOrb, greenOrb;
let greenAlpha = 0;
let blueAlpha = 0;
let blueFading = false;
let greenFading = false;

function preload() {
  blueOrb = loadImage("assets/BLueOrb.png");
  greenOrb = loadImage("assets/GreenOrb.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  tint(255, blueAlpha);
  image(blueOrb, 0, 0);
  tint(255, greenAlpha);
  image(greenOrb, 200, 200);

  if (blueFading) {
    blueAlpha--;
    if (blueAlpha <= 0) {
      blueFading = false;
    }
  }
  if (greenFading) {
    greenAlpha--;
    if (greenAlpha <= 0) {
      greenFading = false;
    }
  }
}

function keyPressed() {
  if (key === "1") {
    blueAlpha = 255;
    blueFading = true;
  }
  if (key === "2") {
    greenAlpha = 255;
    greenFading = true;
  }

}