let timeToWait;
let timeLastChanged = 0;
let bgColor = "gray";

function setup() {
  createCanvas(400, 400);
  timeToWait = random(1000, 4000);
}

function draw() {
  if (millis() > timeToWait + timeLastChanged) {
    timeLastChanged = millis();
    if (bgColor === "gray") {
      bgColor = "black";
    }
    else if (bgColor === "black") {
      bgColor = "gray";
    }
  }
  background(bgColor);
}