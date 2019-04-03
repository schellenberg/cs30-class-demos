let x, y, rectWidth, rectHeight;
let dx, dy;
let radius;
let dvdLogo;
let imageScalar;

function preload() {
  dvdLogo = loadImage("assets/DVD_video_logo.png");
}

function setup() {
  createCanvas(400, 400);
  imageScalar = 0.1;
  x = width/2;
  y = height/2;
  rectWidth = dvdLogo.width * imageScalar;
  rectHeight = dvdLogo.height * imageScalar;
  dx = random(3, 10);
  dy = random(3, 10);
  radius = 25;
}

function draw() {
  background(255);
  
  // move the ball
  x += dx;
  y += dy;
  
  // check for bounce
  if (x + rectWidth >= width || x <= 0) {
    dx = -1 * dx;
  }
  if (y + rectHeight >= height || y <= 0) {
    dy = -1 * dy;
  }
  
  // display the logo
  image(dvdLogo, x, y, rectWidth, rectHeight);
}