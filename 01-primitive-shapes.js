//live version at https://editor.p5js.org/schellenberg/sketches/gSGM5gkGY

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("green");
  
  fill("red");
  circle(mouseX, mouseY, mouseX);
  
  fill("blue");
  rect(20, 20, 360, 50, 20);
  
  fill(0, 255, 120, 120);
  triangle(187,151, 98,253, 272,253);
}

function mousePressed() {
  console.log(mouseX + " " + mouseY);
}