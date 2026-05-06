function mapAB4(someMap) {
  if (someMap.has("a") && someMap.has("b")) {
    let first = someMap.get("a").length;
    let second = someMap.get("b").length;
    
    if (first > second) {
      someMap.set("c", someMap.get("a"));
    }
    else if (second > first) {
      someMap.set("c", someMap.get("b"));
    }
    else {
      someMap.set("a", "");
      someMap.set("b", "");
    }
  }
  return someMap;
}