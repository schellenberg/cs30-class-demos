let colors = ["white", "white", "black", "black", "blue", "blue", "red", "red", "yellow", "yellow"];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  stroke(200);
  
  for (let i = 0; i < 10; i++) {
    fill(colors[i]);
    let diameter = 400 - 40*i;
    ellipse(200, 200, diameter, diameter);
  }
}
