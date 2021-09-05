//  Write a JavaScript program to get the difference 
// between a given number and 13, if the number is greater than 13 
// return double the absolute difference.

function difference (number) {
  if (number < 13) {
    var result = 13 - number
    return console.log(`The difference is ${result}`)
  }
  var result = number - 13
  if (result > 13) {
    return console.log(`The difference is ${result} and the double is ${result * 2}`)
  }
}
difference (10)
