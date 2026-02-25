let lightState = "green";
let greenDuration = 3000;
let yellowDuration = 1000;
let redDuration = 3000;
let lastSwitch = 0;

function setup() {
  createCanvas(100, 300);
}

function draw() {
  background(255);
  changeStateIfNeeded();
  drawOutlineOfLights();
  drawTheLight();
}

function changeStateIfNeeded() {
  if (lightState === "green" && millis() > lastSwitch + greenDuration) {
    lightState = "yellow";
    lastSwitch = millis();
  }
  if (lightState === "yellow" && millis() > lastSwitch + yellowDuration) {
    lightState = "red";
    lastSwitch = millis();
  }
  if (lightState === "red" && millis() > lastSwitch + redDuration) {
    lightState = "green";
    lastSwitch = millis();
  }
}

function drawTheLight() {
  if (lightState === "red") {
    fill("red");
    ellipse(width / 2, height / 2 - 65, 50, 50); //top
  }
  if (lightState === "yellow") {
    fill("yellow");
    ellipse(width / 2, height / 2, 50, 50); //middle
  }
  if (lightState === "green") {
    fill("green");
    ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
  }
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width / 2, height / 2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width / 2, height / 2 - 65, 50, 50); //top
  ellipse(width / 2, height / 2, 50, 50); //middle
  ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
}
