







//  problem 12
function finalGrade() {
  var exam = Number(prompt("Enter exam grade:"));
  var projects = Number(prompt("Enter number of projects:"));

  if (exam > 90 || projects > 10) {
    console.log(100);
  } else if (exam > 75 && projects >= 5) {
    console.log(90);
  } else if (exam > 50 && projects >= 2) {
    console.log(75);
  } else {
    console.log(0);
  }
}

finalGrade();