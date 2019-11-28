function mapAB4(someMap){
  if (someMap.has("a") && someMap.has("b")) {
    let aLength = someMap.get("a").length;
    let bLength = someMap.get("b").length;
    if (aLength > bLength) {
      someMap.set("c", someMap.get("a"));
    }
    else if (bLength > aLength) {
      someMap.set("c", someMap.get("b"));
    }
    else {
      someMap.set("a", "");
      someMap.set("b", "");
    }
  }
  return someMap;
}