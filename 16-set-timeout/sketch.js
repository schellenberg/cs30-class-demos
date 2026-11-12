// window.setTimeout example
// make something happen after some amount of time

let message = "Coming soon...";

async function setup() {
  createCanvas(windowWidth, windowHeight);

  textAlign(CENTER, CENTER);
  textSize(50);

  //run the newMessage function after 3 seconds
  window.setTimeout(newMessage, 3000);
}

function draw() {
  background(220);
  text(message, width/2, height/2);
}

function newMessage() {
  message = "It's here!!!";
}