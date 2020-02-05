// https://editor.p5js.org/schellenberg/sketches/tpDGbzQ8

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  
}

function keyPressed() {
  if (key === "w") {
    background(255);
  }
}

function mousePressed() {
  if (keyIsPressed && key === "t") {
    triangle(mouseX, mouseY, mouseX+50, mouseY+50, mouseX+50, mouseY-50);
  }
  
  if (!keyIsPressed) {
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    let a = random(0, 255);
    fill(r, g, b, a);
    
    circle(mouseX, mouseY, 50);
  }
}
