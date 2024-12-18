// Fractal Circles
// Made with Recursion!


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  recursiveCircle(width/2, height/2, mouseX);
}

function recursiveCircle(x, y, radius) {
  circle(x, y, radius*2);

  //escape clause
  if (radius > 50) {
    //pattern
    recursiveCircle(x + radius/2, y, radius/2);
    recursiveCircle(x - radius/2, y, radius/2);
  }
}