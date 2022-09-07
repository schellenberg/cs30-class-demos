function nearHundred(n){
  return Math.abs(n-100) <= 10 || Math.abs(n-200) <= 10;
//   return n >= 90 && n <= 110 || n >= 190 && n <= 210;
}