// Traffic Light Starter Code
// Schellenberg
// Sept 28, 2022

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let state = "green";
let lastTimeSwitched = 0;
let redLightDuration = 5000;
let yellowLightDuration = 1000;
let greenLightDuration = 5000;

function setup() {
  createCanvas(100, 300);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  checkIfLightSwitched();
  showCorrectLight();
}

function checkIfLightSwitched() {
  if (state === "green" && millis() > lastTimeSwitched + greenLightDuration) {
    state = "yellow";
    lastTimeSwitched = millis();
  }
  else if (state === "yellow" && millis() > lastTimeSwitched + yellowLightDuration) {
    state = "red";
    lastTimeSwitched = millis();
  }
  else if (state === "red" && millis() > lastTimeSwitched + redLightDuration) {
    state = "green";
    lastTimeSwitched = millis();
  }
}

function showCorrectLight() {
  if (state === "red") {
    fill("red");
    ellipse(width / 2, height / 2 - 65, 50, 50); //top
  }
  else if (state === "yellow") {
    fill("yellow");
    ellipse(width / 2, height / 2, 50, 50); //middle
  }
  else if (state === "green") {
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