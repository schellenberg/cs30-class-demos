function mapBully(someMap) {
  if (someMap.has("a")) {
    let theValue = someMap.get("a");
    someMap.set("b", theValue);
    someMap.set("a", "");
  }
  return someMap;
}