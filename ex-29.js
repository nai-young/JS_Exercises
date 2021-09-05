// Write a JavaScript program to check whether three given integer values are in the range 50..99 
// (inclusive). Return true if one or more of them are in the said range.

range = (n1, n2, n3) => {
  console.log((n1 >= 50 && n1 <= 90) || (n2 >= 50 && n2 <= 90) || (n3 >= 50 && n3 <= 90))
}

range(50, 3, 99)