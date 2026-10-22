// Loading Images and Sounds

let coinImg;
let coinSound;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  coinImg = await loadImage("coin.png");
  coinSound = await loadSound("coin.wav");
}

function draw() {
  background("black");

  image(coinImg, width/2, height/2);
}

function mousePressed() {
  coinSound.play();
}