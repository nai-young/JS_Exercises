// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
var days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
function today () {
  var day = new Date().getDay()
  var hour = new Date().getHours()
  var min = new Date().getMinutes()
  var sec = new Date().getSeconds()
  if (min < 10) {
    min = "0" + min  
  }
  console.log(`Today is: ${days[day - 1]}.\nCurrent time is: ${hour} : ${min} : ${sec}`)
}
today()