// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit. 
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C

function toFahrenheit (temp) {
  var fahrenheit = temp * (9 / 5) + 32
  return console.log(`${temp}°C is ${fahrenheit}°F`) 
}

function toCelsius (temp) {
  var celsius = (temp - 32) * (5 / 9)
  return console.log(`${temp}°F is ${celsius}°C`)
}
toFahrenheit(60)
toCelsius(45)