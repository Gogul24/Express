const prompt = require('prompt-sync')({sigint:true});

let Average = prompt('Enter your average mark : ')
    Average = Number(Average);

switch (true) {
  case (Average >= 90):
    console.log("A grade");
    break;
  case (Average >= 80):
    console.log("B grade");
    break;
  case (Average >= 60):
    console.log("C grade");
    break;
  case (Average >= 45):
    console.log("D grade");
    break;
  case (Average < 45):
    console.log("Better Luck next time");
    break;
  default:
    break;
}
