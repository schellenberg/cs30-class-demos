// Terrain Generation
// Oct 23, 2023

let terrain = [];
let xOffset = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnRectangles();
}

function draw() {
  background(220);

  if (keyIsDown(RIGHT_ARROW)) {
    if (xOffset + 5 < terrain.length-width) {
      xOffset += 5;     //don't fall off the right side
    }                    
  }

  if (keyIsDown(LEFT_ARROW)) {
    if (xOffset > 5) {  //don't fall off the left side
      xOffset -= 5;
    }
  }

  displayRectangles();
}

function displayRectangles() {
  for (let i = xOffset; i < width + xOffset; i++) {
    let thisRect = terrain[i];
    rect(thisRect.x - xOffset, height - thisRect.height, 
         1, thisRect.height);
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
    time += 0.001;
  }
}