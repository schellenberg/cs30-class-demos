//arrays and objects demo - atoms moving

//initialize an empty array
//this is where all the objects will be stored
let theAtoms = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //create one atom at the start
  spawnAtom();
  
  //call spawnAtom every 500 milliseconds, so that more and more atoms are on the screen over time
  window.setInterval(spawnAtom, 500);
}

function draw() {
  background(0);
  
  //iterate through all of the objects inside the theAtoms array, calling each one 'atom' for the duration of the iteration
  for (let i=0; i<theAtoms.length; i++) {
    //move this atom
    theAtoms[i].x += random(-5, 5);
    theAtoms[i].y += random(-5, 5);

    //display this atom
    noStroke();
    fill(theAtoms[i].theColor);
    circle(theAtoms[i].x, theAtoms[i].y, theAtoms[i].size);
  }
}

function spawnAtom() {
  //create an object, which for now you should think about as a variable that can hold lots of different information
  let atom = {
    x: random(width),
    y: random(height),
    size: random(5, 50),
    theColor: color(random(255), random(255), random(255), random(255)),
  };
  
  //add the object that we just made to the end of the theAtoms array
  theAtoms.push(atom);
}