function commonEnd(a, b) {
  let aFirst = a[0];
  let aLast = a[a.length-1];
  let bFirst = b[0];
  let bLast = b[b.length-1];
  
  return aFirst === bFirst || aLast === bLast;
}