function diff21(n) {
  //tim's solution
  //   return (n <= 21) ? 21 - n : 2 * (n - 21);
  
  //harjot's solution
  if (n > 21) {
    return (n - 21) * 2;
  }
  else {
    return 21 - n;
  }
  
  
}