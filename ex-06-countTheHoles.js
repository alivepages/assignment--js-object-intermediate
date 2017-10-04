/**
 * countTheHoles()
 *
 * Write a `countTheHoles` function that takes an intenteger and counts the
 * number of holes for each number.
 *
 * For example: the number 8042 would have 4 holes:
 *  - 2 holes in the 8
 *  - 1 hole in the 0, 4, 6, 9
 *
 *
**/

var holesInDigit = function(digit) {
  var holes = 0;
  switch (digit) {
      case '8':
          holes = 2;
          break;
      case '0':
      case '4':
      case '6':
      case '9':
          holes = 1
          break;
  }
  return holes;
}


var countTheHoles = function(number){
  var holes = 0;
  var digits = number.toString().split('');
  for (i = 0; i < digits.length; i++) {
    holes += holesInDigit(digits[i])
  }
  return holes;
}


//~+~+~+~+~+~+~+~Don't Touch~+~+~++~+~+~+~+~+~+~+
console.assert(  countTheHoles(301923) === 2  )
console.assert(  countTheHoles(880216) === 6  )
console.assert(  countTheHoles(40442) === 4 )
console.assert(  countTheHoles(808) === 5  )
