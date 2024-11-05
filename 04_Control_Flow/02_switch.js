//syntax
let key = true;
let value = 6;
switch (key) {
  case value:
    break;

  default:
    break;
}
//Each case checks if its value matches the key.
//If no match is found, the default block runs (if provided)
//const month = "march"
const month = 3;
switch (month) {
  case 1:
    console.log("Jan month");
    break;
  case 2:
    console.log("Feb month");
    break;
  //case "march"
  case 3:
    console.log("March month");
    break;
  case 4:
    console.log("April month");
    break;
  case 5:
    console.log("May month");
    break;
  case 6:
    console.log("June month");
    break;
  case 7:
    console.log("July month");
    break;
  case 8:
    console.log("Aug month");
    break;
  case 9:
    console.log("Sep month");
    break;
  case 10:
    console.log("Oct month");
    break;
  case 11:
    console.log("Nov month");
    break;
  case 12:
    console.log("Dec month");
    break;
  default:
    console.log("Entered wrong month number");
    break;
}
