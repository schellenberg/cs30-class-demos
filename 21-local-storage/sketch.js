// LocalStorage Demo

let numberOfClicks = 0;
let highestClick = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //only get the highest value if it exists...
  if (getItem("highest")) {
    highestClick = getItem("highest");
  }
}

function draw() {
  background(220);
  displayClicks();
  displayHighest();
}

function mousePressed() {
  numberOfClicks++;
  if (numberOfClicks > highestClick) {
    highestClick = numberOfClicks;
    storeItem("highest", highestClick);
  }
}

function displayClicks() {
  fill("black");
  textSize(50);
  text(numberOfClicks, 100, height/2);
}

function displayHighest() {
  fill("green");
  textSize(50);
  text(highestClick, 400, height/2);
}