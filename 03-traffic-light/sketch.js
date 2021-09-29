// Traffic Light Starter Code
// Dan Schellenberg

let whichLight = "red";
let lastTimeSwitched = 0;
let redDuration = 3000;
let greenDuration = 3000;
let yellowDuration = 1000;

function setup() {
  createCanvas(100, 300);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  pickCorrectLight();
  colorCorrectLight();
}

function pickCorrectLight() {
  if (whichLight === "red" && millis() > lastTimeSwitched + redDuration) {
    whichLight = "green";
    lastTimeSwitched = millis();
  }
  else if (whichLight === "green" && millis() > lastTimeSwitched + greenDuration) {
    whichLight = "yellow";
    lastTimeSwitched = millis();
  }
  else if (whichLight === "yellow" && millis() > lastTimeSwitched + yellowDuration) {
    whichLight = "red";
    lastTimeSwitched = millis();
  }
}

function colorCorrectLight() {
  if (whichLight === "green") {
    fill("green");
    ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
  }
  else if (whichLight === "yellow") {
    fill("yellow");
    ellipse(width / 2, height / 2, 50, 50); //middle
  }
  else if (whichLight === "red") {
    fill("red");
    ellipse(width / 2, height / 2 - 65, 50, 50); //top
  }
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width / 2, height / 2, 75, 200, 10);

  //lights
  fill("white");
  ellipse(width / 2, height / 2 - 65, 50, 50); //top
  ellipse(width / 2, height / 2, 50, 50); //middle
  ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
}