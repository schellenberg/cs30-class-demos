function mapBully(someMap) {
  if (someMap.has("a")) {
    let thing = someMap.get("a");
    someMap.set("a", "");
    someMap.set("b", thing);
  }
  return someMap;
}