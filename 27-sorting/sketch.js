// Bubble Sort

let theNumbers = [5, 15, 3, 8, 9, 1, 20, 7];

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(selectionSort(theNumbers));
}

function draw() {
  background(220);
}

function bubbleSort(someArray) {
  let swapRequired = true;

  while (swapRequired) {
    swapRequired = false;

    //pass
    for (let i = 0; i < someArray.length - 1; i++) {
      if (someArray[i] > someArray[i+1]) {
        //swap
        let temp = someArray[i];
        someArray[i] = someArray[i+1];
        someArray[i+1] = temp;
        swapRequired = true;
      }
    }

    console.log(someArray);
  }
  return someArray;
}


function selectionSort(someArray) {
  for (let swapLocation = 0; swapLocation < someArray.length; swapLocation++) {
    let smallestLocation = swapLocation;

    //one pass
    for (let i = swapLocation; i < someArray.length; i++) {
      if (someArray[i] < someArray[smallestLocation]) {
        smallestLocation = i;
      }
    }

    // swap
    let temp = someArray[swapLocation];
    someArray[swapLocation] = someArray[smallestLocation];
    someArray[smallestLocation] = temp;

    console.log(someArray);
  }
  
  return someArray;
}