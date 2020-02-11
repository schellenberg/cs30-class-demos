//https://editor.p5js.org/schellenberg/sketches/Useq5wj9

function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();
}

function draw() {
  if (mouseX < width/2) {
    let r = random(0, 255);
    let a = random(0, 255);
    fill(r, r, r, a);
    rect(random(width), random(height), 50, 50);
  }
  else {
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    let a = random(0, 255);
    fill(r, g, b, a);
    circle(random(width), random(height), 50);
  }
}
