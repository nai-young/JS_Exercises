// Write a JavaScript program to check whether a given integer is within 20 of 100 or 400

function within (n) {
  return console.log((100 - n <= 20) || (400 - n <= 20))
}
within(10)
within(90)