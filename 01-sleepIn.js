function sleepIn(weekday,vacation){
  if (weekday === false || vacation === true) {
    return true;
  }
  else {
    return false;
  }
  
  //can also just use the following one-liner:
  //  return !weekday || vacation;
}