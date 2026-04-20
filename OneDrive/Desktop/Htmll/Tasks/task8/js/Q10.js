






//  problem 10
function pumGame() {
  var n = Number(prompt("Enter number:"));

  var num = 1;

  for (var i = 0; i < n; i++) {
    console.log(num + " " + (num+1) + " " + (num+2) + " PUM");
    num += 4;
  }
}

pumGame();