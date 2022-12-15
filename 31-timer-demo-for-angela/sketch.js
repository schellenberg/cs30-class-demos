//Demo for Angela
//Timer Library thingee

let someTimer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  someTimer = new Timer(2000, true);
}

function draw() {
  if (someTimer.expired()) {
    background("red");
  }
  else {
    background("black");
  }
}
