const exesAndOhs = (string) => {
  // Your code here
  //set variable where is split in to string
  let xo = string.toLowerCase().split("");
  //ckeck the variable by filter if the element is x or o then count with length
  return (
    xo.filter((element) => element === "x").length ==
    xo.filter((element) => element === "o").length
  );
};

console.log(exesAndOhs("xxooxoxo"));
console.log(exesAndOhs("xxo"));
