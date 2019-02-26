function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(240);
	stroke(200);

	let colorList = ["white", "white", "black", "black", "blue", "blue", "red", "red", "yellow", "yellow"];
	
  for (let i = 0; i <= 9; i++) {
		fill(colorList[i]);
		ellipse(200, 200, 400 - 40 * i, 400 - 40 * i);
	}
}