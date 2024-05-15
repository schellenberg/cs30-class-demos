function mapShare(someMap) {
  if (someMap.has("a")) {
    someMap.set("b", someMap.get("a"));
  }
  someMap.delete("c");
  return someMap;
}