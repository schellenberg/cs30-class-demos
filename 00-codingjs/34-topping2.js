function topping2(someMap) {
  if (someMap.has("ice cream")) {
    let value = someMap.get("ice cream");
    someMap.set("yogurt", value);
  }
  if (someMap.has("spinach")) {
    someMap.set("spinach", "nuts");
  }
  return someMap;
}