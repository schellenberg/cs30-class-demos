// Simple Input Demo

let nameInput;
let yourName;
let button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  
  nameInput = createInput("");
  nameInput.position(30, 30);
  // nameInput.input(myInputEvent);

  button = createButton("Set Name");
  button.position(30, 60);
  button.mousePressed(setName);
}

function setName() {
  yourName = nameInput.value();
  button.remove();
  nameInput.remove();
}