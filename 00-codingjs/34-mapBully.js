function mapBully(someMap) {
  if (someMap.has("a")) {
    let oldA = someMap.get("a");
    someMap.set("b", oldA);
    someMap.set("a", "");
  }
  return someMap;
}