// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let state = "green";
let lastTimeChanged = 0;
let redTime = 3000;
let yellowTime = 500;
let greenTime = 3000;

function setup() {
  createCanvas(200, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  determineState();
  displayTheCorrectLight();
}

function determineState() {
  if (state === "green") {
    if (millis() > lastTimeChanged + greenTime) {
      state = "yellow";
      lastTimeChanged = millis();
    }
  }
  else if (state === "yellow") {
    if (millis() > lastTimeChanged + yellowTime) {
      state = "red";
      lastTimeChanged = millis();
    }
  }
  else if (state === "red") {
    if (millis() > lastTimeChanged + redTime) {
      state = "green";
      lastTimeChanged = millis();
    }
  }
}

function displayTheCorrectLight() {
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