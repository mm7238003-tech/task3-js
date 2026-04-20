










//  problem 2

function isPerfectSquare() {
  var n = Number(prompt("Enter number:"));

  var root = Math.sqrt(n);

  if (root === Math.floor(root)) {
    console.log("Perfect square");
  } else {
    console.log("Not perfect square");
  }
}

isPerfectSquare();