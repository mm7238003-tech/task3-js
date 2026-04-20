






//  problem 6
function luckyDay() {
  var n = Number(prompt("Enter count:"));
  var hasLucky = false;

  for (var i = 0; i < n; i++) {
    var num = Number(prompt("Enter number:"));

    if (num === 4 || num === 7) {
      hasLucky = true;
    }
  }

  if (hasLucky) {
    console.log("It’s your lucky day");
  } else {
    console.log("It’s not your lucky day");
  }
}

luckyDay();