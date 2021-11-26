function openDoor(input) {
  // Your code here
  // Google JS syntax ;)
  for (object of input) {
    if (object.name === "Simon" && object.hasCoffee === true) {
      return true;
    }
  }
  return false;
}

//code not working! need fix!!!!
console.log(openDoor("Simon"));
console.log(openDoor("Scott"));
