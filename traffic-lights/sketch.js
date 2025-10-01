// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let lightColor = "red";
let lastSwitchedTime = 0;
let greenDuration = 4000;
let redDuration = 4000;
let yellowDuration = 1000;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  updateLightState();
  drawOutlineOfLights();
  showCorrectLight();
}

function updateLightState() {
  if (lightColor === "red" && millis() > lastSwitchedTime + redDuration) {
    lightColor = "green";
    lastSwitchedTime = millis();
  }
  else if (lightColor === "green" && millis() > lastSwitchedTime + greenDuration) {
    lightColor = "yellow";
    lastSwitchedTime = millis();
  }
  else if (lightColor === "yellow" && millis() > lastSwitchedTime + yellowDuration) {
    lightColor = "red";
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

function showCorrectLight() {
  if (lightColor === "red") {
    fill("red");
    ellipse(width/2, height/2 - 65, 50, 50); //top
  }
  else if (lightColor === "green") {
    fill("green");
    ellipse(width/2, height/2 + 65, 50, 50); //bottom
  }
  else if (lightColor === "yellow") {
    fill("yellow");
    ellipse(width/2, height/2, 50, 50); //middle
  }
}