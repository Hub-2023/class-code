function add(x) {
    return function(y) {
      return x + y;
    }
}

let primed = add(2)() // y goes in the second brackets

console.log(primed)