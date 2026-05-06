function mapAB4(someMap) {
  if (someMap.has("a") && someMap.has("b")) {
    let aLen = someMap.get("a").length;
    let bLen = someMap.get("b").length;
    
    if (aLen > bLen) {
      someMap.set("c", someMap.get("a"));
    }
    else if (bLen > aLen) {
      someMap.set("c", someMap.get("b"));
    }
    else {
      someMap.set("a", "");
      someMap.set("b", "");
    }
  }
  return someMap;
}