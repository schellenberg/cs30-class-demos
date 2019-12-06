let numberOfClicks = 0;
let allTimeHighestClicks;

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (getItem("highestClicks") !== null) {
    allTimeHighestClicks = getItem("highestClicks");
  }
  else {
    allTimeHighestClicks = 0;
  }
}

function draw() {
  background(220);

  textSize(72);
  fill("black");
  text(numberOfClicks, 50, 100);

  fill("green");
  text(allTimeHighestClicks, 50, 300);
}

function mousePressed() {
  numberOfClicks++;

  if (numberOfClicks > allTimeHighestClicks) {
    allTimeHighestClicks = numberOfClicks;
    storeItem("highestClicks", allTimeHighestClicks);
  }
}
