// Traffic Light Starter Code
// Dan Schellenberg
// Sept 25, 2018

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/

let state;
let greenLightDuration;
let yellowLightDuration;
let redLightDuration;
let timeOfLastLightSwitch;

function setup() {
  createCanvas(600, 600);
  state = 1;
  greenLightDuration = 5000;
  yellowLightDuration = 1500;
  redLightDuration = 3000;
  timeOfLastLightSwitch = 0;
}

function draw() {
  background(255);
  drawOutlineOfLights();
  checkState();
  displayTheCorrectLight();
}

function checkState() {
  if (state === 1 && millis() > timeOfLastLightSwitch + greenLightDuration) {
    state = 2;
    timeOfLastLightSwitch = millis();
  }
  else if (state === 2 && millis() > timeOfLastLightSwitch + yellowLightDuration) {
    state = 3;
    timeOfLastLightSwitch = millis();
  }
  else if (state === 3 && millis() > timeOfLastLightSwitch + redLightDuration) {
    state = 1;
    timeOfLastLightSwitch = millis();
  }
}

function displayTheCorrectLight() {
  if (state === 1) {
    showGreenLight();
  }
  if (state === 2) {
    showYellowLight();
  }
  if (state === 3) {
    showRedLight();
  }
}

function showGreenLight() {
  fill(0, 255, 0);
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

function showYellowLight() {
  fill(255, 255, 0);
  ellipse(width/2, height/2, 50, 50); //middle
}

function showRedLight() {
  fill(255, 0, 0);
  ellipse(width/2, height/2 - 65, 50, 50); //top
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}
