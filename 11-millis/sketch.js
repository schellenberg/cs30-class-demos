let isGray = true;
let lastTimeColorSwitched = 0;
let waitTime = 500;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (isGray) {
    background(220);
  }
  else {
    background(0);
  }
  
  if (millis() > lastTimeColorSwitched + waitTime) {
    isGray = !isGray;
    lastTimeColorSwitched = millis();
  }
}