// Traffic Light
// Dan Schellenberg
// Sept 23, 2020


let whichColorToDisplay = "green";
let lastLightSwitchTime = 0;
let greenLightDuration = 4000;
let yellowLightDuration = 1000;
let redLightDuration = 4000;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawOutlineOfLights();
  chooseWhichLightToDisplay();
  showCorrectLight();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill("black");
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill("white");
  circle(width/2, height/2 - 65, 50); //top
  circle(width/2, height/2, 50);  //middle
  circle(width/2, height/2 + 65, 50); //bottom
}

function chooseWhichLightToDisplay() {
  if (whichColorToDisplay === "green" && 
      millis() > lastLightSwitchTime + greenLightDuration) {
    whichColorToDisplay = "yellow";
    lastLightSwitchTime = millis();
  }

  else if (whichColorToDisplay === "yellow" && 
           millis() > lastLightSwitchTime + yellowLightDuration) {
    whichColorToDisplay = "red";
    lastLightSwitchTime = millis();
  }

  else if (whichColorToDisplay === "red" && 
           millis() > lastLightSwitchTime + redLightDuration) {
    whichColorToDisplay = "green";
    lastLightSwitchTime = millis();
  }
}

function showCorrectLight() {
  if (whichColorToDisplay === "red") {
    fill("red");
    circle(width/2, height/2 - 65, 50); //top
  }
  else if (whichColorToDisplay === "yellow") {
    fill("yellow");
    circle(width/2, height/2, 50);  //middle
  }
  else if (whichColorToDisplay === "green") {
    fill("green");
    circle(width/2, height/2 + 65, 50); //bottom
  }
}
