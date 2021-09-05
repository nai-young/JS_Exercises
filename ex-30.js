// Write a JavaScript program to check whether a string "Script" 
// presents at 5th (index 4) position in a given string, 
// if "Script" presents in the string return the string 
// without "Script" otherwise return the original one. 

script = str => {
  var letter = str.substring(4, 10)
  if(letter === "Script") {
    var newStr = str.substring(0, 4) + str.substring(10, str.length)
    return console.log(newStr)
  }
  return console.log(str)
}

script("JavaScript!")