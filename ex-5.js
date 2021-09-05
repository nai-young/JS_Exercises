// Write a JavaScript program to rotate the string 'w3resource' in right direction 
// by periodically removing one letter from the end of the string and attaching it to the front.

function rotate () {
  var str = "w3resource"
  var newStr = ""
  setInterval(function() {
    for (var i = 0; i < str.length; i++) {
      newStr += str.charAt(str.length - (1 + i))
    }
    return console.log(newStr)
  }, 100)
}
rotate()