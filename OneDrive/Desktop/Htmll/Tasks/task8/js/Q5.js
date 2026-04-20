







//  problem 5

function sumOddBetween() {
  var a = Number(prompt("Enter first number:"));
  var b = Number(prompt("Enter second number:"));

  var sum = 0;

  for (var i = a + 1; i < b; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }

  console.log(sum);
}

sumOddBetween();