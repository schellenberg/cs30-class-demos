// Fractal Circles -- first recursion visualization

let theColors = ["red", "green", "blue", "yellow", "orange", "purple", "black", "pink", "white", "brown", "grey"];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  let theDepth = Math.floor(map(mouseX, 0, width, 0, 10));
  fractalCircle(width/2, width, theDepth);
}

function fractalCircle(x, diameter, depth) {
  //base case
  fill(theColors[depth]);
  circle(x, height/2, diameter);

  if (depth > 0) {
    depth--;
    //left side circle
    fractalCircle(x-diameter/4, diameter/2, depth);
    //right side circle
    fractalCircle(x+diameter/4, diameter/2, depth);
  }
}