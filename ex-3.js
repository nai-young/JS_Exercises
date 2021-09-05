// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

function date () {
  var day = new Date().getDay() - 1 // Local time
  var month = new Date().getMonth() + 1
  var year = new Date().getFullYear()
  if (day < 10) day = "0" + day
  if (month < 10) month = "0" + month

  return console.log(`${month}-${day}-${year}, ${month}/${day}/${year}`)
}
date()