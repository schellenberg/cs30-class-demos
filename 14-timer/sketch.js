// Timer demo

let theTimer;

function setup() {
  createCanvas(windowWidth, windowHeight);

  theTimer = new Timer(3000);
}

function draw() {
  background(220);

  if (theTimer.expired() ) {
    background("red");
  }
}
