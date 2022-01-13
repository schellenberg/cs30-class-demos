// State variable review for Alex

let state;
let r, g, b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = "starting";
}

function draw() {
  background(220);

  if (state === "starting") {
    r = random(255);
    g = random(255);
    b = random(255);
    state = "displaying";
  }
  
  else if (state === "displaying") {
    fill(r, g, b);
    rect(100, 100, 400, 400);
  }
}
