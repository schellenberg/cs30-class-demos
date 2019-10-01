let clownfish;
let filteredImage;

function preload() {
  clownfish = loadImage("assets/clownfish.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  filteredImage = makeGrayscale(clownfish);
  background(220);

  // imageMode(CENTER);
  image(filteredImage, 0, 0);
}

function makeGrayscale(sourceImage) {
  let img = createImage(sourceImage.width, sourceImage.height);

  //load pixels so you can adjust them in the array
  img.loadPixels();
  sourceImage.loadPixels();

  for (let x = 0; x < sourceImage.width; x++) {
    for (let y = 0; y < sourceImage.height; y++) {
      let p = sourceImage.get(x, y);

      //apply filter
      let r = red(p);
      let g = green(p);
      let b = blue(p);

      let average = (r + g + b) / 3;

      if (dist(mouseX, mouseY, x, y) > 100) {
        img.set(x, y, color(average, average, average));
      }
      else {
        img.set(x, y, color(r, g, b));
      }
    }
  }

  img.updatePixels();
  return img;
}