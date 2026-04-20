






//  problem 7
function divisors() {
  var n = Number(prompt("Enter number:"));

  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
    }
  }
}

divisors();