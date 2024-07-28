const Month = new Date().getMonth();

switch (true) {
  case (Month >= 9):
    console.log("winter");
    break;
  case (Month >= 6):
    console.log("Windy");
    break;
  case (Month >= 3):
    console.log("Rain");
    break;
  case (Month >= 0):
    console.log("Summer");
    break;
  default:
    break;
}
