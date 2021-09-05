// Write a JavaScript program to create a new string from a given string 
// changing the position of first and last characters. 
// The string length must be greater than or equal to 1. 

function change (string) {
  var newStr = string.replace(string[0], "").replace(string[string.length - 1], "")
  var firstChar = string.substring(0, 1)
  var secondChar = string.substring(string.length - 1)
  return console.log(secondChar + newStr + firstChar)
}

change("Hello World!")

// mid_char = str1.substring(1, str1.length - 1);
// return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);