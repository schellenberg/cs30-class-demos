// Bubble Sort

let someList = [5,15,3,8,9,1,20,7];

function bubbleSort(aList) {
  let anySwaps = true;
  while (anySwaps) {
    anySwaps = false;

    //one pass
    for (let i=0; i<aList.length-1;i++) {
      //check for swap
      if (aList[i] > aList[i+1]) {
        anySwaps = true;
        let temp = aList[i];
        aList[i] = aList[i+1];
        aList[i+1] = temp;
      }
    }
    console.log(aList); //print out each pass
  }
  return aList;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(bubbleSort(someList));
}

function draw() {
}
