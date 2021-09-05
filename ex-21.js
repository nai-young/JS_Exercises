// Write a JavaScript program to create a new string 
// adding "Py" in front of a given string.
// If the given string begins with "Py" then return the original string.

function py (string) {
  // str1.substring(0, 2) === 'Py'
  const arrayStr = [...string]
  if (arrayStr[0] == "p" && arrayStr[1] == "y") {
    return console.log(string)
  }
  var newStr = "Py" + string
  return console.log(newStr)
}
py("python")