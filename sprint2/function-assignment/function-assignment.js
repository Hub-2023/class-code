// A named function:

/*function toCodeOrNotToCode(time) {
  if ((time >= 0900) && (time <= 2300)) {
    return "keep coding";
  } else {
    return "go to bed";
  }
}

console.log(toCodeOrNotToCode(2315));*/


// An anonymous function assigned to a variable:

/*const toCodeOrNotToCode = function(time) {
  if ((time >= 0900) && (time <= 2300)) {
    return "keep coding";
  } else {
    return "go to bed";
  }
}

console.log(toCodeOrNotToCode(1015));*/


// An anonymous fat arrow function assigned to a variable:

const toCodeOrNotToCode = (time) => {
  if ((time >= 0900) && (time <= 2300)) {
    return "keep coding";
  } else {
    return "go to bed";
  }
}

console.log(toCodeOrNotToCode(2300));