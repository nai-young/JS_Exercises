// Write a JavaScript program to check whether two given integer values 
// are in the range 50..99 (inclusive). Return true if either of them are in the said range. 

range = (n1, n2) => {
  console.log(((n1 >= 50) && (n1 <= 90)) || ((n2 >= 50) && (n2 <= 90)) )
}

range(50, 3)