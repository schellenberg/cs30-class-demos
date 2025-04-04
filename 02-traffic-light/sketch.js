// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let lightState = "green";
let lastSwitchedTime = 0;
const GREEN_LIGHT_DURATION = 3000;
const YELLOW_LIGHT_DURATION = 1000;
const RED_LIGHT_DURATION = 4000;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  changeStateIfNeeded();
  displayCorrectLight();
  writeColor();
}

function writeColor() {
  textSize(100);
  fill("black");
  textAlign(CENTER, CENTER);
  text(lightState, width/2, height/2 + 180);
}

function changeStateIfNeeded() {
  if (lightState === "green" && millis() > lastSwitchedTime + GREEN_LIGHT_DURATION) {
    lightState = "yellow";
    lastSwitchedTime = millis();
    console.log(lightState);
  }
  else if (lightState === "yellow" && millis() > lastSwitchedTime + YELLOW_LIGHT_DURATION) {
    lightState = "red";
    lastSwitchedTime = millis();
    console.log(lightState);
  }
  else if (lightState === "red" && millis() > lastSwitchedTime + RED_LIGHT_DURATION) {
    lightState = "green";
    lastSwitchedTime = millis();
    console.log(lightState);
  }
}

function displayCorrectLight() {
  if (lightState === "green") {
    fill("green");
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
  }
  else if (lightState === "yellow") {
    fill("yellow");
    ellipse(width/2, height/2, 50, 50); //middle
  }
  else if (lightState === "red") {
    fill("red");
    ellipse(width/2, height/2 - 65, 50, 50); //top
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