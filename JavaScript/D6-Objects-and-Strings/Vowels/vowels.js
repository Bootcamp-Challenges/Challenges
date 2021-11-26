function vowels(string) {
  // Your code here
  return string.match(/[aeiou]/gi);
  //gi is global and case insensitive
}

console.log(vowels("cAse tEst"));
