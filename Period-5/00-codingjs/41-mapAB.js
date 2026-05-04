function mapAB(someMap) {
  if (someMap.has("a") && someMap.has("b")) {
    let theString = someMap.get("a") + someMap.get("b");
    someMap.set("ab", theString);
  }
  return someMap;
}