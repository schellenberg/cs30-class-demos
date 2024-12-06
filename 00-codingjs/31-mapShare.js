function mapShare(someMap) {
  if (someMap.has("a")) {
    let aValue = someMap.get("a");
    someMap.set("b", aValue);
  }
  someMap.delete("c");
  return someMap;
}