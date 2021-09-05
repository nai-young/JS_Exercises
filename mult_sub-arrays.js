// return the product of all the numbers in the sub-arrays of arr.

function multiplyAll(arr) {
  var product = 1;

  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j]
    }
  }

  return console.log(product);
}

multiplyAll([[1,2],[3,4],[5,6,7]]); // 1*2*3... Output: 5040