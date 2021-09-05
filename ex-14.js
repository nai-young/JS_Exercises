// Write a JavaScript exercise to get the extension of a filename.

function extension (file) {
  var extraction = file.split('.')
  var finalExtraction = extraction.pop()
  return console.log(`The file "${extraction}" has the extension ".${finalExtraction}"`)
}

var htmlFile = "new_file.html"
var jsFile = "new_file.js"
extension(htmlFile)
extension(jsFile)