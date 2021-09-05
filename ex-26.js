// Write a JavaScript program to create a new string from a given string 
// taking the last 3 characters and added at both the front and back. 
// The string length must be 3 or more.

add = str => {
  if (str.length < 3) return console.log(str)
  const lastChar = str.substring(str.length - 3)
 return console.log(lastChar + str + lastChar)
}

add("I love code!")