function nearTen(num) {
//   let remainder = num % 10;
//   return remainder <= 2 || remainder >= 8;
  
  let remainder = (num + 2) % 10;
  return remainder <= 4;
}