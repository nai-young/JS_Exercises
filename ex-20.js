// Write a JavaScript program to check from two given integers, 
// whether one is positive and another one is negative.

function numbers (n1, n2) {
  return console.log((n1 > 0 && n2 < 0) || (n1 < 0 && n2 > 0))
}

numbers(-2, 2)