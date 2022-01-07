// Bubble Sort

let someList = [5,15,3,8,9,1,20,7];

function selectionSort(aList) {
  let swapLocation = aList.length - 1;
  
  while (swapLocation > 0) {
    let highestLocation = 0;

    //one pass
    for (let current = 0; current <= swapLocation; current++) {
      if (aList[current] > aList[highestLocation]) {
        highestLocation = current;
      }
    }
    //swap
    let temp = aList[swapLocation];
    aList[swapLocation] = aList[highestLocation];
    aList[highestLocation] = temp;

    //decrease the swap location by 1
    swapLocation--;

    //to show each pass...
    console.log(aList);
  }

  return aList;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(selectionSort(someList));
}

function draw() {
}
