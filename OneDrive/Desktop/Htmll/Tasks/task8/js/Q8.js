






//  problem 8
function printPrimes() {
  var n = Number(prompt("Enter number:"));

  for (var i = 2; i <= n; i++) {
    var isPrime = true;

    for (var j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(i);
    }
  }
}

printPrimes();