class Cell {
  // i and j are the col and row values in the grid
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.walls = {
      top: true,
      right: true,
      bottom: true,
      left: true
    };
    this.visited = false;
    this.endingLocation = false;
  }

  highlight() {
    let x = this.i * cellSize;
    let y = this.j * cellSize;
    noStroke();
    fill(0, 255, 0, 100);
    rect(x, y, cellSize, cellSize);
  }

  display() {
    // x and y are the coordinates to display this cell
    let x = this.i * cellSize;
    let y = this.j * cellSize;

    // draw the walls, if that wall is set to true
    stroke(255);
    if (this.walls.top) {
      line(x, y, x + cellSize, y);
    }
    if (this.walls.right) {
      line(x + cellSize, y, x + cellSize, y + cellSize);
    }
    if (this.walls.bottom) {
      line(x, y + cellSize, x + cellSize, y + cellSize);
    }
    if (this.walls.left) {
      line(x, y, x, y + cellSize);
    }

    // if cell has been visited, change it's color
    if (this.visited) {
      noStroke();
      fill(255, 0, 255, 100);
      rect(x, y, cellSize, cellSize);
    }
  }

  checkNeighbors() {
    let neighbors = [];

    // calculate which cells are the neighbors of the current cell
    //  if the cell is off the edge, the index function will return -1
    let top = grid[index(this.i, this.j - 1)];
    let right = grid[index(this.i + 1, this.j)];
    let bottom = grid[index(this.i, this.j + 1)];
    let left = grid[index(this.i - 1, this.j)];

    // since accessing an array with a negative index returns undefined,
    //  we can check if the neighbor is defined before checking if it's visited
    if (top && !top.visited) {
      neighbors.push(top);
    }
    if (right && !right.visited) {
      neighbors.push(right);
    }
    if (bottom && !bottom.visited) {
      neighbors.push(bottom);
    }
    if (left && !left.visited) {
      neighbors.push(left);
    }

    // as long as there is at least one neighbor that hasn't been visited,
    //  pick one of the neighbors at random
    if (neighbors.length > 0) {
      let r = floor(random(0, neighbors.length));
      return neighbors[r];
    }
    // if there are no unvisited neighbors, should return undefined
    else {
      return undefined;
    }
  }

}
