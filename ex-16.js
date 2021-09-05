//  Write a JavaScript program to compute the sum of the two given integers. 
// If the two values are same, then returns triple their sum.

function numbers (n1, n2){
  var sum = n1 + n2
  if (n1 == n2) {
    return console.log(`The two values are the same.\nThe triple of the sum is ${sum * 3}`)
  }
  return console.log(`The sum is ${sum}`)
}
numbers(5, 3)