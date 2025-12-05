function topping2(someMap) {
  if (someMap.has("ice cream")) {
    let temp = someMap.get("ice cream");
    someMap.set("yogurt", temp);
  }
  if (someMap.has("spinach")) {
    someMap.set("spinach", "nuts");
  }
  return someMap;
}