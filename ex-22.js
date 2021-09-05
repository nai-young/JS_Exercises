// Write a JavaScript program to remove a character at the specified position 
// of a given string and return the new string.

// Sample Output:
// ython
// Pyton
// Pytho

function removeChar (string, pos) {
  var newPos = pos - 1
  var arrayStr = [...string]
  arrayStr.splice(newPos, 1)
  // remove all occurrences of a particular character 
  var removed = arrayStr.toString().split(",").join("")
  return console.log(removed)
}

removeChar("naiche", 2)