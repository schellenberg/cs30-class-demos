// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

const GREEN = 'green';
const YELLOW = 'yellow';
const RED = 'red';
let state = RED;
let lastSwitchedTime = 0;
let greenLightDuration = 3000;
let yellowLightDuration = 500;
let redLightDuration = 3000;

async function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  chooseCorrectLight();
  drawOutlineOfLights();
  displayCorrectLight();
}

function chooseCorrectLight() {
  if (state === GREEN && millis() >= lastSwitchedTime + greenLightDuration) {
    state = YELLOW;
    lastSwitchedTime = millis();
  }

  if (state === YELLOW && millis() >= lastSwitchedTime + yellowLightDuration) {
    state = RED;
    lastSwitchedTime = millis();
  }

  if (state === RED && millis() >= lastSwitchedTime + redLightDuration) {
    state = GREEN;
    lastSwitchedTime = millis();
  }
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

function displayCorrectLight() {
  if (state === GREEN) {
    fill('green');
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
  }
  if (state === YELLOW) {
    fill('yellow');
    ellipse(width/2, height/2, 50, 50); //middle
  }
  if (state === RED) {
    fill('red');
    ellipse(width/2, height/2 - 65, 50, 50); //top
  }
}