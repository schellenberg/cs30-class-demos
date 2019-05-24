// Multiple Canvases (Canvii?) for Kyle
// ideas from https://github.com/processing/p5.js/wiki/Beyond-the-canvas
//       and https://github.com/processing/p5.js/wiki/Global-and-instance-mode

let s = function( sketch ) {

  let x = 100; 
  let y = 100;

  sketch.setup = function() {
    let shapeThing = sketch.createCanvas(200, 200);
    shapeThing.position(0, 0);
  };

  sketch.draw = function() {
    // sketch.background(0);
    sketch.fill(255);
    sketch.rect(x,y,50,50);
  };
};


let mandlebrot = function( sketch ) {
  sketch.setup = function() {
    let mandleThing = sketch.createCanvas(710, 400);
    mandleThing.position(0,0);
    sketch.pixelDensity(1);
    sketch.noLoop();
  };

  sketch.draw = function() {
    sketch.background(0);

    // Establish a range of values on the complex plane
    // A different range will allow us to "zoom" in or out on the fractal

    // It all starts with the width, try higher or lower values
    const w = 4;
    const h = (w * sketch.height) / sketch.width;

    // Start at negative half the width and height
    const xmin = -w/2;
    const ymin = -h/2;

    // Make sure we can write to the pixels[] array.
    // Only need to do this once since we don't do any other drawing.
    sketch.loadPixels();

    // Maximum number of iterations for each point on the complex plane
    const maxiterations = 100;

    // x goes from xmin to xmax
    const xmax = xmin + w;
    // y goes from ymin to ymax
    const ymax = ymin + h;

    // Calculate amount we increment x,y for each pixel
    const dx = (xmax - xmin) / (sketch.width);
    const dy = (ymax - ymin) / (sketch.height);

    // Start y
    let y = ymin;
    for (let j = 0; j < sketch.height; j++) {
      // Start x
      let x = xmin;
      for (let i = 0; i < sketch.width; i++) {

        // Now we test, as we iterate z = z^2 + cm does z tend towards infinity?
        let a = x;
        let b = y;
        let n = 0;
        while (n < maxiterations) {
          const aa = a * a;
          const bb = b * b;
          const twoab = 2.0 * a * b;
          a = aa - bb + x;
          b = twoab + y;
          // Infinty in our finite world is simple, let's just consider it 16
          if (sketch.dist(aa, bb, 0, 0) > 16) {
            break;  // Bail
          }
          n++;
        }

        // We color each pixel based on how long it takes to get to infinity
        // If we never got there, let's pick the color black
        const pix = (i+j*sketch.width)*4;
        const norm = sketch.map(n, 0, maxiterations, 0, 1);
        let bright = sketch.map(sketch.sqrt(norm), 0, 1, 0, 255);
        if (n === maxiterations) {
          bright = 0;
        } else {
          // Gosh, we could make fancy colors here if we wanted
          sketch.pixels[pix + 0] = bright;
          sketch.pixels[pix + 1] = bright;
          sketch.pixels[pix + 2] = bright;
          sketch.pixels[pix + 3] = 255;
        }
        x += dx;
      }
      y += dy;
    }
    sketch.updatePixels();
  };
};



let mandlebrotCanvas = new p5(mandlebrot);
let myp5 = new p5(s);