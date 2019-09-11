let shapeSize = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
}

function mousePressed() {
  if (keyIsPressed) {
    if (key === "r") {
      rect(mouseX, mouseY, shapeSize, shapeSize);
    }
    else if (key === "e") {
      ellipse(mouseX, mouseY, shapeSize, shapeSize);
    }
  }
}

function keyTyped() {
  if (key === 'b') {
    background(0);
    stroke(255);
    fill(255);
  }
  else if (key === 'w') {
    background(255);
    stroke(0);
    fill(0);
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    console.log("up arrow pressed");
    shapeSize += 5;
  }
  else if (keyCode === DOWN_ARROW) {
    shapeSize -= 5;
  }
}