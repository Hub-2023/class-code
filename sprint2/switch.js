// switch example 1:

var color = "blue";

switch(colour) {
  // first declare the case you want to compare
  case "red":
    // then declare the action you want to take
    console.log("The color is red");
    // then break
    break;
  case "blue":
    console.log("The color is blue");
    break;
  case "green":
    console.log("The color is green");
    break;
  // if none of the cases match, then use default
  default:
    console.log("The color is not red, blue, or green");
}