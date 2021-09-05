// Write a JavaScript program to calculate days left until next Christmas

function christmas () {
  var sec = 1000
  var min = sec * 60
  var hours = min * 60
  var days = hours * 24
  
  var christmasDay = new Date("Dec 25, 2021").getTime()
  var now = new Date().getTime()
  var diff = christmasDay - now

  var chrDays = Math.floor(diff / days)
  var chrHours = Math.floor((diff % days) / hours)
  var chrMin = Math.floor((diff % hours) / min)
  var chrSec = Math.floor((diff % min) / sec);

  if (diff <= 0) return console.log("It's christmas day!")
  return console.log(`Christmas:\n${chrDays} days, ${chrHours} hours, ${chrMin} minutes and ${chrSec} seconds.`)
}
christmas()