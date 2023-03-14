// Terrain Generation with Perlin Noise
// March 14, 2023


let terrain = [];
let xOffset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnRectangles();
}

function draw() {
  background(220);
  
  if (keyIsDown(RIGHT_ARROW)) {
    xOffset += 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    if (xOffset > 5) {
      xOffset -= 5;
    }
  }

  //display rectangles
  for (let i = xOffset; i < xOffset + width; i++) {
    rect(terrain[i].x - xOffset, height - terrain[i].height, 
         1, terrain[i].height);
  } 
}

function spawnRectangles() {
  let time = 0;
  for (let x = 0; x < 10000; x++) {
    let h = noise(time) * height;
    let thisRect = {
      x: x,
      height: h,
    };
    terrain.push(thisRect);
    time += 0.003;
  }
}