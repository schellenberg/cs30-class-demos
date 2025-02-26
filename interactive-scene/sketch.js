let theColors = ["white", "white", "black", "black", "blue", "blue", "red", "red", "yellow", "yellow"];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  drawColoredTarget();  
}

function drawColoredTarget() {
  for (let i = 0; i < theColors.length; i++) {
    fill(theColors[i]);
    ellipse(200, 200, 400 - i*40, 400 - i*40);
  }
}

function drawTarget() {
  let theSize = 400;
  while (theSize >= 40) {
    ellipse(200, 200, theSize, theSize);
    theSize -= 40;
  }
}