function commonCharacters(string1, string2) {
  // Your code here
  const resultArray = [];
  const str1Array = string1.toLowerCase().split("");
  const str1ArrayFiltered = [...new Set(str1Array)];
  str1ArrayFiltered.forEach((element) => {
    if (string2.includes(element) && element != " ") resultArray.push(element);
  });
  return resultArray.join("");
}
console.log(
  commonCharacters("Riding on a buffalo makes me more approachable", "so what")
);
console.log(commonCharacters("What is love?", "Baby don't hurt me"));
