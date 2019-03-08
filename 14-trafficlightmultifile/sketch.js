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

