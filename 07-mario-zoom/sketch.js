let mario;
let scalar;

function preload() {
  mario = loadImage("assets/mario.png");
}

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
  scalar = 0.1;
}

function draw() {
  background(220);
  image(mario, mouseX, mouseY, mario.width*scalar, mario.height*scalar);
}

function mouseWheel(event) {
  //console.log(event.delta);
  if (event.delta > 0) {
    scalar *= 1.1;
  }
  else {
    scalar *= 0.9;
  }
  scalar = constrain(scalar, 0.05, 0.75);
}