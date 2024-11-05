//Dan Schellenberg

//2D Arrays Example - No Objects Used
//  - loading platformer level data
//  - WARNING: You do NOT want to have players/enemies as simply elements in a
//     grid, if you try to convert this into a functional game. They would move
//     like characters from a 1980's game.
//  - tiles are from https://opengameart.org/content/platformer-art-deluxe

let tiles;
let levelBackground;
let platform, coin, exclamationBox, fly, p1, slime, empty;
let tilesHigh, tilesWide;
let tileWidth, tileHeight;
let levelToLoad;
let lines;

function preload() {
  //load level data
  levelToLoad = "assets/levels/0.txt";
  lines = loadStrings(levelToLoad);

  //load background
  levelBackground = loadImage("images/level_background.png");

  //load tile images
  platform = loadImage("images/platform.png");
  coin = loadImage("images/coin.png");
  exclamationBox = loadImage("images/boxItem.png");
  fly = loadImage("images/flyFly1.png");
  p1 = loadImage("images/p1_front.png");
  slime = loadImage("images/slimeWalk1.png");
  empty = loadImage("images/empty.png");
}

function setup() {
  // keep this a 4:3 ratio, or it will stretch in weird ways
  createCanvas(1000, 750);

  tilesHigh = lines.length;
  tilesWide = lines[0].length;

  tileWidth = width / tilesWide;
  tileHeight = height / tilesHigh;

  tiles = createEmpty2dArray(tilesWide, tilesHigh);

  //put values into 2d array of characters
  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      let tileType = lines[y][x];
      tiles[y][x] = tileType;
    }
  }
}

function draw() {
  display();
}

function display() {
  image(levelBackground, 0, 0, width, height);

  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      showTile(tiles[y][x], x, y);
    }
  }
}

function showTile(location, x, y) {
  if (location === "#") {
    image(platform, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "C") {
    image(coin, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "B") {
    image(exclamationBox, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "F") {
    image(fly, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "P") {
    image(p1, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "S") {
    image(slime, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else {
    image(empty, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
}

function createEmpty2dArray(cols, rows) {
  let randomGrid = [];
  for (let y = 0; y < rows; y++) {
    randomGrid.push([]);
    for (let x = 0; x < cols; x++) {
      randomGrid[y].push(0);
    }
  }
  return randomGrid;
}
