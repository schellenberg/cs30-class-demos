function mapAB5(someMap) {
  if (someMap.has("a") && someMap.has("b")) {
    someMap.set("a", "");
    someMap.set("b", "");
  }
  else if (!someMap.has("a") && !someMap.has("b")) {
    someMap.set("a", "tired");
    someMap.set("b", "tired");    
  }
  else if (someMap.has("a")) {
    someMap.set("b", someMap.get("a"));
  }
  else if (someMap.has("b")) {
    someMap.set("a", someMap.get("b"));
  }
  return someMap;
}