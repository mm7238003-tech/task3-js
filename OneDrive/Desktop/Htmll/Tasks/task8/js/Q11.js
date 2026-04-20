







//  problem 11
function productSign() {
  var a = Number(prompt("Enter first number:"));
  var b = Number(prompt("Enter second number:"));

  var product = a * b;

  if (product > 0) {
    console.log("positive");
  } else if (product < 0) {
    console.log("negative");
  } else {
    console.log("zero");
  }
}

productSign();