// Traffic Light Demo
// Dan Schellenberg

let state = "green";
let greenDuration = 4000;
let yellowDuration = 1000;
let redDuration = 3000;
let timeLastChanged = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  
  determineState();
  drawOutlineOfLights();
  displayCorrectLight();
}

function determineState() {
  if (state === "green" && millis() >= timeLastChanged + greenDuration) {
    state = "yellow";
    timeLastChanged = millis();
  }
  else if (state === "yellow" && millis() >= timeLastChanged + yellowDuration) {
    state = "red";
    timeLastChanged = millis();
  }
  else if (state === "red" && millis() >= timeLastChanged + redDuration) {
    state = "green";
    timeLastChanged = millis();
  }
}

function displayCorrectLight() {
  if (state === "red") {
    fill("red");
    ellipse(width / 2, height / 2 - 65, 50, 50); //top
  }
  else if (state === "yellow") {
    fill("yellow");
    ellipse(width / 2, height / 2, 50, 50); //middle
  }
  else if (state === "green") {
    //lights
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