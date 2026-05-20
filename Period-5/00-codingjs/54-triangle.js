function triangle(rows) {
  //base case
  if (rows === 0 || rows === 1) {
    return rows;
  }
  //pattern
  else {
    return rows + triangle(rows-1);
  }
}