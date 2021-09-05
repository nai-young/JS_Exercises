// Write a JavaScript program to find the area of a triangle 
// where lengths of the three of its sides are 5, 6, 7.

// Heron formula -> area = root permim* (perim - a)(perim - b)(perim -c)
// semiperim = a+b+c/2

function calcArea () {
  var a = 5
  var b = 6
  var c = 7
  var semip = (a + b + c) / 2
  var area = Math.sqrt(semip * ((semip - a) + (semip - b) + (semip - c)))

  return console.log(area)
}
calcArea()