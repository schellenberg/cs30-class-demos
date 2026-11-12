// window.setInterval demo
// change the color of a circle every half second

let theColor;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  changeColor();

  //call the changeColor function once every half second
  window.setInterval(changeColor, 500);
}

function draw() {
  background(220);

  fill(theColor);
  circle(width/2, height/2, 400);
}

function changeColor() {
  theColor = color(random(255), random(255), random(255));
}