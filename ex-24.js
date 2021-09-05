// Write a JavaScript program to create a new string from a given string 
// with the first character of the given string added at the front and back. 


const add = string => {
  const firstChar = string.substring(0, 1)
  const newStr = string.replace(/^/, firstChar).replace(/$/, firstChar)
  return console.log(newStr)
}

add("Hello World")