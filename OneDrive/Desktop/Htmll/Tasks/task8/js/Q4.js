










//  problem 4

function changeCase() {
  var ch = prompt("Enter a letter:");

  if (ch === ch.toLowerCase()) {
    console.log(ch.toUpperCase());
  } else {
    console.log(ch.toLowerCase());
  }
}

changeCase();