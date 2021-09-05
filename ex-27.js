// Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.

starts = str => {
  const char = str.substring(0, 4)
  console.log(char === "Java")
}
starts("Javascript")