// Write a JavaScript program where the program takes a random integer between 1 to 10, 
// the user is then prompted to input a guess number. 
// If the user input matches with guess number, 
// the program will display a message "Good Work" otherwise display a message "Not matched".
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

function match () {
  var random = Math.floor(Math.random() * 10)
  readline.question("Enter a number: ", userNum => {
    if (Number(userNum) == random) {
      return console.log("Good work.")
    }
    return console.log(`Not matched. The number was ${random}.`)
  })
}
match()