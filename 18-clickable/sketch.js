// Clickable Demo

let startButton;
let state = "start";

function setup() {
  createCanvas(windowWidth, windowHeight);
  startButton = new Clickable();
  startButton.locate(100, 300);
  startButton.resize(150, 45);
  startButton.onPress = startWasPressed;
  startButton.text = "Start Game";
}

function draw() {
  if (state === "start") {
    background(220);
  }
  else {
    background(0);
  }
  startButton.draw();
}

function startWasPressed() {
  state = "gameplay";
}
