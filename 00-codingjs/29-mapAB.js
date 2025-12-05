function mapAB(someMap) {
  if (someMap.has("a") && someMap.has("b")) {
    let combined = someMap.get("a") + someMap.get("b");
    someMap.set("ab", combined);
  }
  return someMap;
}