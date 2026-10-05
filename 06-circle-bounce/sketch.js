// Object Notation and Arrays Demo
// Bouncing Circles

let theCircles = [];

async function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(220);

  for (let theCircle of theCircles) {
    //move circle
    theCircle.x += theCircle.dx;
    theCircle.y += theCircle.dy;
  
    //bounce off edges
    if (theCircle.x <= 0 + theCircle.radius || theCircle.x >= width - theCircle.radius) {
      theCircle.dx *= -1;
    }
    if (theCircle.y <= 0 + theCircle.radius || theCircle.y >= height - theCircle.radius) {
      theCircle.dy *= -1;
    }
  
    //display circle
    fill(theCircle.r, theCircle.g, theCircle.b);
    circle(theCircle.x, theCircle.y, theCircle.radius*2);
  }
}

function mousePressed() {
  spawnCircle();
}

function spawnCircle() {
  let someCircle = {
    x: mouseX,
    y: mouseY,
    dx: random(-5, 5),
    dy: random(-5, 5),
    radius: random(10, 50),
    r: random(255),
    g: random(255),
    b: random(255),
  };
  theCircles.push(someCircle);
}