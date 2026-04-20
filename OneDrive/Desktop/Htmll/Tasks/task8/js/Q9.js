







//  problem 9

function analyzeNumbers() {
  var n = Number(prompt("Enter count:"));

  var sum = 0;
  var odd = 0;
  var even = 0;

  for (var i = 0; i < n; i++) {
    var num = Number(prompt("Enter number:"));

    sum += num;

    if (num % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  }

  console.log("Sum:", sum);
  console.log("Odd:", odd);
  console.log("Even:", even);
}

analyzeNumbers();