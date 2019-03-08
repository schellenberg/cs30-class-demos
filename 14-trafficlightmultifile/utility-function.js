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
  