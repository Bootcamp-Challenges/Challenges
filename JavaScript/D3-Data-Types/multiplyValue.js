function multiplyValue(value, times) {
  // Your code here
  if (
    (typeof value !== "number" && typeof value !== "string") ||
    typeof times !== "number"
  )
    return null;

  if (typeof value === "number") {
    return value * times;
  } else {
    return value.repeat(times);
  }
}

console.log(multiplyValue(9, 2));
console.log(multiplyValue("[alright]", 3));
console.log(multiplyValue(5, ["kanye west"]));
