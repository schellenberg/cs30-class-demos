// Circle Recursion

let theColors = ["white", "red", "blue", "yellow", "green", 
                 "orange", "purple", "violet"];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  recursiveCircle(width/2, height/2, height, 0);
}

function recursiveCircle(x, y, diameter, level) {
  fill(theColors[level]);
  circle(x, y, diameter);

  if (diameter > 100) {
    recursiveCircle(x - (mouseX/width/2)*diameter, y - (mouseY/height/2)*diameter, diameter/2, level+1);
    recursiveCircle(x - (mouseX/width/2)*diameter, y + (mouseY/height/2)*diameter, diameter/2, level+1);
    recursiveCircle(x + (mouseX/width/2)*diameter, y + (mouseY/height/2)*diameter, diameter/2, level+1);
    recursiveCircle(x + (mouseX/width/2)*diameter, y - (mouseY/height/2)*diameter, diameter/2, level+1);
  }
}
