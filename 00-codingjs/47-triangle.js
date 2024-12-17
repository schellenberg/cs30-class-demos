function triangle(rows) {
  //base case
  if (rows === 0) {
    return 0;
  }
  //pattern
  else {
    return rows + triangle(rows-1);
  }
}