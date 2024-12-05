function mapBully(someMap) {
  if (someMap.has("a")) {
    let aValue = someMap.get("a");
    someMap.set("b", aValue);
    someMap.set("a", "");
  }
  return someMap;
}