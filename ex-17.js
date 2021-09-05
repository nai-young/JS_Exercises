// Write a JavaScript program to compute the absolute difference 
// between a specified number and 19. 
// Returns triple their absolute difference if the specified number is greater than 19. 

function difference (number) {
  if (number < 19) {
    return console.log(`The difference is ${19 - number}`)
  }
  return console.log(`The triple of the difference is ${(number - 19) * 3}`)
}

difference(22)