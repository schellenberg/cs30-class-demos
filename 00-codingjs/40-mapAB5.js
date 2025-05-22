function mapAB5(someMap) {
  if (someMap.has("a") && !someMap.has("b")) {
    someMap.set("b", someMap.get("a"));
  }
  else if (!someMap.has("a") && someMap.has("b")) {
    someMap.set("a", someMap.get("b"));
  }
  else if (!someMap.has("a") && !someMap.has("b")) {
    someMap.set("a", "tired");
    someMap.set("b", "tired");
  }
  else {
    someMap.set("a", "");
    someMap.set("b", "");
  }
  return someMap;
}