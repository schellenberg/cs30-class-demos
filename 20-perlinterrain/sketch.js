let heights = [];
const NUMBER_OF_RECTS = 400;
let time = 0;

function setup() {
  createCanvas(400, 400);
  
  for (let i=0; i<NUMBER_OF_RECTS; i++) {
    let thisHeight = noise(time) * height;
    heights.push(thisHeight);
    time += 0.009;
  }
}

function draw() {
  background(220);
  showTerrain();
}

function showTerrain() {
  for (let i = 0; i < heights.length; i++) {
    let rectWidth = width/heights.length;
    fill(0);
    rect(i*rectWidth, height - heights[i], rectWidth, heights[i]);
  }
}
