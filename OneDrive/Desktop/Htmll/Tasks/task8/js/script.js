






//  problem 1
function check15() {
  var a = Number(prompt("Enter first number:"));
  var b = Number(prompt("Enter second number:"));

  var result = (a === 15 || b === 15 || (a + b) === 15);

  console.log(result);
}

check15();