// Close for Austin

let shouldClose = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  closeIfNeeded();
}

function closeIfNeeded() {
  if (shouldClose) {
    close();
  }
}

function timeToClose() {
  console.log("in the timeToClose function");
  shouldClose = true;
}

function mousePressed() {
  window.setTimeout(timeToClose, 1000);
}