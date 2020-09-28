// Array Demo

let numberOfRects;
let rectHeights = [];
let rectWidth;
let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRects = width;
  rectWidth = width / numberOfRects;
  setTheHeights();
}

function draw() {
  background(220);
  displayRects();
}

function setTheHeights() {
  for (let i=0; i<numberOfRects; i++) {
    let theHeight = noise(time) * height;
    rectHeights.push(theHeight);
    time += 0.005;
  }
}

function displayRects() {
  for (let i=0; i<numberOfRects; i++) {
    fill("black");
    rect(i*rectWidth, height-rectHeights[i], rectWidth, rectHeights[i]);
  }
}