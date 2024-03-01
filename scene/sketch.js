//move a circle around the screen using wasd

let x;
let y;
let dx = 2;
let dy = 2;
let mario;
let scalar = 1.0;

function preload() {
  mario = loadImage("mario.png");
}

function setup() {
  createCanvas(400, 400);
  
  x = width/2;
  y = height/2;
}

function draw() {
  background(220);
  
  moveBall();
  
  //display circle
  // circle(x, y, 25);
  
  //display mario
  image(mario, x, y, mario.width * scalar, mario.height * scalar);
}

function mouseWheel(event) {
  // console.log(event.delta);
  if (event.delta < 0) {
    console.log("make it bigger");
    scalar *= 1.1;
  }
  else {
    console.log("make it smaller");
    scalar *= 0.9;
  }
  
}

function moveBall() {
  if (keyIsDown(87)) { //w
    y -= dy;
  }
  if (keyIsDown(83)) { //s
    y += dy;
  }
  if (keyIsDown(68)) { //d
    x += dx;
  }
  if (keyIsDown(65)) { //a
    x -= dx;
  }
}


// janky motion
// function keyTyped() {
  // if (key === "w") {
  //   y -= dy;
  // }
  // if (key === "s") {
  //   y += dy;
  // }
  // if (key === "d") {
  //   x += dx;
  // }
  // if (key === "a") {
  //   x -= dx;
  // }
// }