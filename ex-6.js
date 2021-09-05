// Write a JavaScript program to determine whether 
// a given year is a leap year in the Gregorian calendar.

function leapYear (year) {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return console.log(`${year} is leap`)
      }
    }
  }
  return console.log(`${year} is not leap`)
}

leapYear(2300)