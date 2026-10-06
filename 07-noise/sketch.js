// Perlin Noise Demo


let time = 0;
let deltaTime = 0.01;
const TIME_OFFSET = 100000;

async function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  let x = noise(time) * width;
  let y = noise(time + TIME_OFFSET) * height;
  fill("black");
  circle(x, y, 50);

  time += deltaTime;
}
